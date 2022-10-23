import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Navbar = () => {
    let role = JSON.parse(sessionStorage.getItem("role"))
    return (<>
        <div className={styles.navbar}>
            <span className={styles.logo}>QUICK  FIND</span>
            <div className={styles.navlinks}>
            <li><button><Link to="/jobs">Jobs</Link></button></li>
                {
                    role === "Temp" ? 
                    <li><button><Link to="/savedlist">Saved Lists</Link></button></li> :
                    <li><button className={styles.create}><Link to="/createnewjob">Create a Job</Link></button></li>
                }
            </div>
        </div>
    </>)

}

export default Navbar;