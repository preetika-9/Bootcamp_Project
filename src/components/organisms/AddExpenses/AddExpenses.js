import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveExpenses } from "../../../action/ExpensesAction/ExpensesAction";
import { FormDatePicker } from "../../molecules";
import InputField from "../../molecules/InputField/InputField";
import { Form } from "react-bootstrap";

const AddExpenses = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submitHandler = (payload) => {
    console.log(payload);
    dispatch(saveExpenses(payload));
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="justify-content-center"
        >
          <h1>Add Expenses</h1>
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
                      placeholder="Enter title of expenses"
                      label="Expenses Title"
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
                      label="Expenses Amount"
                    />
                  );
                }}
              />
            </Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              <Controller
                name="date"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <FormDatePicker
                      {...field}
                      {...fieldState}
                      error={fieldState.error}
                      label={"Date of expenses"}
                      placeholder={"Select  date of expenses."}
                    />
                  );
                }}
              />
            </Form.Label>
          </Form.Group>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddExpenses;
