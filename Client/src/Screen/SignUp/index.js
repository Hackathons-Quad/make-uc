import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import styles from "./SignUp.module.css";

import { validate } from '../../Utils/function';
import { notify } from '../../Utils/function';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role:""
    });
    // for radio button of role
    const [value, setValue] = React.useState('temp');


    const handleChangeTemp = () => {
        setValue('Temp');
    };
    const handleChangeEmp = () => {
        setValue('Emp');
    };


    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
        console.log(errors)
    }, [data, touched])

    const changeHandler = event => {
            setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Signed in succussfuly!", "success")
        } else {
            notify("Oops,Unable to SignUp!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    console.log("data",data)

    return (
        <>
        <div className={styles.logo}><p>Powering people,</p> <p> one part at a time! </p> </div>
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} >
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        
                        <div className={styles.role}>
                        <label>Role :</label>
                        <div className={styles.role1}>
                        <label> Temp <input type="radio" name = {"role"}  value={"Temp"} checked={data.role === 'Temp'} onChange={changeHandler} /></label>

                        </div>
                        <div className={styles.role1}>
                        <label> Employer <input type="radio" name={"role"} value={"Emp"} checked={data.role === 'Emp'} onChange={changeHandler} /></label>

                        </div>

                        </div>
                    </div>
                </div>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={(errors.name && touched.name) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>
                {/* <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div> */}
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
        </>
    );
};

export default SignUp;