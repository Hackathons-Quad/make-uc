import React, { useEffect,useState } from "react";
import styles from "./style.module.css";
import { joblist } from '../../Utils/constants';
import { getAllBookmarks } from '../../Utils/api';
import { delteJob } from "../../Utils/api";
import { ToastContainer } from 'react-toastify';
import { notify } from "../../Utils/function";

import Navbar from "../Navbar";
const SavedList = () => {
  const [bookmarkarray,setbookmarkarray] = useState([])  

  const deleteSelectedJobs = async (itemId) => {
    const response = await delteJob(itemId)
    if(response.msg === "All ready wishlisted"){
      notify("Successfully Deleted!", "success")
    }
    else{
      notify("Not Able to delete!", "error")
    }
    console.log("response1",response)
  }

useEffect(async() => {
  const bookmarksArray = await getAllBookmarks()
  console.log("bookmarksArray",bookmarksArray)
  setbookmarkarray(bookmarksArray)
},[])  
    return (

        <>
        <Navbar/>
            <div className={styles.bg}>
    {
      bookmarkarray.map((item) => {
        return  <div id={item.jobId} className={styles.jobContainer}>
        
        <div className={styles.card}></div>
        <div className={styles.role}>{item.role}</div>
        <div className={styles.employerName}>{item.email}</div>
        
        <div className={styles.details}>
        <span className={styles.location}>{item.location}</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.workinghrs}>{item.woringhrs}hrs</span>
        <span>&nbsp;•&nbsp;</span>
        <span className={styles.stipend}>{item.workinghrs}k</span>
        </div>
        <button className={styles.list} >Apply</button>
        <button className={styles.remove} onClick={() => deleteSelectedJobs(item.jobId)}>Remove</button>
        
        
        </div>
      })
    }
       <ToastContainer />
    </div>

        </>
    )
};

export default SavedList;