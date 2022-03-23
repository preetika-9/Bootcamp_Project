import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { listIncomeAction } from "../ListPage/action";

const ExpenseMonth = () => {
  const income = useSelector((state) => state.incomeList);
  const dispatch = useDispatch();
  const [datee, setDatee] = useState([]);
  console;
  useEffect(() => {
    dispatch(listIncomeAction());
    const months = [];
    console.log(income);
    income?.response?.incomes?.forEach((item) => {
      const y = moment(item.date).format("YYYY");
      const m = moment(item.date).format("YYYY/MM");
      const d = moment(item.date).format("DD");
      console.log(y, m, d);
      if (!months.some((item) => item.month === m && item.year === y)) {
        months.push({
          month: m,
          year: y,
        });
      }
    });
    setDatee(months);
  }, []);
  console.log(datee);
  return (
    <div>
      <h1>Monthly Income</h1>
      {datee.map((item) => {
        let sum = 0;
        const thisMonthData = income?.response?.incomes?.filter(
          (x) => moment(x.date).format("YYYY/MM") === item.month
        );
        thisMonthData.map((x) => {
          return (sum += x.amount);
        });
        return (
          // eslint-disable-next-line react/jsx-key
          <li>
            {item.month} : {sum}{" "}
          </li>
        );
      })}
    </div>
  );
};

export default ExpenseMonth;
