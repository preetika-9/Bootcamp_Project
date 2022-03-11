import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormDatePicker } from "../../molecules";
import InputField from "../../molecules/InputField/InputField";
import { saveIncome } from "./action";
import { Form } from "react-bootstrap";

const EditIncome = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const submitHandler = (payload) => {};

  return (
    <>
      <div className="income-section ">
        <div className="container ">
          <div className="income-box ">
            <h1>Add Income</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Form.Group>
                <Form.Label>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <InputField
                          {...field}
                          {...fieldState}
                          error={fieldState.error}
                          type="text"
                          placeholder="Enter title of income"
                          label="Income Title"
                        />
                      );
                    }}
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <Controller
                    name="amount"
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <InputField
                          {...field}
                          {...fieldState}
                          error={fieldState.error}
                          type="number"
                          placeholder="Enter amount"
                          label="Income Amount"
                        />
                      );
                    }}
                  />
                </Form.Label>
              </Form.Group>

              <Controller
                name="date"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <FormDatePicker
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      label={"Date of income"}
                      placeholder={"Select  date of income."}
                    />
                  );
                }}
              />
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddIncome;
