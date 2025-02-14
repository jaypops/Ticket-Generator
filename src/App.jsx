import Navbar from "./compound/Navbar";
import Ready from "./compound/Ready";
import Attendee from "./compound/Attendee";
import Ticketsection from "./compound/Ticketsection";
import { useTicket } from "./context/TicketContext";

function App() {
  const { state } = useTicket();

  return (
    <div className="back">
      <Navbar />
      <div className="space">
        {state.currentStep === 1 ? (
          <Ticketsection />
        ) : state.currentStep === 2 ? (
          <Attendee />
        ) : (
          <Ready />
        )}
      </div>
    </div>
  );
}

export default App;
