const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
     // grab the session cookie
     // verify the jwt contents of the cookie
     // if valid, set req.user = jwt's payload (user object)
};
