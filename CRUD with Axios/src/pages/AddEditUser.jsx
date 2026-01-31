import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { userSchema } from "../validations/userSchema";

function AddEditUser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Submit the form data to the JSON server
      await axios.post("/users", data);
      // Navigate back to the user list after successful submission
      navigate(-1);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="">
      <h2>Add User</h2>
      <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Name</label>
          <InputText {...register("name")} />
          <small className="p-error">{errors.name?.message}</small>
        </div>

        <div className="field">
          <label>User Name</label>
          <InputText {...register("username")} />
          <small className="p-error">{errors.username?.message}</small>
        </div>

        <div className="field">
          <label>Email</label>
          <InputText {...register("email")} />
          <small className="p-error">{errors.email?.message}</small>
        </div>

        <div className="field">
          <label>Age</label>
          <Controller
            control={control}
            render={({ field }) => (
              <InputNumber
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
                className={errors.age ? "p-invalid" : ""}
              />
            )}
            name="age"
          />
          <small className="p-error">{errors.age?.message}</small>
        </div>

        <Button label="Save" icon="pi pi-check" />
      </form>
    </div>
  );
}

export default AddEditUser;