import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    try {
        let password = req.body.password;
        let hashPassword = await bcryptjs.hash(password, 10);

        req.body.password = hashPassword;
        return next();
    } catch (error) {
        next(error);
    }
}