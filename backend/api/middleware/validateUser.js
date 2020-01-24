const db = require("../../data/db");


const validateUser = () => {
  return (req, res, next) => {
    if (!req.body.name || !req.body.bio) {
      res
        .status(400)
        .json({ message: "Please provide a name and a bio for the user" });
    }

    next();
  };
};

module.exports = validateUser