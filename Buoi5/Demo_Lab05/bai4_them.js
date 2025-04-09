function multiplyBy() {
  //num1 = document.getElementById("firstNumber").value;
  var num1 = firstNumber.value
  //num2 = document.getElementById("secondNumber").value;
  var num2 = secondNumber.value
  //document.getElementById("result").innerHTML = num1 * num2;
  kq.value = num1 * num2
  //document.getElementById("kq").value=num1 * num2
}

function divideBy() {
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  document.getElementById("kq").value = Number(num1) + Number(num2)
}