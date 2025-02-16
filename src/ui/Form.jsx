import "./Form.css";
import { useState, forwardRef, useImperativeHandle } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"), 
  email: z.string().email("Invalid email address"), 
  specialRequest: z.string().max(100, "Special request must be 100 characters or less"), 
});

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error?.formErrors?.fieldErrors || {});
      return false;
    }
    setErrors({});
    return true;
  };

  useImperativeHandle(ref, () => ({
    getFormData: () => formData,
    validateForm,
  }));

  return (
    <form className="form-fields">
      <div className="input-group">
        <label>Enter your name</label>
        {errors.name && <span className="error">Name is required</span>}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="input-group">
        <label>Enter your email *</label>
        {errors.email && <span className="error">Invalid email address</span>}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="hello@avloglagos.io"
        />
      </div>

      <div className="input-group">
        <label>Special request?</label>
        {errors.specialRequest && (
          <span className="error">
            Special request must be 50 characters or less
          </span>
        )}
        <textarea
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          placeholder="Textarea"
          rows={4}
        />
      </div>
    </form>
  );
});
Form.displayName = "Form";

export default Form;
