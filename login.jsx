import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Login() {
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/home');
                    setError("");
                } else if (result.data === "password is incorrect") {
                    setError("Password is incorrect ");
                } else if (result.data === "no user existed") {
                    setError("User not found ");
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <form onSubmit={HandleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control signup-input" id="inputEmail4"
                                onChange={(e) => {
                                    SetEmail(e.target.value);
                                    console.log(e.target.value);
                                }} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control signup-input" id="inputPassword4"
                                onChange={(e) => SetPassword(e.target.value)} />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="signup-btns">
                            <button type="submit" className="btn btn-secondary btn-lg w-100">Login Up</button>
                        </div>
                        <div>
                            <p>
                                Don't have Account?
                                <Link to="/register"> Click here </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}
export default Login