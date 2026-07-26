const BALANCE_STORAGE_KEY = "quickpay_unijos_wallet_balance";
const DEFAULT_BALANCE = 120000;

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

class WalletService {
  constructor(storage = getStorage()) {
    this.storage = storage;
    this.initializeWallet();
  }

  initializeWallet() {
    if (this.storage.getItem(BALANCE_STORAGE_KEY) === null) {
      this.saveBalance(DEFAULT_BALANCE);
    }
  }

  // Information Hiding: callers can read the balance, but cannot modify storage directly.
  getBalance() {
    return Number(this.storage.getItem(BALANCE_STORAGE_KEY));
  }

  deposit(amount) {
    const nextBalance = this.getBalance() + Number(amount);
    this.saveBalance(nextBalance);
    return nextBalance;
  }

  withdraw(amount) {
    const paymentAmount = Number(amount);
    const currentBalance = this.getBalance();

    if (paymentAmount > currentBalance) {
      return false;
    }

    this.saveBalance(currentBalance - paymentAmount);
    return true;
  }

  saveBalance(balance) {
    this.storage.setItem(BALANCE_STORAGE_KEY, String(balance));
  }
}

export default WalletService;
