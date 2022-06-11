import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../../store'
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { user } = useSelector((state: RootState) => state.logged)


  useEffect(() => {
    if (user !== null) {
      navigate("/providers")
    }
  }, [])

  const signInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (password && userName) {

      createUserWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });

      setUserName('')
      setPassword('')
    }
  }

  return (
    <div>
      <h1>Sign In/Registration</h1>
      <form className='add-form'>
        <div className='form-control'>
          <label htmlFor="username">Username</label><br />
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            value={userName}
          /></div><br />
        <div className='form-control'>
          <label htmlFor="password">Password</label><br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            value={password}
          /></div><br />
        <button className="log-style" onClick={(e) => signInForm(e)}>Sign in</button><br />
      </form>
    </div>
  )
}

export default SignIn

