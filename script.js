document.getElementById("bmiForm").addEventListener("submit", function(e){
e.preventDefault();

const gender=document.getElementById("gender").value;
const age=parseInt(document.getElementById("age").value);
const weight=parseFloat(document.getElementById("weight").value);
const heightFeet=parseFloat(document.getElementById("height-feet").value);
const heightInches=parseFloat(document.getElementById("height-inches").value);

if(gender && age && heightFeet && heightInches){

    const heightInMeters= (heightFeet + heightInches/12) * 0.3048;
    const bmi= (weight/(heightInMeters * heightInMeters));
    const resultElement = document.getElementById('result');

    let category = '';

    if(bmi <18.5){
        category = 'Under Weight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        category = 'Normal Weight';
    }
    else if(bmi >= 25 && bmi <= 29.9){
        category = 'Overweight';
    }
    else{
        category = 'Obese';
    }

    let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
    resultMessage += 'Category:' + category;
    resultElement.innerHTML = resultMessage;

}
});