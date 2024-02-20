import { useState } from "react";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const ExpenseForm = ({ setExpenses }) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/expense/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        toast.success(data.message);
        setFormData({ amount: "", description: "" });
        setExpenses((prev) => {
          return [data.expense, ...prev];
        });
      }
    } catch (error) {
      toast.error("Error adding expense");
      setLoading(false);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
            value={formData.description}
            className="form-control"
            required
            id="desc"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            onChange={(e) => {
              setFormData({ ...formData, amount: e.target.value });
            }}
            value={formData.amount}
            required
            className="form-control"
            id="amount"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {loading ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
