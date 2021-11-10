let inputData=[];

const loginBtn=document.querySelector(".login-button");
const signupBtn=document.querySelector(".signup-button");




signupBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="signup.html";
});

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="login.html"; 
});
