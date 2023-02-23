import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const Login = () => {
    const [loginState, setLoginState] = useState(false);

    const history = useHistory();

    const handleExternalLogin = () => {
        localStorage.setItem("type", "external");
        setLoginState(!loginState)
        history.push('/');
    }
    return (
        <div>

            <Card style={{ width: "100%", margin: "auto", maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                <CardContent>
                    <h1>External Users</h1>
                    <Button variant="contained" color="secondary" onClick={() => handleExternalLogin()} >
                        External User Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login