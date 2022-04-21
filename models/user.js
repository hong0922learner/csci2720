const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity")
const userSchema = Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,

    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    verified:
    {
        type: Boolean,
        default: false
    },


}, { timestamps: true });

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" })
    return token
}
const User = mongoose.model('user', userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}

module.exports = { User, validate };