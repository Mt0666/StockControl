import React, { useEffect, useState } from "react";
import "../style/login.css"
import { Navigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";



const Login = () => {
    const isAuthenticated = () => {
        const user = JSON.parse(localStorage.getItem("currentUser")) || {};
        return user.username;
      };
    const [isLogged,setIsLogged] = useState(isAuthenticated);

    useEffect(()=>{
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Enter' && window.location.pathname === "/login") {
                login()
            } 
        });
    });

    const login = () => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then((users) => {
                const userName = document.getElementById("username").value || "";
                const  password = document.getElementById("password").value || "";
                const  validUser = users.filter(user => {
                    return user.username === userName &&  user.password === password;
                })[0] || {};

                console.log(validUser);
                
                localStorage.setItem("currentUser", JSON.stringify(validUser));
                
                setIsLogged(validUser.username !== "");
            });
    }
    return (
        isLogged ? <Navigate to="/products" replace={true} /> : <div className="login-container">
        <div id="output"></div>
        <div className="avatar">
        <FaRegUserCircle size={110}/>
        </div>
        <div className="form-box">
            <div>
                <input id="username" name="user" type="text" placeholder="username" />
                <input id="password" type="password" placeholder="password" />
                <button onClick={login} className="btn btn-info btn-block login" type="submit">Login</button>
            </div>
        </div>
    </div>
    );
}

export default Login;