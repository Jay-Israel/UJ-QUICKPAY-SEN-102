import PaymentGateway from "./PaymentGateway.js";

class RemitaGateway extends PaymentGateway {
  constructor() {
    super("Remita");
  }

  processPayment(amount) {
    return {
      success: true,
      amount,
      reference: this.createReference("RMT"),
      gateway: this.name,
    };
  }
}

export default RemitaGateway;
