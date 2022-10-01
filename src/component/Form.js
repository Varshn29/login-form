import { string } from 'prop-types'
import React, { useState } from 'react'
import './Form.css'

const Form = () => {

    const [login, setLogin] = useState({
        firstName: '',
        phoneNumber: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(login)
    }

    const show = (myString) => {
        return /\d/.test(myString)
    }

    const showAlp = (myString) => {
        return /[a-zA-Z]/.test(myString)
    }

    return (
        <form className='container'>
            <h1>Login Form</h1>
            <div className='name'>
                <label>First Name:</label>
                <input required type={'Text'} name={'firstName'} value={login.firstName} placeholder='Enter name...' onChange={handleChange} />
            </div>
            <div className='errorMessage'>{login.firstName.length > 3 ? '' : <small>First name should be of minimum 3 characters</small>}</div>
            <div className='phone'>
                <label>Phone Number:</label>
                <input required type={'Number'} name={'phoneNumber'} value={login.phoneNumber} placeholder='Enter phone-number...' onChange={handleChange} />
            </div>
            <div className='errorMessage'>{login.phoneNumber.length === 10 ? '' : <small>Invalid phone number!</small>}</div>
            <div className='emailId'>
                <label>Email:</label>
                <input required type={'Email'} name={'email'} value={login.email} placeholder='Enter email...' onChange={handleChange} />
            </div>
            <div className='errorMessage'>{login.email.includes('@' && '.com') ? '' : <small>Invalid Email address!</small>}</div>
            <div className='password'>
                <label>Password:</label>
                <input required type={'Password'} name={'password'} value={login.password} placeholder='Enter password...' onChange={handleChange} />
            </div>
            <div className='errorMessage missing'>{login.password.length >= 10 ? '' : <small>Invalid password!</small>}</div>
            <div className='errorMessage missing'>{show(login.password) ? '' : <small>Password is missing numbers!</small>}</div>
            <div className='errorMessage'>{showAlp(login.password) ? '' : <small>Password is missing alphabets!</small>}</div>
            {login.firstName.length > 3 && login.phoneNumber.length === 10 &&  login.email.includes('@' && '.com') && login.password.length >= 10 === true ? <button onClick={handleClick} className='button'>Sign up</button> : <button disabled className='button errorButton' >Sign up</button>}
        </form >
    )
}

export default Form