import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup
    .object({
      email: yup.string().nullable().email().required("Email is required"),
      password: yup
        .string()
        .min(8)
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    })
    .required();

  const { control } = useForm({
    resolver: yupResolver(schema),
  });

  const apiUrl = "http://localhost:3005/api";

  axios.interceptors.request.use(
    (config) => {
      const { origin } = new URL(config.url);

      const allowedOrigins = [apiUrl];

      const token = localStorage.getItem("token");

      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // POST
  const getJwt = async (value) => {
    const postData = {
      email: value.email, // input from form field username
      password: value.password, // input from form field password
    };

    const res = await axios.post(`${apiUrl}/auth`, postData);

    if (res.status === 200) {
      localStorage.setItem("token", res.data?.token);

      setJwt(res.data?.token);
    }
  };

  const handleChange = (e) => {
    e.persist();
    setLoginData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    getJwt(loginData);
  }

  return (
    <Form>
      <h1>Log in</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => {
            return (
              <Form.Control
                {...field}
                {...fieldState}
                error={fieldState.error}
                placeholder="Enter your Email"
                value={loginData.email}
                onChange={handleChange}
              />
            );
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => {
            return (
              <Form.Control
                {...field}
                {...fieldState}
                error={fieldState.error}
                placeholder="Enter your Password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
              />
            );
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Controller
          control={control}
          name="remember me"
          render={({ field, fieldState }) => {
            return (
              <Form.Check
                {...field}
                {...fieldState}
                error={fieldState.error}
                label="Remember me"
              />
            );
          }}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type="submit" variant="dark" size="lg" onClick={handleSubmit}>
          Sign in
        </Button>
      </div>

      <Form.Group className="text-center">
        <Form.Text>
          Don't have an account?
          <Link to="/register"> Create an account!</Link>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Login;
