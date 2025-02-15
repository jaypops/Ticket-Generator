/* eslint-disable react/prop-types */
import "./Form.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function Form({ onSubmit, setHandleSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (setHandleSubmit) {
      setHandleSubmit(() => handleSubmit(onSubmit));
    }
  }, [handleSubmit, onSubmit, setHandleSubmit]);

  return (
    <form className="form-fields">
      <div className="input-group">
        <label>Enter your name</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your name"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      <div className="input-group">
        <label>Enter your email *</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="hello@avloglagos.io"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="input-group">
        <label>Special request?</label>
        <textarea
          {...register("specialRequest")}
          placeholder="Textarea"
          rows={4}
        />
      </div>
    </form>
  );
}
