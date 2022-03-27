import React, { useEffect, useState } from "react";
import { InputField, FormDatePicker } from "../../molecules";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { registerAction } from "./action";
import axios from "../../../utils/axios";
import { useDropzone } from "react-dropzone";
import { getUserById } from "./api";
// import { editUser } from "./action";

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
      password: yup.string().required("Please Enter your password"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
    })
    .required();

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const params = useParams();
  const navigate = useNavigate();
  const backToLogin = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  // const dispatch = useDispatch();
  // const submitHandler = (values) => {
  //   const data = { ...values, active: true };
  //   dispatch(registerAction(data));
  // };

  const [selectedFile, setSelectedFile] = useState();
  //const [isSelected, setIsSelected] = useState(false);

  const handleSubmission = async (values) => {
    const formData = new FormData();
    const { name, address, email, phone, date_of_birth, password } = values;

    formData.append("profile_picture", selectedFile);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("date_of_birth", date_of_birth);
    formData.append("active", true);
    formData.append("password", password);

    try {
      const response = await axios({
        method: "POST",
        url: "/api/auth/register",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const { getRootProps, getInputProps } = useDropzone();

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  useEffect(async () => {
    if (params.id) {
      try {
        const response = await getUserById(params.id);
        setValue("name", response.name);
        setValue("address", response.address);
        setValue("email", response.email);
        setValue("phone", response.phone);
        setValue("date_of_birth", response.date_of_birth);
        setValue("password", response.password);
        setValue("profile_picture", response.profile_picture);
      } catch (e) {
        //navigate("/users")
      }
    }
  }, []);

  return (
    <>
      <div className="register-section">
        <div className="container">
          <div className="register-wrapper">
            <div className="register-box">
              <div className="register-inner">
                <h1 className="register-title text-center">
                  {params.id ? "Edit User " : "Register"}Here
                </h1>
                <form onSubmit={handleSubmit(handleSubmission)}>
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
                  <label className="fs-4">Choose File</label>
                  <input
                    className="form-control"
                    type="file"
                    name="profile_picture"
                    onChange={changeHandler}
                  />
                  {/* {isSelected ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>SIze in bytes: {selectedFile.size}</p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )} */}

                  <div {...getRootProps({ className: baseStyle })}>
                    <input {...getInputProps()} />
                    <p>Drag n drop some files here, or click to select files</p>
                  </div>

                  <button type="submit" className="btn btn-dark register-btn">
                    Submit
                  </button>
                </form>
                <div className="login-back">
                  {/* <button
                  type="button"
                  className="btn btn-dark"
                  onClick={backToLogin}
                >
                  Back To Login
                </button> */}

                  <a onClick={backToLogin}>Back To Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
