class Auth {
    constructor() {
        // this.authenticated = false
        this.authenticated =localStorage.getItem("authenticated")
    }

    login(loginUser, cb) {


        let userList = JSON.parse(localStorage.getItem("users"));

        userList.map((user) => {

            if (user.username === loginUser.username && user.password === loginUser.password) {
                console.log("authorised user...")

                localStorage.setItem("authenticated",true)
                // this.authenticated = true
                cb()
            } else {

                alert("failed")
                localStorage.setItem("authenticated",false)
                // this.setState({
                //     loginError: true
                // })

            }

        })


    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        console.log("authenticated===",localStorage.getItem("authenticated"))
        return localStorage.getItem("authenticated");
        // return  localStorage.getItem("authenticated");
    }

}

export default new Auth()