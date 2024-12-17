import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const { user, body } = req;
    const { id, email: userEmail, role, profile } = user || {};
    const { userId: bodyUserId, email: bodyEmail } = body || {};
    const profileEmail = profile?.emails?.[0]?.value;

    const email = userEmail || bodyEmail || profileEmail;
    const userId = id || bodyUserId || profileEmail;

    const token = jwt.sign(
      { email, role, userId },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 2 }
    );

    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};