const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const User=require("../models/userModel")

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email:email})
    if (!user) {
        return res.status(401).send("Unauthoraized access")
    }
    const passwordsMatch = bcrypt.compareSync(password, user.password)
    if (passwordsMatch) {
        const token = jwt.sign( { _id:user._id, email:user.email }, process.env.TOKEN_SECRET_KEY );
        res.cookie("token", token,{httpOnly:true,secure:process.env.ENVIRONMENT==="development"?false:true})
        res.send("logged in")
    }
    else {
        res.status(401).send("Unauthorized access")
    }
}
module.exports = { login }