function time() {
    const fecha = new Date();
    let data = {
      hora: fecha.getHours() < 10 ? '0' + fecha.getHours() : fecha.getHours(),
      minute: fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes(),
      sec: fecha.getSeconds() < 10 ? '0' + fecha.getSeconds() : fecha.getSeconds(),
    };
    document.getElementById("hour").innerHTML = data.hora + ':' +  data.minute + ':' +  data.sec;
}

window.onload = function() {
    setInterval(time, 1000);
}

let list = document.getElementById("list")

function fibonacci() {
  const fecha = new Date();
  let minute = fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes()
  let a = minute.toString()[0]
  let b = minute.toString()[1]
  let numA = parseInt(a, 10)
  let numB = parseInt(b, 10)
  for (let index = 0; index < fecha.getSeconds(); index++) {
    numA = numA + numB
    numB = numA + numB
  }
  let p = document.createElement("p")
  list.appendChild(p)
  p.innerHTML = numA
}

let button = document.getElementById('button')

button.addEventListener('click', (e) => {
  e.preventDefault();
  fibonacci()
})