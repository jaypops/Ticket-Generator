import { createContext, useContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

const TicketContext = createContext();

const initialState = {
  currentStep: 1,
  Ticketnum: 1,
  Ticketype: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "SELECT_TICKET":
      return { ...state, Ticketype: action.payload };
    case "SET_TICKET_NUMBER":
      return { ...state, Ticketnum: action.payload };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: 1 };
    default:
      return state;
  }
}

function TicketProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <TicketContext.Provider
      value={{ state, dispatch, setSelectedId, selectedId }}
    >
      {children}
    </TicketContext.Provider>
  );
}

function useTicket() {
  const context = useContext(TicketContext);
  if (!context)
    throw new Error("useTicket must be used within a TicketProvider");
  return context;
}

TicketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TicketProvider, useTicket };
