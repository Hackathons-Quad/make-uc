import React, { useEffect, useState } from 'react'
import styles from './style.module.css';
import { joblist } from '../../Utils/constants';
import { getAllJobs } from '../../Utils/api';
import Navbar from '../Navbar';

const Jobs=()=> {

const [jobarray,setjobarray] = useState([])  

useEffect(async() => {
  const joblistArray = await getAllJobs()
  console.log("joblistArray",joblistArray)
  setjobarray(joblistArray)
},[])  
  return (
    <>
    <Navbar/>
    <div className={styles.bg}>
    {
      jobarray.map((item) => {
        return  <div id = {item.jobId} className={styles.jobContainer}>
        <div className={styles.card}></div>
        <div className={styles.role}>{item.jobDescription}</div>
        <div className={styles.employerName}>{item.email}</div>
        
        <div className={styles.details}>
        <span className={styles.location}>{item.location}</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.workinghrs}>{item.duration}hrs</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.stipend}>{item.stipend}k</span>
        </div>
        <button className={styles.list}>Add</button>
        
        
        </div>
      })
    }
    </div>
    </>
  )
}

export default Jobs
