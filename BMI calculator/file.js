function abc() {
  var height = Number(document.getElementById("h").value);

  var weight = Number(document.getElementById("w").value);

  var BMI = Math.round((weight / Math.pow(height, 2)) * 10000);

  if (BMI < 18.5) {
    alert("Under Weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("Normal");
  } else if (BMI >= 25.0) {
    alert("Over Weight");
  } else {
    alert("incorrect value");
  }
}
