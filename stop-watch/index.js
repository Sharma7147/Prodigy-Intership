var timer = false;
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("laps").innerHTML = ""; // Clear laps
}

function lap() {
  if (timer) {
    var lapTime = `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${count
      .toString()
      .padStart(2, "0")}`;
    var lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    document.getElementById("count").innerHTML = count.toString().padStart(2, "0");
    document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0");
    document.getElementById("min").innerHTML = min.toString().padStart(2, "0");
    document.getElementById("hr").innerHTML = hr.toString().padStart(2, "0");

    setTimeout("stopwatch()", 10);
  }
}