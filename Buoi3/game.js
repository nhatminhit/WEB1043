var arr = ['Rock', 'Paper', 'Scissors'];

function getValue(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Hòa!";
    } else if ((playerChoice === 0 && computerChoice === 2) ||
               (playerChoice === 1 && computerChoice === 0) ||
               (playerChoice === 2 && computerChoice === 1)) {
        result = "Bạn thắng!";
    } else {
        result = "Máy thắng!";
    }

    document.getElementById("result").innerHTML = 
        "Bạn chọn: " + arr[playerChoice] + "<br>Máy chọn: " + arr[computerChoice] + "<br>Kết quả: " + result;
}
