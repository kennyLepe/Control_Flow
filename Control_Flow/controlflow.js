function main()
{
   
    let dayNumber = Number(prompt("Ingresa el dia de la semana"));
    let hourNumber = Number(prompt("Indica el número de horas"));
    let janFirstDayNumber = Number(prompt("Ingresa el primer dia del año 0 - 6"));
    let yearDayNumber = Number(prompt("Ingresa el día del año 1 - 365 "));

    businessHours (dayNumber,hourNumber);

    getDayNumber(janFirstDayNumber,yearDayNumber);

    let part3 = validate(yearDayNumber,hourNumber);
    console.log("Bussines hour " + part3 );
}

main();


function businessHours(dayNumber, hourNumber)
{

    if(dayNumber >0 && dayNumber <6 )
    {
        if(hourNumber >=9 && hourNumber <=18 )
        {
            console.log("Si es horario laboral");
            return true; 

        }
        console.log("No es horario laboral");
        return false;

    }
    console.log("No es día laboral");
    return false;
}

function getDayNumber(janFirstDayNumber,yearDayNumber)
{
    if(yearDayNumber >=0 && yearDayNumber <=365 )
    {
        if(janFirstDayNumber >0 && janFirstDayNumber <6 )
        {
            let dayweek = yearDayNumber%7; 
            console.log("El día que seleccionaste es: " +dayweek);
            return dayweek;
        }  
    }
}
function validate (yearDayNumber,hourNumber){
    if(hourNumber >=9 && hourNumber <=18 ){
        let dayweek = yearDayNumber%7;
        if(dayweek >=1 && dayweek <=5 ){
            return true;
        }
        return false;
    }
        return false; 
}