const zodiac  = document.getElementById("zodiac");

const body = document.body;
const changebackground = () => {
    switch(zodiac.value){
        case "Aries":
            body.style.backgroundColor = "#a83832";
            break;
        
        case "Taurus":
                body.style.backgroundColor = "green";
                break;
        case "Gemini":
                    body.style.backgroundColor = "blue";
                    break;
        case "Cancer":
            body.style.backgroundColor = "grey";
            break;
        case "Leo":
            body.style.backgroundColor = "violet";
            break;
        case "Virgo":
            body.style.backgroundColor = "indigo";
            break;
        case "Libra":
            body.style.backgroundColor = "yellow";
            break;
        case "Sagittarius":
            body.style.backgroundColor = "orange";
            break;
        case "Aquarius":
            body.style.backgroundColor = "pink";
            break;
        case "Capricorn":
            body.style.backgroundColor = "#a83832";
            break;

        case "Pisces":
            body.style.backgroundColor = "#32a877";
            break;

        default:
            break;
    }
}