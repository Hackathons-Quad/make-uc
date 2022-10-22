import React,{useState,useEffect} from 'react';
import styles from './style.module.css';

const Otp = () => {
    const [inputNumber,setInputNumber] = useState(1);
    const [otpMsg,setotpMsg] = useState({"1":"","2":"","3":"","4":"","5":"","6":""});

    const handleInputChange = (event,input) => {
        if(input<=6){
      console.log(event);
      setInputNumber(input+1);
      setotpMsg({...otpMsg,[input]:document.getElementById(`input${input}`).value});
      document.getElementById(`input${input+1}`).focus();
        }
    }
 
   const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            document.getElementById(`input${inputNumber-1}`).focus();
            setInputNumber(inputNumber-1)
        //   if (next > -1) {
    
        //     // elmnt.target.form.elements[next].focus()
        //   }
        }
        // else {
        //   console.log("next");
         
        //     const next = elmnt.target.tabIndex;
        //     if (next < 5) {
        //       elmnt.target.form.elements[next].focus()
        //     }
        // }
    
      }
    return (
        <div className={styles.outer}>
            <div className={styles.leftpane}>
                Powering People ,<br></br>
                One part at a time !
            </div>
            <div className={styles.rightpane}>
                  <div className = {styles.otpStyle}>
            <div style = {{fontWeight:"bold",fontSize:28,marginBottom:75}}>OTP Verification</div>
            <div className = {styles.inputGroup}>
            {
                [1,2,3,4,5,6].map((input) => {
                    return(
                        <input maxlength="1"  id = {`input${input}`} onKeyUp={e => inputfocus(e)} onChange = {(event) => handleInputChange(event,input)} type = "text" className = {styles.inputStyle} />
                    )
                })
            }
            </div>
        </div>
            </div>
      
        </div>
    )
}

export default Otp
