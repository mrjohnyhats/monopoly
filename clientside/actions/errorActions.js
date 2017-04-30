import actionTypes from './actioTypes'

const customError = (msg) => {
    return {
        msg: msg,
        type: actionTypes.ERROR
    }
}

export default {
    customError
};
