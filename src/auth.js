class Auth {

    login(loginUser, cb) {

        let userList = JSON.parse(localStorage.getItem("users"));

        userList.map((user) => {

            if (user.username === loginUser.username && user.password === loginUser.password) {

               localStorage.setItem("authenticated",true)

                cb()
            } else {

                alert("failed")
                localStorage.setItem("authenticated",false)

            }

        })

    }

    isAuthenticated() {
        console.log("authenticated===",localStorage.getItem("authenticated"))
        return localStorage.getItem("authenticated");
    }

}

export default new Auth()