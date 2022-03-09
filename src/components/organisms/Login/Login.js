import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../molecules";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../action/LoginAction";

const Login = () => {
  const schema = yup
    .object({
      email: yup.string().nullable().email().required("Email is required"),
      password: yup.string().min(4).required("Password is required"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
      // ),
    })
    .required();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/listpage");
  };

  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const data = { ...values, active: true };
    dispatch(LoginAction(data));
    console.log(data);
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="login-box">
          <div className="login-inner">
            <h1 className="login-title text-center">Log in</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Controller
                name="email"
                control={control}
                defaultValue={""}
                render={({ field, fieldState }) => {
                  return (
                    <InputField
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      type="text"
                      placeholder="Enter your email"
                      label="Email"
                    />
                  );
                }}
              />

              <Controller
                name="password"
                control={control}
                defaultValue={""}
                render={({ field, fieldState }) => {
                  return (
                    <InputField
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      type="password"
                      placeholder="Enter your password"
                      label="Password"
                    />
                  );
                }}
              />
              <div className="d-grid ">
                <button className="btn btn-dark " type="submit">
                  Login
                </button>
              </div>

              <div>
                <p>
                  Not a member{" "}
                  <Link onClick={goToRegister} to="./register">
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
