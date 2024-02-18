import { useState, useEffect } from "react";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";
const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/expense/get");
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setExpenses(data.expenses);
    } catch (error) {
      setLoading(false);
      alert("Error fetching expenses");
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <ExpenseForm setExpenses={setExpenses} />
        </div>
        <div className="col-md-6 col-sm-12">
          {loading ? <h1>Loading...</h1> : <ExpenseList expenses={expenses} />}
        </div>
      </div>
    </div>
  );
};

export default Expense;
