# QuickPay UNIJOS

QuickPay UNIJOS is a React + Vite student payment portal created for a Software Design Principles assignment. It demonstrates a clean JavaScript architecture with wallet management, payment gateway selection, fee payments, student loan plans, success and failure notifications, transaction history, student profile, support pages, and LocalStorage persistence.

## Features

- View wallet balance and payment summary
- Select Paystack, Flutterwave, or Remita
- Pay custom amounts or prefilled fee items
- Display success and failure notifications
- View fee schedule, receipts, student profile, and support contacts
- Review student loan and payment-plan options
- Persist wallet balance and transaction history with LocalStorage
- Responsive deployment-ready UI with React Icons

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS
- React Icons
- LocalStorage

## Installation

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to any static host such as Netlify, Vercel, GitHub Pages, or Firebase Hosting.

## Folder Structure

```text
src/
  components/
    Header.jsx
    WalletCard.jsx
    PaymentForm.jsx
    Notification.jsx
    TransactionList.jsx
    StatCard.jsx
  data/
    studentData.js
  pages/
    DashboardPage.jsx
    FeesPage.jsx
    LoansPage.jsx
    PaymentsPage.jsx
    ProfilePage.jsx
    SupportPage.jsx
    TransactionsPage.jsx
  services/
    WalletService.js
    PaymentService.js
    NotificationService.js
  gateways/
    PaymentGateway.js
    PaystackGateway.js
    FlutterwaveGateway.js
    RemitaGateway.js
  styles/
    main.css
  assets/
  App.jsx
  main.jsx
docs/
  ARCHITECTURE.md
```

## Software Design Principles Demonstrated

### Single Responsibility Principle

The application separates responsibilities into services, gateways, and components. `WalletService` owns wallet behavior, `PaymentService` owns payment processing, and `NotificationService` owns notification objects. React components render UI and pass user actions upward.

### Open/Closed Principle

Payment gateways follow the `PaymentGateway` contract. A new gateway can be added by creating a new class that extends `PaymentGateway`, without changing the internals of `PaymentService`.

### Dependency Inversion Principle

`PaymentService` depends on the gateway abstraction, not on Paystack, Flutterwave, or Remita directly. The selected gateway object is injected into `PaymentService` when a payment is made.

### Information Hiding

Wallet balance storage is hidden inside `WalletService`. The rest of the app can only interact with wallet state through `getBalance()`, `deposit()`, and `withdraw()`.

## Notes

This is a frontend-only demonstration project. It has no backend, API, Firebase, or Redux dependency.
# UJ-QUICKPAY-SEN-102
