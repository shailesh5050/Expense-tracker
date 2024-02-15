import { Schema, model } from "mongoose";

const ExpenseSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
});

const Expense = model("Expense", ExpenseSchema);
export default Expense;
