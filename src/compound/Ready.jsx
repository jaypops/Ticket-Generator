import { useTicket } from "../context/TicketContext";
import { Ticketcover } from "./Ticketcover";
import { Button } from "../ui/Button";
import srl from "./bar.svg";
import ProgressBar from "../ui/ProgressBar";

function Ready() {
  const { state, dispatch } = useTicket();
  const { formData, avatarUrl } = state;
  const { currentStep } = state;
  const handleReset = () => {
    dispatch({ type: "BACK_TO_SELECT_TICKET" });
  };

  return (
    <div className="main">
      <div className="borb">
        <div className="header">
          <h1>Ready</h1>
          <h3>
            Step <span>3/3</span>
          </h3>
        </div>
        <div>
        <ProgressBar currentStep={currentStep} totalSteps={3} />
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
                <img src={avatarUrl} className="reimage" alt="Profile" />
                <div className="redetail">
                  <div className="refield">
                    <p className="label">Name</p>
                    <h4 className="value">{formData?.name}</h4>
                  </div>
                  <div className="refield">
                    <p className="label">Email</p>
                    <h4 className="value">{formData?.email}</h4>
                  </div>
                  <div className="refield">
                    <p className="label">Ticket Type</p>
                    <h4 className="value">{state.ticketType}</h4>
                  </div>
                  <div className="refield">
                    <p className="label">Number of Tickets</p>
                    <h4 className="value">{state.ticketNum}</h4>
                  </div>
                  <div className="refield special-request">
                    <p className="label">Special Request</p>
                    <h4 className="value">{formData?.specialRequest}</h4>
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
          <Button variant="secondary" onClick={handleReset}>
            Book Another Ticket
          </Button>
          <Button variant="primary">Download Ticket</Button>
        </div>
      </div>
    </div>
  );
}

export default Ready;
