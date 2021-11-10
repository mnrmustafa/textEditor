//localStorage.clear();

const signup=document.querySelector(".btn");
signup.addEventListener('click',(e)=>{
    e.preventDefault();
    //alert("hello from signup");
    // getting the values of the input fields
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    // checking the input fields for such letters to prevent HTML Injection
    const format=/[</>]/;
    
    // Checking for Name input field
    // if they characters are present then alert else proceed
    if(format.test(String(name))){
        //alert('present');
        const nameInput=document.querySelector('.nameMsg');
        nameInput.classList.add('error');
        nameInput.innerHTML="Not allowed to use '<', '/', '>',";
        setTimeout(()=>nameInput.remove(),5000);
    }
    else{
    
    // Checking for EMail input field
    // if they characters are present then alert else proceed
    if(format.test(String(email))){
        //alert('present');
        const emailInput=document.querySelector('.emailMsg');
        emailInput.classList.add('error');
        emailInput.innerHTML="Not allowed to use '<', '/', '>',";
        setTimeout(()=>emailInput.remove(),5000);
    }
    else{
    
    // checking for Password
    // it should follow the below conditions
    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    
    // if the password is valid then push all the details inside the array else give alert
    if(String(password).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/i) ){
        //alert("Valid");
        //var allEntries = [];
        let existingEntries = JSON.parse(localStorage.getItem("inputData"));
        console.log(existingEntries);
        //console.log(existingEntries);
        //console.log(existingEntries.length);
        
        if(existingEntries == null) existingEntries = [];
        var entry = {
            "name": name,
            "email": email,
            "password":password
        };
        //console.log(entry);
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        console.log(typeof(existingEntries));
        for(let i=0;i<existingEntries.length;i++){
            inputData.push(existingEntries[i]);
        }
        
        localStorage.setItem("inputData", JSON.stringify(existingEntries));
         console.log(inputData);
         //console.log(inputData.length);
        window.location.href="main.html";
    }else{
       // alert("Invalid");
        const msgInput=document.querySelector('.passwordMsg');
        msgInput.classList.add('error');
        msgInput.innerHTML="Please enter password of atleast length of 8 and 1 Uppercase, 1 Lowercase, 1 Number and 1 Special character";
        setTimeout(()=>msgInput.remove(),5000);
    }
    }
    }

});