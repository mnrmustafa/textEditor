//localStorage.clear();

const login=document.querySelector('.btn');
login.addEventListener('click',(e)=>{
    e.preventDefault();

    // getting the values from input field
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    
    // check if the details are already present in the array
    let flag=false;
    let loginData = JSON.parse(localStorage.getItem("inputData"));
    console.log(loginData);
    for( var i=0;i<loginData.length;i++){
        console.log(loginData[i]);
        if(String(email).match(loginData[i].email)){
            if(String(password).match(loginData[i].password)){
                flag=true;
                break;
            }
        }
    }
    
    if(flag==false){
    //else show error
    const msgInput=document.querySelector('.msg');
    msgInput.classList.add('error');
    msgInput.innerHTML="Please Sign Up";
    setTimeout(()=>msgInput.remove(),5000);    
    }else{
        console.log(flag);
        window.location.href="main.html";
    }
    
    /*inputData.push({email,password});
    console.log(inputData);*/
});