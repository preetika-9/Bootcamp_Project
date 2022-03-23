import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { listExpenseAction } from "../ListPage/action";

import { Table } from "react-bootstrap";

const MonthExpenses = () => {
  const expense = useSelector((state) => state.expenseList);
  const dispatch = useDispatch();
  const [datee, setDatee] = useState([]);

  useEffect(() => {
    dispatch(listExpenseAction());
    const months = [];
    console.log(expense);
    expense?.response?.expenses?.forEach((item) => {
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
      <h1>Monthly Expenses</h1>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Amount</th>
            {/* <li>
                  {item.month} : {sum}{" "}
                </li> */}
          </tr>
        </thead>

        {datee.map((item) => {
          let sum = 0;
          const thisMonthData = expense?.response?.expenses?.filter(
            (x) => moment(x.date).format("YYYY/MM") === item.month
          );
          thisMonthData.map((x) => {
            return (sum += x.amount);
          });
          return (
            // eslint-disable-next-line react/jsx-key

            <tbody key={item}>
              <tr>
                <td>{item.id}</td>
                <td>{item.month}</td>
                <td>{sum}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default MonthExpenses;
