class PaymentGateway {
  constructor(name) {
    this.name = name;
  }

  // OCP: new gateways only need to implement this shared contract.
  processPayment() {
    throw new Error("processPayment(amount) must be implemented.");
  }

  createReference(prefix) {
    const timestamp = Date.now();
    const randomValue = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `${prefix}-${timestamp}-${randomValue}`;
  }
}

export default PaymentGateway;
