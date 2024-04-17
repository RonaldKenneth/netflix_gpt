export const validate = (email, pwd) => {
    const vEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const vPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);

    if(!vEmail) return "Email is not valid";
    if(!vPwd) return "Password is not valid";

    return null;
}