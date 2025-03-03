
const roleMiddleware = (requiredRole) => async (req, res, next) => {
  try {
    console.log()

    if (req.user.role.toLowerCase() !== requiredRole) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = roleMiddleware;