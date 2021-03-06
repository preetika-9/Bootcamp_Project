import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../molecules";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../action/LoginAction";
import { Form, Button } from "react-bootstrap";

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
    navigate("/register");
  };

  const dispatch = useDispatch();
  const submitHandler = async (values) => {
    const data = { ...values, active: true };

    const response = await dispatch(LoginAction(data));
    // console.log(data);
    console.log(response);
    navigate("/listpage");
  };

  return (
    <div className="login-section ">
      <div className="container ">
        <div className="login-wrapper">
          <div className="login-box ">
            <div className="login-inner ">
              <h1 className="login-title text-center fs-1 fw-bold">Log in</h1>
              <form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group>
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
                </Form.Group>

                <Form.Group>
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
                </Form.Group>

                <div>
                  <Button
                    variant="dark"
                    type="submit"
                    className="login-btn btn-lg"
                  >
                    Login
                  </Button>
                </div>

                <Form.Text>
                  <p className="fs-5">
                    Not a member{" "}
                    <Link onClick={goToRegister} to="./register">
                      Register Here
                    </Link>
                  </p>
                </Form.Text>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
