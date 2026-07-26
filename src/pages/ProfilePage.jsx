import { FaEnvelope, FaIdCard, FaUniversity, FaUserGraduate } from "react-icons/fa";

function ProfilePage({ studentProfile }) {
  const profileRows = [
    { icon: <FaIdCard />, label: "Matric Number", value: studentProfile.matricNumber },
    { icon: <FaUserGraduate />, label: "Programme", value: studentProfile.programme },
    { icon: <FaUniversity />, label: "Faculty", value: studentProfile.faculty },
    { icon: <FaEnvelope />, label: "Email", value: studentProfile.email },
  ];

  return (
    <section className="page-layout two-column-page" aria-label="Student profile">
      <div className="profile-hero">
        <p className="eyebrow">Student Profile</p>
        <h2>{studentProfile.name}</h2>
        <p>{studentProfile.level}</p>
      </div>

      <div className="profile-grid">
        {profileRows.map((row) => (
          <section className="card profile-card" key={row.label}>
            <div className="card-icon" aria-hidden="true">
              {row.icon}
            </div>
            <div>
              <p className="card-label">{row.label}</p>
              <h3>{row.value}</h3>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default ProfilePage;
