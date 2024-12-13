

let claimButton=document.getElementById("claim");

document.getElementById("claim").addEventListener("click",
    ()=>{
        
        if(claimButton.innerHTML==="CLAIM YOUR TRIAL"){
            claimButton.innerHTML="CLAIMED. THANK YOU !"
        }else{
            claimButton.innerHTML="CLAIM YOUR TRIAL"
        }

    }
    
)