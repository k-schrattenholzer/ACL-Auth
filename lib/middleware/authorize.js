const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    const userEmail = req.user.email
    const payload = jwt.verify(userEmail, 'admin')
    req.user = payload
  } catch (error) {
    console.error(error)
    error.message = "You do not have access to view this page"
    error.status = 403
    next(error)
  }
};
