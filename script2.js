
const getFileName=()=>{
    var fileName='simplyInstaller/Installer_Gerer_Mon_Gite.exe';
    if (navigator.userAgent.indexOf("Mac")!=-1)
    { fileName='simplyInstaller/Gerer_Mon_Gite_Mac.zip'};
    return fileName;  
}
const downloadBtn= document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", ()=>{location.href=getFileName()});


    
