const src=["image/client.png","image/envoyer-email.png","image/Manage booking.png","image/stats.png"];
//const description= ["Retrouvez facilement les informations de vos clients.", "N'ecrivez plus vos e-mails, ils sont crées pour vous.","Suivez l'évolution de vos réservations.", "Visualisez par mois et par année vos taxes de séjours."]
    let num=0;
   // const featurestxt= document.getElementById("featurestxt");
    const featuresImg= document.getElementById("featuresImg");
    let interval;
    
    const startInterval=()=>{
     interval=  setInterval(
        //function to change frame src every 3 seconde
       changeSrc
      , 4000)
    }
    const stopInterval=()=>{
      clearInterval(interval);
    }
    
    const changeSrc=()=>{
    
      //console.log("changing: "+ src[num])
      
      featuresImg.src = src[num];
      //featurestxt.innerHTML = description[num];

      num< src.length-1? num++ : num=0;
    
    }
    
    startInterval();
    
    featuresImg.addEventListener("mouseover",stopInterval)
    featuresImg.addEventListener("mouseout",startInterval)
//featurestxt.addEventListener("mouseover",stopInterval)
 //   featurestxt.addEventListener("mouseout",startInterval)

 const getFileName=()=>{
  var fileName='simplyInstaller/Installer_Gerer_Mon_Gite.exe';
  if (navigator.userAgent.indexOf("Mac")!=-1)
  { fileName='simplyInstaller/Gerer_Mon_Gite_Mac.zip'};
  return fileName;  
}
const downloadBtn= document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", ()=>{location.href=getFileName()});