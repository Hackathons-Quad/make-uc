import styles from "./style.module.css"
import React, { useState, useEffect } from 'react';
import { validate } from "../../Utils/function";
import { notify } from "../../Utils/function";
import { postJobs } from "../../Utils/api";
import { useNavigate } from 'react-router-dom';

const JobCreation = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        stipend: "",
        duration: "",
        location: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "createjob"))
        console.log(errors)
    }, [data, touched])

    const changeHandler = event => {
            setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler =  async (event) => {
        event.preventDefault();
        console.log("kjlnjk") 
            const responsedata = await postJobs(data)  
            console.log("responsedata",responsedata)  
            if(responsedata.msg === "Added job successfully!"){
                notify("Job Created successfuly!", "success")
                navigate("/jobs")  
            }
            else {
                    notify("Oops,Unable to Create!", "error")
                    setTouched({
                        name: true,
                        email: true,
                        password: true,
                        confirmPassword: true,
                    })
                }
    }

    console.log("data",data)
 
    return(
        <div className={styles.outercontainer}>
                <form onSubmit={submitHandler} className={styles.formContainer} >
                <h2 className={styles.header}>Create New Job</h2>
                <div className={styles.formField}>
                </div>
                <div className={styles.formField}>
                    <label>Title</label>
                    <input
                        className={(errors.name && touched.name) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.title && touched.title && <span>{errors.title}</span>}
                </div>
                
                
                <div className={styles.formField}>
                    <label>Stipend</label>
                    <input
                        className={(errors.stipend && touched.stipend) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="stipend"
                        value={data.stipend}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.stipend && touched.stipend && <span>{errors.stipend}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Duration</label>
                    <input
                        className={(errors.duration && touched.duration) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="duration"
                        value={data.duration}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.duration&& touched.duration && <span>{errors.duration}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Location</label>
                    <input
                        className={(errors.location && touched.location) ?
                            styles.uncompleted :
                            styles.formInput}
                        type="text"
                        name="location"
                        value={data.location}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.location&& touched.location && <span>{errors.location}</span>}
                </div>
            
              
                <div className={styles.formButtons}>
                    <button type='submit'>Create</button>
                </div>
            </form>
          
        </div>
    )
}

export default JobCreation