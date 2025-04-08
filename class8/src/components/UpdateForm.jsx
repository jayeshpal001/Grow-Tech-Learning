import React, { useState } from "react";
import { useForm } from "react-hook-form";

function UpdateForm() {
  const { register } = useForm();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  function hell() {
    console.log("hey");
  }
  return (
    <form>
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          {...register("firstName")}
          id="fname"

        />
      </div>
      <div>
        <label htmlFor="lname">First Name</label>
        <input {...register("lastName", { required: true })} id="lname" />
      </div>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}

export default UpdateForm;
