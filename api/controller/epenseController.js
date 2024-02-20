import Expense from "../models/Expense.js";

export async function createExpense(req, res) {
  const { amount, description } = req.body;

  const newExpense = new Expense({ amount, description, user: req.userId });

  try {
    const result = await newExpense.save();
    delete result.user;
    res.status(201).json({
      message: "Expense created successfully",
      expense: result,
      success: true,
    });
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({
      message: "Failed to create expense. Please try again later.",
      success: false,
    });
  }
}

export async function getExpense(req, res) {
  try {
    // Fetch expenses for the authenticated user
    const expenses = await Expense.find({ user: req.userId });

    // Optionally, you may want to filter out or modify the response before sending it
    const modifiedExpenses = expenses.map((expense) => {
      // Delete sensitive fields or perform any other modifications
      delete expense.user;
      return expense;
    });

    res.status(200).json({
      message: "Expenses retrieved successfully",
      expenses: modifiedExpenses,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({
      message: "Failed to fetch expenses. Please try again later.",
      success: false,
    });
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params;
  try {
    const result = await Expense.findByIdAndDelete(id);
    console.log(result);
    if (result) {
      res.status(200).json({
        message: "Expense deleted successfully",
        success: true,
        id: result._id,
      });
    } else {
      res.status(404).json({
        message: "Expense not found",
        success: false,
      });
    }
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({
      message: "Failed to delete expense. Please try again later.",
      success: false,
    });
  }
}
