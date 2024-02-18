// eslint-disable-next-line react/prop-types
const ExpenseList = ({ expenses }) => {
  function getTotalExpenses() {
    let total = 0;
    expenses &&
      expenses.forEach((expense) => {
        total += expense.amount;
      });
    return total;
  }

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
                  <button className="btn btn-danger">Delete</button>
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
