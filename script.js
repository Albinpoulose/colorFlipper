//adding action when user click the button
document.querySelector("button").addEventListener("click", () => {
    //calling funtion to generate and hexa decimal value
    hexagenerator((hexadigit) => {

    });
})


//funtion to generate hexadecimal value
function hexagenerator() {

    //array declearation with all the values of a hexadecimal code 
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

    //variable to store hexadecimal value
    let hexadigit = "#";

    //loop to generate six digit hexadecimal
    for (let i = 0; i < 6; i++) {

        //math.random() funtion will generate a random number between 0 to 15 
        arrnumber = Math.floor(Math.random() * number.length);
        //concatinating generated number on each iteration,()
        hexadigit = hexadigit + number[arrnumber];

    }


    // changing background color 
    document.getElementById("body").style.backgroundColor = hexadigit;
    //displaying hexadigit on screen 
    document.getElementById("colordis").innerText = hexadigit;
}





