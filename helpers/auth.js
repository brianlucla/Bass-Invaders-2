const withAuth = (req, res, next) => {
  if (!req.session.userId) {
     return res.status(401).json({ message: "Please log in!" });
  } else {
    next();
  }
};

module.exports = withAuth;
