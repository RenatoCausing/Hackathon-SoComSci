import { useState } from 'react';
import { User } from 'lucide-react';
import '../Styles/QueuePage.css'; // Import the CSS file

// Note: Mont may not be available on Google Fonts.
// For this example, we're using Montserrat which is visually similar.
// If you have a license for Mont, use a different implementation method.
import { Helmet } from "react-helmet"; // You may need to install this package

export default function CardiologyQueue() {
  const patients = [
    { 
      id: 1, 
      name: 'John Pork', 
      condition: 'Inconsistent Heart Rhythm', 
      priority: 'CRITICAL', 
      date: 'Today' 
    },
    { 
      id: 2, 
      name: 'Patient 2', 
      condition: 'Persistent Heart Burn', 
      priority: 'URGENT', 
      date: 'Today' 
    },
    { 
      id: 3, 
      name: 'Tim Cheese', 
      condition: 'Heart Attack Survivor', 
      priority: 'URGENT', 
      date: 'Today' 
    },
    { 
      id: 4, 
      name: 'Patient 3', 
      condition: 'Enlargement of ventricles', 
      priority: '', 
      date: 'Tomorrow' 
    },
    { 
      id: 5, 
      name: 'Patient 4', 
      condition: 'Heart Checkup', 
      priority: '', 
      date: 'Tomorrow' 
    },
    { 
      id: 6, 
      name: 'You', 
      condition: 'Regular Checkup', 
      priority: '', 
      date: 'May 7' 
    },
    { 
      id: 7, 
      name: 'Mariana Napolitani', 
      condition: 'Regular Checkup', 
      priority: '', 
      date: 'May 7' 
    },
  ];

  const [showSchedule, setShowSchedule] = useState(false);

  const handleViewPatient = (id) => {
    console.log(`Viewing patient ${id}`);
  };

  return (
    <>
      {/* If using react-helmet to load fonts dynamically */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-curve">
          <div className="curve-bg"></div>
          <div className="header-icon">
            <User size={24} />
          </div>
        </div>
        <div className="header-content">
          <h1 className="header-title">Cardiology Queue</h1>
          <div className="header-underline"></div>
        </div>
      </div>
      
      {/* Schedule Dropdown */}
      <div className="schedule-dropdown">
        <button 
          className="dropdown-button"
          onClick={() => setShowSchedule(!showSchedule)}
        >
          estimated schedule 
          <span className="dropdown-icon">▼</span>
        </button>
      </div>
      
      {/* Patient List */}
      <div className="patient-list">
        {patients.map((patient) => (
          <div key={patient.id} className="patient-item">
            <div className="patient-info">
              <div className="avatar-container">
                <div className="avatar">
                  <User size={24} />
                </div>
                <div className="avatar-badge"></div>
              </div>
              <div className="patient-details">
                <div className="patient-name-container">
                  <span className="patient-name">{patient.name}</span>
                  {patient.priority && (
                    <span className={`priority-tag ${
                      patient.priority === 'CRITICAL' ? 'priority-critical' : 
                      patient.priority === 'URGENT' ? 'priority-urgent' : ''
                    }`}>
                      #{patient.priority}
                    </span>
                  )}
                </div>
                <p className="patient-condition">{patient.condition}</p>
              </div>
            </div>
            <div className="patient-actions">
              <span className="patient-date">{patient.date}</span>
              <button 
                className="view-button"
                onClick={() => handleViewPatient(patient.id)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Footer */}
      <div className="footer">
        <button className="nav-button nav-home">
          <div className="nav-icon">🏠</div>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-button nav-other">
          <div className="nav-icon">🔍</div>
          <span className="nav-label">Search</span>
        </button>
        <button className="nav-button nav-other">
          <div className="nav-icon">➕</div>
          <span className="nav-label">Hospital</span>
        </button>
        <button className="nav-button nav-other">
          <div className="nav-icon">👤</div>
          <span className="nav-label">Profile</span>
        </button>
      </div>
    </div>
    </>
  );
}