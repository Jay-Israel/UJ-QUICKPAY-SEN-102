import PaymentGateway from "./PaymentGateway.js";

class FlutterwaveGateway extends PaymentGateway {
  constructor() {
    super("Flutterwave");
  }

  processPayment(amount) {
    return {
      success: true,
      amount,
      reference: this.createReference("FLW"),
      gateway: this.name,
    };
  }
}

export default FlutterwaveGateway;
