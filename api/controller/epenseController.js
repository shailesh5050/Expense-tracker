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
