import styles from './style.module.css';
import { validate } from '../../Utils/function';
import { notify } from '../../Utils/function';
import { useState, useEffect } from 'react';
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"))
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
            notify("You Logged in successfuly!", "success")
        } else {
            notify("Oops,Unable to Log In!", "error")
            setTouched({
                email: true,
                password: true,
            })
        }
    }

    console.log("data",data);

    return (
        <div className={styles.outer}>
            <div className={styles.leftpane}>
                Powering People ,<br></br>
                One part at a time !
            </div>
            <div className={styles.rightpane}>
                <div className={styles.loginStyle}>
                    <div style={{ fontWeight: "bold", fontSize: 28, marginBottom: 75 }}>Login</div>
                    <div className={styles.inputGroup}>
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
                    </div>
                    <div className={styles.formButtons}>
        
                    <button style={{opacity: !Object.keys(errors).length ? 1 : 0.4}} disabled={!Object.keys(errors).length ? false : true} type='submit'>Login</button>
                </div>
                </div>
            </div>

        </div>
    )
};
export default Login;
