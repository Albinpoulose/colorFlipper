

function hexagenerator(){
    const number = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
    let hexadigit = "#";

    for(let i=0;i<6;i++){
         arrnumber =   Math.floor(Math.random()*number.length);
         hexadigit = hexadigit+ number[arrnumber];
    
        }
    
    //console.log(hexadigit)  
    
    document.getElementById("body").style.backgroundColor =hexadigit;
    document.getElementById("colordis").innerText = hexadigit;
}





document.querySelector("button").addEventListener("click",()=>{
    hexagenerator();
})