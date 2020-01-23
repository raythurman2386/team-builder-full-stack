const db = require("../../data/db");


const validateUser = () => {
  return (req, res, next) => {
    if (!req.body.name || !req.body.bio) {
      res
        .status(400)
        .json({ message: "Please provide a name and a bio for the user" });
    }

    let date;

    if (!req.body.created_at) {
      date = new Date().toISOString();
    } else {
      date = req.body.created_at;
    }

    const updatedUser = {
      name: req.body.name,
      bio: req.body.bio,
      created_at: date,
      updated_at: new Date().toISOString()
    };

    req.user = updatedUser;
    next();
  };
};

module.exports = validateUser