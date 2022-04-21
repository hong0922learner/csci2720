const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    Image: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique: true,
    },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, },
});

module.exports = mongoose.model("image", tokenSchema);