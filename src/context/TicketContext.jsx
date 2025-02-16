/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from "react";

const TicketContext = createContext();

const initialState = {
  currentStep: 1,
  ticketNum: 1,
  ticketType: null,
  selectedId: null, 
  formData: null,
  avatarUrl: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_TICKET":
      return { ...state, ticketType: action.payload.title, selectedId: action.payload.id };
    case "SET_TICKET_NUMBER":
      return { ...state, ticketNum: action.payload };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "BACK_TO_SELECT_TICKET":
      return { ...state, currentStep: 1 };
    case "SET_FORM_DATA":
      return { ...state, formData: action.payload };
    case "SET_AVATAR_URL":
      return { ...state, avatarUrl: action.payload };
    default:
      return state;
  }
}

function TicketProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedId = (selectedId) => {
    dispatch({ type: "SELECT_TICKET", payload: { id: selectedId } });
  };

  const setFormData = (formData) => {
    dispatch({ type: "SET_FORM_DATA", payload: formData });
  };

  const setAvatarUrl = (avatarUrl) => {
    dispatch({ type: "SET_AVATAR_URL", payload: avatarUrl });
  };

  return (
    <TicketContext.Provider
      value={{ state, dispatch, setSelectedId, setFormData, setAvatarUrl }}
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

export { TicketProvider, useTicket };