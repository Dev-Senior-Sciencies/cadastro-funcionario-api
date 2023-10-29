const errorMiddleware = require('./errorMiddleware');
const auth = require('./authMiddleware');
const middlersToken = require('./middlersToken');

module.exports = {
    errorMiddleware,
    auth,
    middlersToken,
};
