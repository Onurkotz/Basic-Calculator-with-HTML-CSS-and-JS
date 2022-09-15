let screen = [];

function clearScreen() {
  document.getElementById("result").value = "";
  screen = [];
}

function display(value) {
  document.getElementById("result").value += value;
  console.log(value);

  const number = document.getElementById("result").value;
  screen.push(number);

  console.log(screen);
}

const eraseOne = () => {
  screen.pop();
  console.log(screen);
  document.getElementById("result").value = "";

  const last = screen.length - 1;
  console.log(last);

  document.getElementById("result").value += screen[last];

  if (screen.length == 0) {
    document.getElementById("result").value = "";
  }
};

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
