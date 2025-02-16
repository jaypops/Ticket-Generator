import { useRef, useState } from "react";
import Form from "../ui/Form";
import Droppic from "../ui/Droppic";
import { Button } from "../ui/Button";
import { useTicket } from "../context/TicketContext"; 
function Attendee() {
  const formRef = useRef(null);
  const [avatar, setAvatar] = useState("");
  const { dispatch, setFormData, setAvatarUrl } = useTicket(); 

  const handleGetTicket = () => {
    if (!formRef.current || !avatar) {
      alert("Please fill out the form and upload a profile picture.");
      return;
    }

    const isFormValid = formRef.current.validateForm();
    if (!isFormValid) 
      return;

    const formData = formRef.current.getFormData();

    setFormData(formData);
    setAvatarUrl(avatar);

    dispatch({ type: "NEXT_STEP" }); 
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
        <div className="tickglass">
          <div className="attmain">
            <label>Upload Profile Picture</label>
            <div className="attadark">
              <Droppic setValue={(name, value) => setAvatar(value)} />
            </div>
          </div>
          <div className="tickline"></div>
          <div className="form-container">
            <Form ref={formRef} />
          </div>
          <div className="attbtn">
            <Button variant="secondary">Back</Button>
            <Button variant="primary" onClick={handleGetTicket}>
              Get my free ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendee;