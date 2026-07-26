import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

const iconMap = {
  success: <FaCheckCircle aria-hidden="true" />,
  error: <FaTimesCircle aria-hidden="true" />,
  info: <FaInfoCircle aria-hidden="true" />,
};

function Notification({ notification }) {
  const visibleNotification =
    notification ||
    {
      type: "info",
      title: "Ready",
      message: "Choose a gateway and enter an amount to make a payment.",
    };

  return (
    <section
      className={`notification notification-${visibleNotification.type}`}
      role="status"
      aria-live="polite"
    >
      <div className="notification-icon">
        {iconMap[visibleNotification.type]}
      </div>
      <div>
        <h2>{visibleNotification.title}</h2>
        <p>{visibleNotification.message}</p>
      </div>
    </section>
  );
}

export default Notification;
