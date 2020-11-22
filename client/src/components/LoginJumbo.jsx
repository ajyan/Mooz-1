import React from "react";
import { GoogleLogin} from 'react-google-login';



const LoginJumbo = ({responseGoogle}) => {
    return ( 
    <div className="jumbotron jumbotron-fluid bg-primary">
        <div className="container">
        <h1 className="display-4 title">Welcome to Mooz</h1>
        <GoogleLogin
            className="btn btn-primary btn-lg"
            clientId="913630933580-j2psiq4op1gjie6sbg1bsqr6659l9e0n.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    </div>)
}

export default LoginJumbo