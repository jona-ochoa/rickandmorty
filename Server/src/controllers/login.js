const { User } = require("../models/User");

module.exports = async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email && !password) return res,status(400).send("Faltan Datos")

        const user = await User.findOne({ where : { email } })

        if(!user) return res.status(404).send('Usuario no encontrado')
        return user.password === password
            ? res.status(200).json({ access: true })
            : res.status(403).send('Contraseña incorrecta')
    } catch (error) {
        res.status(500).send(error.message);
    }
};
