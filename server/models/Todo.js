import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const TodoSchema = new Schema(
    {
        completed: { type: Boolean, required: true, default: false },
        user: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)