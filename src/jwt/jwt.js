import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (payload) => {
    return jwt.sign({ payload }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token)
        return res
            .status(403)
            .json({ auth: false, message: "No token provided" });

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err)
            return res
                .status(500)
                .json({ auth: false, message: "Failed to authenticate token" });

        req.user = decoded;
        next();
    });
};
