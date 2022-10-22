import React from 'react'
import styles from './style.module.css';
const Jobs=()=> {
  return (
    <>
      <div className={styles.jobContainer}>
      
      <div className={styles.employerName}>Emp 1</div>
      <div className={styles.role}>Shopkeeper</div>
      <div className={styles.details}>
      <span className={styles.location}>Delhi</span>
      <span>&nbsp;•&nbsp;</span>
      <span className={styles.workinghrs}>7hrs</span>
      <span>&nbsp;•&nbsp;</span>
      <span className={styles.stipend}>20k</span>
      </div>
      
      
      </div>
    </>
  )
}

export default Jobs
