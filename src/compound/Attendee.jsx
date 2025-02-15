import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import Form from "../ui/Form";
import Droppic from "../ui/Droppic";
import { Button } from "../ui/Button";
import { useTicket } from "../context/TicketContext";

function Attendee() {
  const { dispatch, selectedId, state } = useTicket();
  const methods = useForm();
  const { setValue, watch } = methods; 
  const [handleSubmitForm, setHandleSubmitForm] = useState(null);

  const photoValue = watch("Photo");

  const onSubmit = (data) => {
    const combinedData = {
      ...data,
      ticketType: state.ticketType,
      ticketNum: state.ticketNum,
    };

    localStorage.setItem("ticketFormData", JSON.stringify(combinedData));
    console.log("Form Data Submitted:", combinedData);
  };

  const handleNext = () => {
    if (selectedId) {
      dispatch({ type: "NEXT_STEP" });
    }
    if (handleSubmitForm) {
      handleSubmitForm();
    }
  };

  return (
    <div className="main">
      <div className="borb">
        <div className="header">
          <h1>Attendee Details</h1>
          <h3>
            Step <span>2/3</span>
          </h3>
        </div>
        <FormProvider {...methods}>
          <div className="tickglass">
            <div className="attmain">
              <label>Upload Profile Picture</label>
              <div className="attadark">
                <Droppic setValue={setValue} />
              </div>
            </div>
            <div className="tickline"></div>
            <div className="form-container">
              <Form onSubmit={onSubmit} setHandleSubmit={setHandleSubmitForm} />
            </div>
            <div className="attbtn">
              <Button
                variant="secondary"
                onClick={() => dispatch({ type: "PREV_STEP" })}
              >
                Back
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={!photoValue} 
              >
                Get my free ticket
              </Button>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default Attendee;