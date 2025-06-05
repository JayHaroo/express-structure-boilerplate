exports.welcome = (req,res) => {
    res.status(200).json({
        message: "Welcome to the User API",
        user: req.user ? req.user : null
    });
}

exports.profile = (req, res) => {
        res.status(200).json({
        message: "Welcome to the Profile API",
        user: req.user ? req.user : null
    });
}