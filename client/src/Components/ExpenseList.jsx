// eslint-disable-next-line react/prop-types
import { toast } from "react-hot-toast";
const ExpenseList = ({ expenses, setExpenses }) => {
  function getTotalExpenses() {
    let total = 0;
    expenses &&
      expenses.forEach((expense) => {
        total += expense.amount;
      });
    return total;
  }
  async function deleteExpense(id) {
    try {
      const res = await fetch(`/api/expense/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setExpenses((prev) => {
          return prev.filter((expense) => expense._id !== id);
        });
      }
    } catch (error) {
      toast.error("Failed to delete expense");
    }
  }
  if (expenses.length === 0)
    return (
      <div className="alert alert-warning" role="alert">
        No expenses added yet
      </div>
    );

  return (
    <>
      <div className="expense-list-container">
        {expenses &&
          expenses.map((expense) => {
            return (
              <div key={expense._id} className="card mb-2">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">Amount: ₹{expense.amount}</h5>
                    <p className="card-text">
                      Description: {expense.description}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteExpense(expense._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="total-expense">
        <h3>Total Expenses: ₹{getTotalExpenses()}</h3>
      </div>
    </>
  );
};

export default ExpenseList;
