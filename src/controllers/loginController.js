const loginServices = require("../services/loginServices");

const controllerSingIn = async (req, res) => {

    try {
        const token = await loginServices.postLogin(req, res);

        return token;

    } catch (error) {

        res.status(401).json({ message: error.message });

    }
    

};

module.exports = { controllerSingIn };