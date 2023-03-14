import mongoose from "mongoose"

const { Schema, model } = mongoose

const blogpostsSchema = new Schema(
    {
        category: { type: String, required: true },
        title: { type: String, required: true },
        cover: { type: String, required: true },
        "readTime.value": { type: Number, required: true },
        "readTime.unit": { type: String, required: true },
        "author.name": { type: String, required: true },
        "author.avatar": { type: String, required: true },
        content: { type: String, required: true }
    },
    {
        timestamps: true,
    }
)

export default model("Blogpost", blogpostsSchema)