class Auth {

    constructor() {
        this.authenticated = false
    }
    login(cb) {
        localStorage.setItem("user", "Bhushan")
        cb()
    }

    logout(cb) {
        localStorage.removeItem("user")
        cb()
    }

    isAuth() {
        console.log(localStorage.getItem("user"))
        return localStorage.getItem("user")
    }
}

export default new Auth();
