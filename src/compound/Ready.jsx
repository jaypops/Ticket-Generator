/* eslint-disable react/prop-types */
import { useTicket } from "../context/TicketContext"; // Adjust the import path as necessary
import { Ticketcover } from "./Ticketcover";
import { Button } from "../ui/Button";
import srl from "./bar.svg";

function Ready() {
  const { state } = useTicket();
  const { formData, avatarUrl } = state;

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
                    <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                    <p>📅 March 15, 2025 | 7:00 PM</p>
                  </div>
                </div>
                <img
                  src={avatarUrl} // Display the uploaded avatar
                  className="reimage"
                  alt="Profile"
                />
                <div className="redetail">
                  <div className="refield">
                    <p className="label">Name</p>
                    <h4 className="value">{formData?.name}</h4> {/* Display name */}
                  </div>
                  <div className="refield">
                    <p className="label">Email</p>
                    <h4 className="value">{formData?.email}</h4> {/* Display email */}
                  </div>
                  <div className="refield">
                    <p className="label">Ticket Type</p>
                    <h4 className="value">{state.ticketType}</h4> {/* Display ticket type */}
                  </div>
                  <div className="refield">
                    <p className="label">Number of Tickets</p>
                    <h4 className="value">{state.ticketNum}</h4> {/* Display number of tickets */}
                  </div>
                  <div className="refield special-request">
                    <p className="label">Special Request</p>
                    <h4 className="value">
                      {formData?.specialRequest} {/* Display special request */}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="reim">
                <img src={srl} alt="Bar" />
              </div>
            </div>
          </div>
        </div>
        <div className="rebtn">
          <Button variant="secondary">
            Book Another Ticket
          </Button>
          <Button variant="primary">Download Ticket</Button>
        </div>
      </div>
    </div>
  );
}

export default Ready;