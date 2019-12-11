const routeError = () => {
  return (req, res, next) => {
    res.status(404).json({
      message: "Route Not Found"
    });
  };
};

const serverError = () => {
  return (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      message: "An internal error occured"
    });
  };
};

module.exports = {
  routeError,
  serverError
};
