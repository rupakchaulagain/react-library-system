class Auth {
    constructor() {
        this.authenticated=false
    }

    login(cb){
        this.authenticated=true
        cb()
    }

    logout() {
        this.authenticated=false
        // cb()
    }


        isAuthenticated(){
            return this.authenticated;
        }

}
export default new Auth()