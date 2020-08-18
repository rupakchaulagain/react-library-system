import React from "react";
import './Login.css'
import Alert from "react-bootstrap/Alert";
import auth from "../../auth";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loginError: false,
            userNotFoundError: false
        }

    }

    handleInputChange = (e) => {

        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    login = (e) => {
        e.preventDefault()

        const username = this.state.username
        const password = this.state.password


        let userList = JSON.parse(localStorage.getItem("users"));

        if (userList != null) {
            userList.map((user) => {

                if (user.username === username && user.password === password) {

                    localStorage.setItem("authenticated", true)
                    this.props.history.push("/dashboard")

                } else {

                    localStorage.setItem("authenticated", false)
                    this.showAlert()

                }

            })
        } else {
          this.showUserNotFoundAlert()
        }

    }

    showAlert() {
        this.setState({
            userNotFoundError: false,
            loginError: true
        })
    }

    showUserNotFoundAlert() {
        this.setState({
            userNotFoundError: true,
            loginError: false
        })
    }

    render() {
        return (

            <React.Fragment>

                <div id="login">

                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">

                        {this.state.userNotFoundError === true ? <Alert variant="danger">
                            <Alert.Heading>User Not Found</Alert.Heading>
                        </Alert> : null}

                        {this.state.loginError === true ? <Alert variant="danger">
                            <Alert.Heading>Login Failed</Alert.Heading>
                        </Alert> : null}


                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form"
                                          className="form"
                                          onSubmit={this.login}>
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>

                                            <input type="text"
                                                   name="username"
                                                   id="username"
                                                   onChange={this.handleInputChange}
                                                   className="form-control"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="text"
                                                   name="password"
                                                   id="password"
                                                   onChange={this.handleInputChange}
                                                   className="form-control"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" name="submit"


                                                   className="btn btn-info btn-md"
                                                   value="submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;