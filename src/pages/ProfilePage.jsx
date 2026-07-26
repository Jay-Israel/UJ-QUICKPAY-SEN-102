import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaIdCard,
  FaSave,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";

function ProfilePage({ onProfileUpdate, studentProfile }) {
  const [formData, setFormData] = useState({
    faculty: studentProfile.faculty,
    programme: studentProfile.programme,
  });
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    setFormData({
      faculty: studentProfile.faculty,
      programme: studentProfile.programme,
    });
  }, [studentProfile]);

  const profileRows = [
    { icon: <FaIdCard />, label: "Matric Number", value: studentProfile.matricNumber },
    { icon: <FaUserGraduate />, label: "Course", value: studentProfile.programme },
    { icon: <FaUniversity />, label: "Faculty", value: studentProfile.faculty },
    { icon: <FaEnvelope />, label: "Email", value: studentProfile.email },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onProfileUpdate({
      faculty: formData.faculty.trim() || "Faculty of Computing",
      programme: formData.programme.trim() || "Software Engineering",
    });
    setSaveMessage("Profile updated successfully.");
  };

  return (
    <section className="page-layout two-column-page" aria-label="Student profile">
      <div className="profile-hero">
        <p className="eyebrow">Student Profile</p>
        <h2>{studentProfile.name}</h2>
        <p>{studentProfile.level}</p>
      </div>

      <div className="profile-grid">
        <section className="card profile-editor">
          <div className="section-heading">
            <div className="card-icon" aria-hidden="true">
              <FaUserGraduate />
            </div>
            <div>
              <p className="card-label">Academic Details</p>
              <h2>Edit Course and Faculty</h2>
            </div>
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <label htmlFor="programme">Course</label>
            <input
              id="programme"
              placeholder="Software Engineering"
              type="text"
              value={formData.programme}
              onChange={(event) =>
                setFormData((currentData) => ({
                  ...currentData,
                  programme: event.target.value,
                }))
              }
            />

            <label htmlFor="faculty">Faculty</label>
            <input
              id="faculty"
              placeholder="Computing"
              type="text"
              value={formData.faculty}
              onChange={(event) =>
                setFormData((currentData) => ({
                  ...currentData,
                  faculty: event.target.value,
                }))
              }
            />

            <button className="primary-button" type="submit">
              <FaSave aria-hidden="true" />
              Save Profile
            </button>
          </form>

          {saveMessage ? <p className="success-text">{saveMessage}</p> : null}
        </section>

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
