import PaymentGateway from "./PaymentGateway.js";

class PaystackGateway extends PaymentGateway {
  constructor() {
    super("Paystack");
  }

  processPayment(amount) {
    return {
      success: true,
      amount,
      reference: this.createReference("PSTK"),
      gateway: this.name,
    };
  }
}

export default PaystackGateway;
