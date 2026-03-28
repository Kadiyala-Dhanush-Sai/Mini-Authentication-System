import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function SignUp() {
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [conformpassword, Setconformpassword] = useState();
    const[error,setError]=useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { email, password, conformpassword })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        if (password === conformpassword) {
            navigate('/login');
        } else if(password !== conformpassword){
            setError("Password isn't Matched")
            console.log("Passwords do not match");
            return;
        }
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
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control  signup-input" id="inputPassword4"
                                onChange={(e) => Setconformpassword(e.target.value)} />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="signup-btns">
                            <button type="submit" className="btn btn-secondary btn-lg w-100">Sign Up</button>
                        </div>
                        <div>
                            <p>
                                Already have Account?
                                <Link to="/login"> Click here </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}
export default SignUp