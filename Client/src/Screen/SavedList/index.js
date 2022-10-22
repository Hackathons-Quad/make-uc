import React from "react";
import styles from "./style.module.css";
import { joblist } from '../../Utils/constants';
const SavedList = () => {
    return (
        <>
            <div className={styles.bg}>
    {
      joblist.map((item) => {
        return  <div className={styles.jobContainer}>
        
        <div className={styles.card}></div>
        <div className={styles.role}>{item.role}</div>
        <div className={styles.employerName}>{item.name}</div>
        
        <div className={styles.details}>
        <span className={styles.location}>{item.location}</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.workinghrs}>{item.woringhrs}hrs</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.stipend}>{item.workinghrs}k</span>
        </div>
        <button className={styles.list}>Apply</button>
        <button className={styles.remove}>Remove</button>
        
        
        </div>
      })
    }
    </div>

        </>
    )
};

export default SavedList;