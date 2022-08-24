const clock = document.querySelector("h2#clock");

// interval : 매번 일어나야하는 event
// setInterval(실행할 함수, 밀리초)
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000)

// timeout: 일정 시간 지난 후 함수 한번 실행
// setTimeout(getClock, 5000);