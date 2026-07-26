const TRANSACTIONS_STORAGE_KEY = "quickpay_unijos_transactions";

const memoryStorage = (() => {
  const store = new Map();

  return {
    getItem: (key) => store.get(key) || null,
    setItem: (key, value) => store.set(key, value),
  };
})();

function getStorage() {
  if (typeof window === "undefined") {
    return memoryStorage;
  }

  return window.localStorage;
}

class PaymentService {
  constructor(walletService, storage = getStorage()) {
    this.walletService = walletService;
    this.storage = storage;
  }

  makePayment({ amount, gateway, description = "Campus payment", category = "General" }) {
    const paymentAmount = Number(amount);

    if (!gateway || typeof gateway.processPayment !== "function") {
      return {
        success: false,
        message: "Please select a valid payment gateway.",
      };
    }

    if (!Number.isFinite(paymentAmount) || paymentAmount <= 0) {
      return {
        success: false,
        message: "Enter a valid payment amount greater than zero.",
      };
    }

    const paymentResult = gateway.processPayment(paymentAmount);

    if (!paymentResult.success) {
      return {
        success: false,
        message: `${gateway.name} could not complete this payment.`,
      };
    }

    const wasDebited = this.walletService.withdraw(paymentAmount);

    if (!wasDebited) {
      return {
        success: false,
        message: "Insufficient wallet balance for this payment.",
      };
    }

    const transaction = {
      amount: paymentAmount,
      category,
      description,
      gateway: paymentResult.gateway,
      reference: paymentResult.reference,
      createdAt: new Date().toISOString(),
      status: "success",
    };

    this.saveTransaction(transaction);

    return {
      success: true,
      transaction,
      message: `${description} payment of ${paymentAmount.toLocaleString("en-NG")} completed with ${paymentResult.gateway}.`,
    };
  }

  getTransactions() {
    const storedTransactions = this.storage.getItem(TRANSACTIONS_STORAGE_KEY);
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  }

  saveTransaction(transaction) {
    const transactions = [transaction, ...this.getTransactions()];
    this.storage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions));
  }
}

export default PaymentService;
