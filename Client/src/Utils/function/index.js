import {toast} from "react-toastify";

export const validate =(data,type) =>{
    const errors={};
   
    if (!data.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="Email address is invalid"
    }else{
        delete errors.email
    }
    if (!data.password){
        errors.password="Password is required"
    }else if (data.password.length<5){
        errors.password="Password need to be 6 charecter"
    }else{
        delete errors.password
    }
  
    if (type === "signup"){
        if(!data.name.trim()){
            errors.name="Username is required"
        }else{
            delete errors.name
        }
        if (!data.confirmPassword){
            errors.confirmPassword="Confirm the Password"
        }else if (data.confirmPassword!==data.password){
            errors.confirmPassword="Password do not match"
        }else{
            delete errors.confirmPassword
        }
    }
    else if(type === "createjob"){
        if(!data.title.trim()){
            errors.title="Title is required"
        }
        else{
            delete errors.name
        }
        if(!data.description.trim()){
            errors.description="Description is required"
        }
        else{
            delete  errors.description
        }
        if(!data.stipend.trim()){
            errors.stipend="Stipend is required"
        }
        else{
            delete  errors.stipend
        }
        if(!data.location.trim()){
            errors.location="Location is required"
        }
        else{
            delete  errors.location
        }
        if(!data.duration.trim()){
            errors.duration="Duration is required"
        }
        else{
            delete  errors.duration
        }
    }
    return errors;

}


export const notify = (text,type)=>{
    if (type==="success"){
        toast.success(text);
    }else {
        toast.error(text)
    }
}