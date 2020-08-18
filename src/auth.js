class Auth {

    login(loginUser,showAlert, cb) {

        let userList = JSON.parse(localStorage.getItem("users"));

        if(userList!=null) {
            userList.map((user) => {

                if (user.username === loginUser.username && user.password === loginUser.password) {

                    localStorage.setItem("authenticated", true)

                    cb()
                } else {

                    localStorage.setItem("authenticated", false)
                    showAlert()

                }

            })
        }else{
            alert("No user found...")
        }

    }

    isAuthenticated() {
        console.log("authenticated===",localStorage.getItem("authenticated"))
        return localStorage.getItem("authenticated");
    }


}

export default new Auth()