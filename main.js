
  // bold button
  const boldBtn=document.querySelector('#bold-btn');
  boldBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('bold');
  });

  // italic button
  const italicBtn=document.querySelector('#italic-btn');
  italicBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('italic');
  });

  // underlined button
  const underlineBtn=document.querySelector('#underline-btn');
  underlineBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('underline');
  })

  // left button
  const leftBtn=document.querySelector('#left-btn');
  leftBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('justifyLeft');
  });

  // center button
  const centerBtn=document.querySelector('#center-btn');
  centerBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('justifyCenter');
  });

  // right button
  const rightBtn=document.querySelector('#right-btn');
  rightBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('justifyRight');
  });

  // unordered list button
  const underorderedBtn=document.querySelector('#list-btn');
  underorderedBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('insertUnorderedList');
      document.querySelector('li').style.listStyleType='square';
  });

  // ordered list button
  const orderedBtn=document.querySelector('#o-list-btn');
  orderedBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(window.getSelection)
        document.execCommand('insertOrderedList',false,null);
  });

  // logout button
  const logoutBtn=document.querySelector('.logout-button');
  logoutBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      window.location.href='index.html';
  })


  
  

  

  // Implementing the functions for Search word, Search sentence and search and replace
  const content=document.querySelector('.text-field');
  function search(elem){
      
    var selectRegexBox = document.getElementById("selectRegexBox");
    var selectedValue = selectRegexBox.options[selectRegexBox.selectedIndex].value;
    
    // For word
    if(selectedValue==="Word"){
        let text=elem.value;
        // If a space is encountered then you cannot continue further
        let character=text.toString();
        if(character.slice(-1)===" ")
            alert("Stop, do not use spaces");
        else{
            let regex=new RegExp(text,'gi');
            let res=regex[Symbol.replace](content.textContent,'<span style="background:yellow">'+text+'</span>');
            content.innerHTML=res;
        }
    }

    // For sentence
    else if(selectedValue==="Sentence"){
        let text=elem.value;
        let regex=new RegExp(text,'gi');
        let res=regex[Symbol.replace](content.textContent,'<span style="background:yellow">'+text+'</span>');
        content.innerHTML=res;
    }

    // for replacement of words
    else if(selectedValue==="Replace"){
        let text=elem.value;
        let regex=new RegExp(text,'gi');
        let res=regex[Symbol.replace](content.textContent,'<span style="background:yellow">'+text+'</span>');
        content.innerHTML=res;
    }
}


function fullStop(){
    
    //const regexcontent=new RegExp(content,'g');
    let someContent=content.textContent;
    //console.log(content);
    console.log(someContent);
    let rex = /(^|[.!?]\s+)([a-z])/g;
    
    let str = someContent.replace(rex, function(m, $1, $2) {
        return $1+$2.toUpperCase();
    });

    const el = document.getElementById("textarea");
    const sel = window.getSelection();
    const offset = sel.getRangeAt(0).startOffset;
    
    content.textContent=str;
        

        const nRange = document.createRange();
        nRange.setStart(el.childNodes[0], offset);
        nRange.collapse(true);

        sel.removeAllRanges();
        sel.addRange(nRange);
        //document.execCommand('insertHTML', false, '<br><br>');
        //document.execCommand("defaultParagraphSeparator", false, "p");

}
  // Making the first letter to uppercase after every special character
  /*function fullStop(){
    //alert('fdas');
    const content=document.querySelector('.text-field');
    const regexcontent=new RegExp(content,'g');
    let someContent=content.textContent;
    console.log(someContent);
    let rex = /(^|[.!?]\s+)([a-z])/g;
    
    let str = someContent.replace(rex, function(m, $1, $2) {
        return $1+$2.toUpperCase();
    });
        
        content.textContent=str;
        console.log(content);
  }*/

function Replace(){
    // alert("hello from replace");
    const content=document.querySelector('.text-field');
    const replaceText=document.querySelector('.r-data').value;
    const searchText=document.querySelector('.data').value;
    // converting into regex expression to use it in 'replace' function
    const regexSearchText=new RegExp(searchText,'g');
    let textFieldContent=content.textContent;
    //console.log(textFieldContent);
    
    let str=textFieldContent.replace(regexSearchText,replaceText);
    //console.log(str);
    content.textContent=str;

    /*let regex=new RegExp(replaceText,'gi');
    let res=regex[Symbol.replace](content.textContent,'<span style="background:yellow">'+replaceText+'</span>');
    content.innerHTML=res;*/

}
  
    // to display and hide the search box
    document.querySelector('.r-submit').style.display='none';
    document.querySelector('.data').style.display='none';
    document.querySelector('.r-data').style.display='none';
  function onChangeRegex(){
    var selectRegexBox = document.getElementById("selectRegexBox");
    var selectedValue = selectRegexBox.options[selectRegexBox.selectedIndex].value;
    document.querySelector('.data').style.display='inline';
    //console.log(selectedValue);
    if(selectedValue==='Replace'){   
        document.querySelector('.r-data').style.display='inline';
        document.querySelector('.r-submit').style.display='inline';
    }
    
  }

  function onChangeSave(){
    var selectSaveBox = document.getElementById("selectSaveBox");
    var selectedValue = selectSaveBox.options[selectSaveBox.selectedIndex].value;
    console.log(selectedValue);
    if(selectedValue==='New'){
        content.textContent="";
    }
    else if(selectedValue==='Text'){
        const a = document.createElement("a");
        const blob = new Blob([content.innerText]);
        const dataUrl = URL.createObjectURL(blob);
        a.href = dataUrl;
        const filename=getFilename();
        a.download = filename + ".txt";
        a.click();
    }
    else if(selectedValue==='PDF'){
        const filename=getFilename();
        const text=document.querySelector('.text-field').innerText;
        console.log(text);
        html2pdf().from(text).save(filename);
    }
  }

  function getFilename(){
    let text;
    let filename = prompt("Please enter the filename:", "Theory of Computation");
    return filename;
    //document.getElementById("demo").innerHTML = text;
  }
  








/*let boldBtn=document.querySelector('#bold-btn');
boldBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const command=document.getElementById("bold-btn").getAttribute("value");
    if(command=== null)
        return;
    console.log("Selected command "+command);
    if(document.getSelection().toString().length===0){
        alert("Dhang se select karo");
        return;
    }
    let selectedEditableText=document.querySelector("textarea"); 
    if(selectedEditableText===null)
        return;
        console.log(selectedEditableText);
    let newContent="";
    const selectedText=window.getSelection().toString();
    console.log(selectedText);
    newContent='<b>'+selectedText+'</b>';
    console.log(newContent);
    const newFullText=selectedEditableText.innerHTML.replace(selectedText,newContent);
    selectedEditableText.innerHTML=newFullText;
});*/

