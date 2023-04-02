import { createHash } from "crypto";

import { user } from "../models/user.js";
import { generateToken } from "../jwt/jwt.js";

export const login = async (req, res) => {
    req.body.password = createHash("sha256")
        .update(req.body.password)
        .digest("base64");

    await user
        .findOne({ email: req.body.email, password: req.body.password })
        .then((user) => {
            if (!user)
                return res.status(404).json("Email or password incorrect");

            const token = res.json(generateToken(user));
        })
        .catch((err) => res.status(400).json("Error: " + err));
};
