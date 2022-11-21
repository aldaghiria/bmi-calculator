function bmi(input){

 

    let weight;
    let height;
    let bmiResult;
    let bmiNote;
    let result = document.getElementById('bmiResult')
    let note = document.getElementById('bmiNote')
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;

    if (weight == "" || height =="") {
        alert("field cannot be blank")
        return;
    }
    if (isNaN(weight || height)){
        alert("Input must be a number");
    }

 

    bmiResult = weight/(height/100*height/100)
    console.log(bmiResult)
    result.innerHTML = bmiResult;


    if (bmiResult >= 30) {
        note.innerHTML = "Your are considered obese";
    }
    else if (bmiResult <= 18){
        note.innerHTML = "Your are considered underweight";
    }

     else if (bmiResult >= 18.5 && bmiResult <= 24.9 ){
        note.innerHTML =" Your are considered normal weight";
    } 
    else if (bmiResult >= 25 && bmiResult <= 29.9 ){
        note.innerHTML = "Your are considered overweight";
    }
}