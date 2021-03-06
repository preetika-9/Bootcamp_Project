import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { FormDatePicker, InputField } from "components/molecules";
import { Form } from "react-bootstrap";
import { EditExpenses, saveExpense } from "./action";
import { getExpenseById } from "./api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const AddExpenses = () => {
  const { control, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const submitHandler = (payload) => {
    if (params.id) {
      dispatch(EditExpenses(params.id, payload));
      navigate("/listexpenses");
      toast.success("Expenses Edited Successfully!!");
    } else {
      dispatch(saveExpense(payload));
      navigate("/listexpenses");
      toast.success("Expenses Added Successfully!!");
    }
  };
  const params = useParams();

  useEffect(async () => {
    if (params.id) {
      try {
        const response = await getExpenseById(params.id);
        console.log(response, "hello");
        setValue("title", response.title);
        setValue("amount", response.amount);
        setValue("date", new Date(response.date));
        console.log(response);
      } catch (e) {
        // navigate("/listexpenses");
      }
    }
  }, []);

  return (
    <>
      <div className="expenses-section ">
        <div className="container ">
          <div className="expenses-wrapper">
            <div className="expenses-box ">
              <h1>{params.id ? "Edit" : "Add"} Expenses</h1>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="justify-content-center"
              >
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
                <button type="submit" className="btn btn-dark btn-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpenses;
