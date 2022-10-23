
 export const postsignupdata = async (signupdata) => {
    const POST_SIGNUP_DATA = "http://localhost:8000/users/register";
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = {
    email : signupdata.email,
    password : signupdata.password,
    role: signupdata.role,
    username:signupdata.name
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };
  
    let response = await fetch(POST_SIGNUP_DATA, requestOptions);
    let data = await response.json();
    return data;
  }

  export const postLogindata = async (logindata) => {
    const POST_LOGIN_DATA = "http://localhost:8000/users/login";
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log("logindata",logindata)
    let raw = {...logindata}
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };
  
    let response = await fetch(POST_LOGIN_DATA, requestOptions);
    let data = await response.json();
    return data;
  }
  export const postJobs = async (Jobdata) => {
    const POST_NEW_JOB_DATA = "http://localhost:8000/jobs/add";
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = { 
    jobTitle : Jobdata.title,
    email : "anupampanwar12@gmail.com",
    stipend: Jobdata.stipend,
    duration: Jobdata.duration,
    location: Jobdata.location}

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };
  
    let response = await fetch(POST_NEW_JOB_DATA, requestOptions);
    let data = await response.json();
    return data;
  }
  export const getAllJobs = async () => {
    const GET_JOBS_DATA = "http://localhost:8000/jobs";
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    let response = await fetch(GET_JOBS_DATA, requestOptions);
    let data = await response.json();
    return data;
  }