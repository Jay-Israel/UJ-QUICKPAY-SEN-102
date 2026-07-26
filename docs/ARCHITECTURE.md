# QuickPay UNIJOS Architecture

QuickPay UNIJOS is organized around simple service classes and UI components. The main goal is to make the software design principles visible in the code without adding unnecessary complexity.

## Single Responsibility Principle

Each module has one primary reason to change.

- `WalletService` manages wallet balance, deposits, withdrawals, and LocalStorage persistence.
- `PaymentService` validates payment requests, coordinates the selected gateway, debits the wallet, and records transactions.
- `NotificationService` creates success and error notification objects for the UI.
- React components render the interface and collect user input. They do not contain wallet or payment business rules.

This separation makes the application easier to test, maintain, and explain in a software engineering assignment.

## Open/Closed Principle

The payment flow is open for extension and closed for modification through the `PaymentGateway` abstraction.

Existing gateway implementations:

- `PaystackGateway`
- `FlutterwaveGateway`
- `RemitaGateway`

Each gateway implements `processPayment(amount)` and returns a result object:

```js
{
  success: true,
  reference: "...",
  gateway: "Paystack"
}
```

To add a new gateway, create a new class that extends `PaymentGateway` and implements `processPayment(amount)`. The payment service does not need to know the gateway's concrete class.

## Dependency Inversion Principle

`PaymentService` depends on the gateway contract instead of depending on concrete gateway classes.

The selected gateway is injected into `makePayment`:

```js
paymentService.makePayment({
  amount,
  gateway: selectedGateway,
});
```

Because `PaymentService` only calls `gateway.processPayment(amount)`, it can work with any gateway that follows the same abstraction.

## Information Hiding

Wallet balance is encapsulated inside `WalletService`.

The UI and payment service cannot directly mutate the LocalStorage balance. They must use:

- `getBalance()`
- `deposit(amount)`
- `withdraw(amount)`

This hides storage details and protects wallet rules, such as preventing withdrawals when the balance is insufficient.

## Data Persistence

The application uses LocalStorage for demo persistence:

- `quickpay_unijos_wallet_balance`
- `quickpay_unijos_transactions`

This keeps the app frontend-only while still preserving wallet and transaction data across page refreshes.
