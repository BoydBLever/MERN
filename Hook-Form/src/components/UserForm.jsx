import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameerr, setFirstNameErr] = useState(false);
    const [lastname, setLastName] = useState("");
    const [lastnameerr, setLastNameErr] = useState(false);
    const [email, setEmail] = useState("");
    const [emailerr, setEmailErr] = useState(false);
    const [password, setPassword] = useState("");
    const [passworderr, setPasswordErr] = useState(false);
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpassworderr, setConfirmPasswordErr] = useState(false);

    const checkInput1 = (e) => {
        console.log(e.target.value); //e.target.value is the raw input value
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            // console.log("less than 2")
            setFirstNameErr(true)
        } else {
            setFirstNameErr(false)
        }
    }
    const checkInput2 = (e) => {
        console.log(e.target.value); //e.target.value is the raw input value
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            // console.log("less than 2")
            setLastNameErr(true)
        } else {
            setLastNameErr(false)
        }
    }
    const checkInput3 = (e) => {
        console.log(e.target.value); //e.target.value is the raw input value
        setEmail(e.target.value);
        if (e.target.value.length < 2){
            // console.log("less than 2")
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }
    const checkInput4 = (e) => {
        console.log(e.target.value); //e.target.value is the raw input value
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            // console.log("less than 2")
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
    }
    const checkInput5 = (e) => {
        console.log(e.target.value); //e.target.value is the raw input value
        setConfirmPassword(e.target.value);
        if (password !== confirmpassword){
            // console.log("less than 2")
            setConfirmPasswordErr(true)
        } else {
            setConfirmPasswordErr(false)
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Hey 👋🏽", newUser);
    };

    return (
        <fieldset>
            <legend>Your Form Data</legend>
            First Name: {JSON.stringify(firstname)} <br/>
            Last Name: {JSON.stringify(lastname)} <br/>
            Email: {JSON.stringify(email)}<br/>
            Password: {JSON.stringify(password)}<br/>
            Confirm Password: {JSON.stringify(confirmpassword)}<br/>
            <br/>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => checkInput1(e)} />
                {firstnameerr ? <p style={{color: "red"}}>First name must be 2+ characters</p> : <p></p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => checkInput2(e)} />
                {lastnameerr ? <p style={{color: "red"}}>Last name must be 2+ characters</p> : <p></p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => checkInput3(e)} />
                {emailerr ? <p style={{color: "red"}}>Email must be 2+ characters</p> : <p></p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => checkInput4(e)} />
                {passworderr ? <p style={{color: "red"}}>Password must be 8+ characters</p> : <p></p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => checkInput5(e)} />
                {confirmpassworderr ? <p style={{color: "red"}}>Passwords must match exactly</p> : <p></p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
        </fieldset>
    );
};

export default UserForm;
