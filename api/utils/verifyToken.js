import jwt from "jsonwebtoken";

export async function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      message: "Please SingIn to access Excpense",
      success: false,
    });

    return;
  }

  try {
    jwt.verify(token, process.env.JWT, (err, decode) => {
      if (err) {
        res
          .json({
            message: "Some Error ",
            success: false,
          })
          .status(500);
        return;
      }
      const userId = decode.id;
      req.userId = userId;
      next();
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized Error" });
  }
}
