import { InputField, FormDatePicker } from "../../molecules";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "./action";
const Register = () => {
  const schema = yup
    .object({
      name: yup.string().required("Name Field is required."),
      address: yup.string().required("Address Field is required."),
      phone: yup.string().required("Phone Number is required."),
      email: yup.string().nullable().email().required("Email is required."),
      date_of_birth: yup
        .date()
        .min(new Date(2010, 0, 1))
        .required("DateOfBirth is required."),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    })
    .required();

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/login");
  };
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const data = { ...values, active: true };
    dispatch(registerAction(data));
  };

  return (
    <>
      <div className="register-section">
        <div className="container">
          <div className="register-box">
            <div className="register-inner">
              <h1 className="register-title text-center">Register Here</h1>
              <form onSubmit={handleSubmit(submitHandler)}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="text"
                        placeholder="Enter First Name"
                        label="First Name"
                      />
                    );
                  }}
                />
                <Controller
                  name="address"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="text"
                        placeholder="Enter Your Address"
                        label="Address"
                      />
                    );
                  }}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="number"
                        placeholder="Enter Your Phone Number"
                        label="Mobile Number"
                      />
                    );
                  }}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="text"
                        placeholder="Enter Your Email"
                        label="Email Address"
                      />
                    );
                  }}
                />
                <Controller
                  name="date_of_birth"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <FormDatePicker
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        label={"Date of Birth"}
                        placeholder={"Select your date of birth."}
                      />
                    );
                  }}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="text"
                        placeholder="Enter password"
                        label="Password"
                      />
                    );
                  }}
                />
                {/* <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <InputField
                        {...field}
                        {...fieldState}
                        error={fieldState.error}
                        type="text"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                      />
                    );
                  }}
                /> */}
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
              <div className="login-back">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={backToLogin}
                >
                  Back To Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
