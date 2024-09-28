export const checkValidateData = (email,password)=>{
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordvalid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    
    if(!isEmailvalid && !isPasswordvalid) return "* Both Email and PassWord are not valid"
    if(!isEmailvalid) return "* Email is not valid";
    if(!isPasswordvalid) return "* Password is not valid";
    return null;
}