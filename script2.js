
const getFileName=()=>{
    var fileName='https://drive.google.com/file/d/1uEPho6HLIgkFbpMCJJEhoR26bE7nd21p/view?usp=drive_link';
    if (navigator.userAgent.indexOf("Mac")!=-1)
    { fileName='https://drive.google.com/file/d/1MJqrmWJSv2chUC81e0jWy4Oi-JvyBTMU/view?usp=drive_link'};
    return fileName;  
}
const downloadBtn= document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", ()=>{location.href=getFileName()});


    
