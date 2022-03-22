import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormDatePicker } from "../../molecules";
import InputField from "../../molecules/InputField/InputField";
import { saveIncome } from "./action";
import { Form } from "react-bootstrap";
import { getIncomeById } from "./api";
//import moment from "moment";
import { EditIncome } from "./action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const AddIncome = () => {
  const { control, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const submitHandler = (payload) => {
    if (params.id) {
      dispatch(EditIncome(params.id, payload));
      //toast("Income Edited Successfully!!");
    } else {
      dispatch(saveIncome(payload));
      console.log(payload);
      navigate("/listpage");
      toast.success("Income Added Successfully!!");
    }
  };

  useEffect(async () => {
    if (params.id) {
      try {
        const response = await getIncomeById(params.id);
        // const { title, amount } = response;
        setValue("title", response.title);
        setValue("amount", response.amount);
        setValue("date", new Date(response.date));
        //console.log(response);
      } catch (e) {
        //navigate("/listpage");
      }
    }
  }, []);

  return (
    <>
      <div className="income-section ">
        <div className="container ">
          <div className="income-box ">
            <h1>{params.id ? "Edit" : "Add"} Income</h1>
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
