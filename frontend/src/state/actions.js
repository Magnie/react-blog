const LOGIN_REQUEST = 'login_request';
module.exports.LOGIN_REQUEST = LOGIN_REQUEST;
const LOGIN_SUCCESS = 'login_success';
module.exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
const LOGIN_FAILED = 'login_failed';
module.exports.LOGIN_FAILED = LOGIN_FAILED;
function login_success(username) {
    return {
        type: LOGIN_SUCCESS,
        username,
    };
}
module.exports.login_success = login_success;

const LOGOUT = 'logout';
module.exports.LOGOUT = LOGOUT;
function logout(session) {
    return {
        type: LOGOUT,
        session,
    };
}
module.exports.logout = logout;

const REGISTER_REQUEST = 'register_request';
module.exports.REGISTER_REQUEST = REGISTER_REQUEST;
const REGISTER_SUCCESS = 'register_success';
module.exports.REGISTER_SUCCESS = REGISTER_SUCCESS;
const REGISTER_FAILED = 'register_failed';
module.exports.REGISTER_FAILED = REGISTER_FAILED;
function register_success(username) {
    return {
        type: REGISTER_SUCCESS,
        username: username,
    }
}
module.exports.register_success = register_success;

const CLEAR_TMP = 'clear_tmp';
module.exports.CLEAR_TMP = CLEAR_TMP;
function clear_tmp() {
    return {
        type: CLEAR_TMP,
    };
}
module.exports.clear_tmp = clear_tmp;
