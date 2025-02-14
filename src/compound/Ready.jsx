import { Ticketcover } from "./Ticketcover";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";

function Ready() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("ticketFormData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Error reading ticket data:", error);
      setFormData(null);
    }
  }, []);

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="main">
      <div className="borb">
        <div className="header">
          <h1>Ready</h1>
          <h3>
            Step <span>3/3</span>
          </h3>
        </div>
        <div className="redetails">
          <h1>Your Ticket is Booked!</h1>
          <p>You can download or check your email for a copy</p>
        </div>
        <div className="remain">
          <div className="resip">
            <Ticketcover />
            <div className="recontainer">
              <div className="recontent">
                <div className="reheader">
                  <h1 className="retitle">Techember Fest ’25</h1>
                  <div className="reinfo">
                    <p>📅 March 15, 2025 | 7:00 PM</p>
                  </div>
                </div>
                <img
                  src={formData.avatar || "/default-avatar.png"}
                  className="reimage"
                  alt="Profile"
                />
                <div className="redetail">
                  <div className="refield">
                    <p className="label">Name</p>
                    <h4 className="value">{formData.name}</h4>
                  </div>
                  <div className="refield">
                    <p className="label">Email</p>
                    <h4 className="value">{formData.email}</h4>
                  </div>
                  <div className="refield">
                    <p className="label">Ticket Type</p>
                    <h4 className="value">
                      {formData.ticketType || "Not selected"}
                    </h4>
                  </div>
                  <div className="refield">
                    <p className="label">Number of Tickets</p>
                    <h4 className="value">{formData.ticketNum}</h4>
                  </div>
                  <div className="refield special-request">
                    <p className="label">Special Request</p>
                    <h4 className="value">
                      {formData.specialRequest || "No special requests"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="attbtn">
          <Button variant="secondary">Book Another Ticket</Button>
          <Button variant="primary">Download Ticket</Button>
        </div>
      </div>
    </div>
  );
}

export default Ready;
