import User from "../models/User.js";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";
export async function signUp(req, res) {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res
      .json({
        message: "User is alredy Exist",
        success: false,
      })
      .status(200);
    return;
  }

  const hassPass = await bcryptjs.hash(password, 10);
  const newUser = new User({ username, email, password: hassPass });

  try {
    let userRes = await newUser.save();
    delete userRes._doc.password;
    res
      .json({ ...userRes._doc, message: "Sign Up Success", success: true })
      .status(201);
  } catch (error) {
    res.json({ message: error.message, success: false }).status(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res
        .json({
          message: "User not Exist",
          success: false,
        })
        .status(401);
      return;
    }

    const matchPass = await bcryptjs.compare(password, user.password);
    if (!matchPass) {
      res
        .json({
          message: "Email or Password is Wrong",
          success: false,
        })
        .status(401);
      return;
    }
    delete user._doc.password;
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT
    );
    res
      .cookie("token", token, { httpOnly: true })
      .json({ ...user._doc, message: "SIgn In success", success: true })
      .status(200);
  } catch (error) {
    res.json({ message: error.message, success: false }).status(500);
  }
}
