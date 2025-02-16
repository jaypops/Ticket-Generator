import { useState } from "react";
import { useTicket } from "../context/TicketContext";
import { Dropdown } from "../ui/Dropdown";
import { Button } from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";


function Ticketsection() {
  const { dispatch, state, setSelectedId } = useTicket();
  const { selectedId,currentStep } = state;

  const [tickets, setTickets] = useState("1");

  const Tickets = [
    { title: "REGULAR ACCESS", price: "Free", date: "20/52", id: 1 },
    { title: "VIP ACCESS", price: 50, date: "20/52", id: 2 },
    { title: "VVIP ACCESS", price: 150, date: "20/52", id: 3 },
  ];

  const ticketOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const handleTicketSelection = (ticket) => {
    setSelectedId(ticket.id);
    dispatch({ type: "SELECT_TICKET", payload: ticket }); 
  };

  const handleChange = (e) => {
    setTickets(e.target.value);
    dispatch({ type: "SET_TICKET_NUMBER", payload: e.target.value });
  };

  const handleNext = () => {
    if (selectedId) {
      dispatch({ type: "NEXT_STEP" });
    } else {
      alert("Please select a ticket type.");
    }
  };

  return (
    <div className="main">
      <div className="borb">
        <div className="header">
          <h1>Ticket Section</h1>
          <h3>
            Step <span>1/3</span>
          </h3>
        </div>
        <div>
        <ProgressBar currentStep={currentStep} totalSteps={3} />
        </div>
        <div className="tickglass">
          <div className="ticktitle">
            <div className="ticktext">
              <h1>Techember Fest ”25</h1>
              <p>
                Join us for an unforgettable experience! Secure your spot now.
              </p>
              <h3>📍 [Event Location] | March 15, 2025 | 7:00 PM</h3>
            </div>
          </div>
          <div className="tickline"></div>
          <div className="tickselect">
            <p>Select ticket type:</p>
            <div className="ticks">
              {Tickets.map((tick) => (
                <div
                  key={tick.id}
                  onClick={() => handleTicketSelection(tick)}
                  className={`tickpick ${
                    tick.id === selectedId
                      ? "tickpick-active"
                      : "tickpick-inactive"
                  }`}
                >
                  <h1>{tick.price}</h1>
                  <h2>{tick.title}</h2>
                  <h3>{tick.date}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="form-container">
              <Dropdown
                label="Number of Tickets"
                options={ticketOptions}
                value={tickets}
                onChange={handleChange}
              />
              <div className="button-group">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticketsection;