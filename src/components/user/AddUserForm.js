import React from 'react'
import Alert from 'react-bootstrap/Alert';
import UserTable from "./UserTable";
import store from "../../store";

class AddUserForm extends React.Component {

    constructor(props) {
        super(props);

        const state = store.getState();
        const {userList} = state.userList

        this.state = {
            name: "",
            username: "",
            password: "",
            userList: [...userList],
            submitBtn: 'Add',
            submitFlag: '',
            alertMessage: '',
            alertStatus: false

        }

    }
    handleInputChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.submitFlag === '') {

            store.dispatch({
                type: "SIGN_UP",
                payload: {
                    name: this.state.name,
                    username: this.state.username,
                    password: this.state.password
                }
            })

            this.setState({
                name: "",
                username: "",
                password: "",
                alertMessage: "User is added successfully...",
                alertStatus: true
            });

        }

    };

    closeAlert = () => {
        this.setState({
            alertStatus: false
        });

    }

    componentDidUpdate() {
        setTimeout(() => this.setState({
            alertStatus: false
        }), 4000);
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">

                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" className="form-control" placeholder="Enter Name"
                                       required="required"
                                       name="name" value={this.state.name} onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <label>Username*</label>
                                <input type="text" className="form-control" placeholder="Enter Published Date"
                                       required="required"
                                       name="username" value={this.state.username}
                                       onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password*</label>
                                <input type="text" className="form-control" placeholder="Enter Password"
                                       required="required"
                                       name="password" value={this.state.password}
                                       onChange={this.handleInputChange}/>
                            </div>

                            <button type="submit" className="btn btn-primary">{this.state.submitBtn}</button>
                        </form>
                        <br></br>

                    </div>
                    <div className="col-sm-8">

                        {this.state.alertStatus ? (
                            <Alert variant="success" onClose={this.closeAlert} dismissible>
                                <Alert.Heading>Success Alert</Alert.Heading>
                                <p>
                                    {this.state.alertMessage}
                                </p>
                            </Alert>
                        ) : ""

                        }

                    </div>

                </div>

                <div className="row">
                    <UserTable userList={this.state.userList}/>
                </div>
            </div>

        )

    }

}

export default AddUserForm;