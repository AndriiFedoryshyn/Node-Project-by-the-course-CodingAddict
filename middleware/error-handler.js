const { CustomeAPIError } = require('../errors/custome-errors')

const errorHandlerMidleware = (err, req, res, next) => {
    if (err instanceof CustomeAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong, just try again later' })
}

module.exports = errorHandlerMidleware