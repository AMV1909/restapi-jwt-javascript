import { createHash } from "crypto";
import { user } from "../models/user.js";

export const getUsers = async (req, res) => {
    await user
        .find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getUserById = async (req, res) => {
    await user
        .findById(req.params.id)
        .then((user) => {
            if (!user) return res.status(404).json("User not found");

            res.json(user);
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

export const createUser = async (req, res) => {
    req.body.password = createHash("sha256").update(req.body.password).digest("base64");

    await user
        .create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const updateUser = async (req, res) => {
    await user
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => {
            if (!user) return res.status(404).json("User not found");

            res.json(user);
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

export const deleteUser = async (req, res) => {
    await user
        .findByIdAndDelete(req.params.id)
        .then((user) => {
            if (!user) return res.status(404).json("User not found");

            res.json("User deleted");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};
