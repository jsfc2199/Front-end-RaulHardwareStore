import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { logInInReducer } from '../../state/slice/loggedInSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../../store'
import * as React from 'react';


const LogIn: React.FunctionComponent = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state: RootState) => state.logged)

    useEffect(() => {
        if (user !== null) {
            navigate("/providers")
        }
    }, [])

    const logInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (userName && password) {
            signInWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(logInInReducer(user))
                    navigate('/providers')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

            setPassword('')
            setUserName('')
        }
    }

    return (
        <div>
            <h1>Log In</h1>
            <form className='add-form'>
                <div className='form-control'>
                    <label htmlFor="username">Username</label><br />
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        name="username"
                        value={userName}
                    /></div>
                <br />
                <div className='form-control'>
                    <label htmlFor="password">Password</label><br />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        value={password}
                    /><br />
                </div>
                <button className="log-style" onClick={(e) => logInForm(e)}>Log In</button><br />
            </form>
        </div>
    )
};

export default LogIn;
