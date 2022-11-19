function bmi(input){

    let weight;
    let height;
    let bmiResult;
    let result = document.getElementById('bmiResult')
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    bmiResult = weight/(height/100*height/100)
    console.log(bmiResult)
    result.innerHTML = bmiResult;
    
    }