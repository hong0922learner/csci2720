const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const passwordResetRoutes = require('./routes/passwordReset')
const db = mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected :", Port))

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/password-reset", passwordResetRoutes)
app.get("/", (req, res) => {
    res.send("Hello jwt");
})
app.get('/api/nfts', (req, res) => {
    console.log(res)
    res.send(data.nfts);

});


// Backend api returning nft information
app.get('/api/nfts/slug/:slug', (req, res) => {
    const nft = data.nfts.find((x) => x.slug === req.params.slug);
    if (nft) {
        res.send(nft);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});
const Port = 4000;
app.listen(Port);