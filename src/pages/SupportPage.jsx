import { FaHeadset } from "react-icons/fa";

function SupportPage({ supportChannels }) {
  return (
    <section className="page-layout" aria-label="Support">
      <div className="page-heading">
        <p className="eyebrow">Support</p>
        <h2>Campus Payment Help</h2>
      </div>

      <div className="support-grid">
        {supportChannels.map((channel) => (
          <article className="card support-card" key={channel.title}>
            <div className="card-icon" aria-hidden="true">
              <FaHeadset />
            </div>
            <h3>{channel.title}</h3>
            <p>{channel.detail}</p>
            <a href={`mailto:${channel.contact}`}>{channel.contact}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SupportPage;
