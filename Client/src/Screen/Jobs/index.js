import React, { useEffect, useState } from 'react'
import styles from './style.module.css';
import { joblist } from '../../Utils/constants';
import { getAllJobs } from '../../Utils/api';
import Navbar from '../Navbar';
import { postJobToWishList } from '../../Utils/api';
import { notify } from '../../Utils/function';

const Jobs=()=> {

const [jobarray,setjobarray] = useState([]) 
let role = JSON.parse(sessionStorage.getItem("role"))

const AddJobsToWishlist = async (jobId) => {
  console.log("jobId",jobId)
 let response = await postJobToWishList(jobId)
 console.log("response123",response.msg)
 if(response.msg === "All ready wishlisted"){
  notify("Successfully Added!", "success")
}
else{
  notify("Not Able to Add!", "error")
}
} 

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
        {role === "Temp" && 
            <button className={styles.list} onClick= {() => {AddJobsToWishlist(item.jobId)}}>Add</button>
        }
        </div>
      })
    }
    </div>
    </>
  )
}

export default Jobs
