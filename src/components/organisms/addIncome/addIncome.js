import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormDatePicker } from "../../molecules";
import InputField from "../../molecules/InputField/InputField";
import { saveIncome } from "./action";
import { Form } from "react-bootstrap";

const AddIncome = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submitHandler = (payload) => {
    console.log(payload);
    dispatch(saveIncome(payload));
  };
  return (
    <>
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
    </>
  );
};

export default AddIncome;
