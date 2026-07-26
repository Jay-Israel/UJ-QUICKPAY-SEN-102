class NotificationService {
  success(message) {
    return {
      type: "success",
      title: "Payment Successful",
      message,
    };
  }

  error(message) {
    return {
      type: "error",
      title: "Payment Failed",
      message,
    };
  }
}

export default NotificationService;
