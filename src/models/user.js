import { Schema, model } from "mongoose";

export const user = model(
    "User",
    new Schema(
        {
            _id: {
                type: Number,
                required: true,
                unique: true,
            },
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
        },
        {
            timestamps: false,
            versionKey: false,
        }
    )
);
