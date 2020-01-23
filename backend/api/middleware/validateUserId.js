const db = require("../../data/db");

const validateUserId = () => {
  return (req, res, next) => {
    db.findById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "User not found"
          });
        }
      })
      .catch(err => next(err));
  };
};



module.exports = validateUserId
