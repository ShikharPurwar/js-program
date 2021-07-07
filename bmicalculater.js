function bmiCalculater(weight,height){
    var bmi = weight/Math.pow(height,2);
    return Math.round(bmi);


}




var bmi = bmiCalculater(55,1.71);
console.log(bmi);