// import React from "react";
// import Button from "react-bootstrap/Button";
// import Switch from "react-bootstrap/Switch";
// import {Route} from 'react-router-dom'
//
// class Login extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         let loginUser = props.loginUser;
//
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                     <div className="container">
//                         <Button className="navbar-brand" to={"/sign-in"}>positronX.io</Button>
//                         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <Button className="nav-link" onClick={this.props.loginUser}>Login</Button>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Button className="nav-link" to={"/sign-up"}>Sign up</Button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//
//                 <div className="auth-wrapper">
//                     <div className="auth-inner">
//                         <Switch>
//                             <Route exact path='/' component={Login}/>
//                             <Route path="/sign-in" component={Login}/>
//                             {/*<Route path="/sign-up" component={SignUp} />*/}
//                         </Switch>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Login;