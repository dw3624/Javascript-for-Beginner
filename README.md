# Javascript로 크롬 만들기

모멘텀 클론코드

- `console.log()`
  - 콘솔에 log 출력



## Basic Data Types

- integer : 정수

- float : 소수

- string : 문자
- Boolean : True/False
- Arrays : 배열
- Objects : 객체



## Variables

- `const`
  - constant(상수) variable 생성
  - 할당값 갱신 불가

```javascript
const a = 5;
```

- `let`
  - 할당값 갱신 가능
  - 새로 생성할 때 사용, 이후 값 변경시 사용하지 않음

```javascript
let a = 5;
a = 10;
```

- `var`
  - 이전 javascript에서 사용, 현재 사용하지 않음
  - 원하는 시점에서 갱신 가능
- 많은 경우 `const`를 기본으로 사용, 업데이트 필요한 변수 있는 경우 부분적으로 `let` 사용



### 권장사항

- 변수명에 공백 필요한 경우 대문자로 대체
  - 예) `my name` → `myName`



## Boolean

True / False

### 기타 상태값

- `null`
  - 값이 비어있는 상태
  - 자연적으로 발생하지 않음
  - variable 내부에 값이 없음을 의도적으로 명시할 때 사용
- `undefined`
  - 값이 정의되지 않은 상태
  - variable 존재하나 값이 없음
  - 컴퓨터 메모리에 존재, 공간 있음에도 값 없는 경우



## Arrays

```javascript
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
daysOfWeek[5];

// Add one more day to the Array
daysOfWeek.push("sun");

```



## Objects

```javascript
const player = {
    name: "dong",
    points: 10,
    fat: true,
};

player.name
player["name"]

player.fat = false;

player.lastName = "potato";
```



## Function

```javascript
function sayHello (nameOfPerson, age) {
    console.log("Hello!");
    console.log("My name is" + nameOfPerson)
}

sayHello("dong", 20);
```

```javascript
const player = {
	name: "dong",
    sayHello: function () {
        console.log("hello!");
    },
};

console.log(player.name);
player.sayHello();
```



### Return

```javascript
const age = 96;
function calculateKrAge (ageOfForeigner) {
    return ageOfForeigner + 2;
};

const krAge = calculateKrAge(age);

console.log(krAge)
```



## Conditionals

- `prompt`
  - 입력창 있는 팝업창 띄워줌
  - 입력 있을 때까지 javascript 코드 멈추기 때문에 현재 사용하지 않음
- `typeof` : type 확인
- `parseInt` : number 타입으로 변환
- `isNaN` : number 타입 여부 확인
- `&&` : AND
- `||` : OR

```javascript
const age = prompt("How old are you?");

console.log(isNaN(age));

console.log(typeof age, typeof parseInt(age));

console.log(parseInt(age));
```

```javascript
const age = parseInt(prompt("How old are you?"))

if (isNaN(age) || age < 0) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want");
}
```



## The Document Object

Javascript는 document object 통해 html과 상호작용 가능

- 예) `document.title="hi"`로 탭 이름 변경 가능
- `getElementById` : id로 요소 선택
- `querySelector` : CSS 형식으로 html 접근

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momentum App</title>
</head>
<body>
  <h1 autofocus class="hello" id="title">Grab me!</h1>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
const title = document.getElementById("title")

title.innerText = "Got you!"
console.dir(title.className)

// class가 hello인 h1 선택
const title = document.querySelector(".hello h1");

// [h1, h1, h1]
const title = document.querySelectorAll(".hello h1");

// class가 hello인 Array 중 첫번째 요소 선택
const title = document.querySelector(".hello h1:first-child");

// id가 title인 h1 선택
const title = document.querySelectorAll("#title h1");
```



## Events

Event 상세 내용은 MDN에서 확인 가능

- `addEventListener()` : eventlistener 추가
- Javascript는 EventListener function의 첫번째 argument로 event에 대한 정보를 제공
- `preventDefault` : 브라우저의 기본동작 방지

```javascript
// 타이틀 클릭시 handleTitleClick 실행
function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);

// 다른 형태 표기
title.onclick = handleTitleClick;

// 사용가능한 event 볼 수 있음
console.dir(title);
```

```javascript
// mouse로 클릭시 함수 실행
function handleTitleClick() {
  console.log("title was clicked");
  title.style.color = "blue";
}
// mouse 올리면 함수 실행
function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
// mouse 벗어나면 함수 실행
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}
// window 사이즈 변경시 함수 실행
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
// window 내용 복사시 함수 실행
function handleWindowCopy() {
  alert("copier!");
}
// 오프라인 감지시 함수 실행
function handleWindowOffline() {
  alert("SOS no WiFi");
}
// 온라인 감지시 함수 실행
function handleWindowOnline() {
  alert("ALL Good");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

```javascript
// mouse로 클릭시 함수 실행
// 클릭할때마다 색 변경
function handleTitleClick() {
  console.log(h1.style.color);
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
```



## CSS in JavaScript

### CSS import

```html
<head>
    ...
    <link rel="stylesheet" href="style.css">
</head>
```

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

// mouse로 클릭시 함수 실행
function handleTitleClick() {
  if (h1.className === "clicked") {
    h1.className = "";
  } else {
    h1.className = "clicked";
  }
}

h1.addEventListener("click", handleTitleClick);
```

```css
body {
  background-color: beige;
}

h1 {
  color: cornflowerblue;
  transition:color 0.5s ease-in-out;
}

.clicked {
  color: tomato;
}
```

- `.classList.contains()` : HTML element의 class에 해당 class가 포함돼 있는지 확인
- `.classList.remove()` : HTML element의 class에서 해당 class 제거
- `.classList.add()` : HTML element의 class에 해당 class 추가
- `.classList.toggle()`  : HTML element의 class에 해당 class 없는 경우 추가, 있는 경우 제거

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

// mouse로 클릭시 함수 실행
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
```





# 크롬 만들기

## index.html

```html
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Momentum App</title>
  </head>
  <body>
    <h2 id="clock">00:00</h2>
    
    <form class="hidden" id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What is your name?"
      >
      <button>Log In</button>
    </form>
    
    <h1 id="greeting" class="hidden"></h1>
    
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>

    <div id="quote">
      <span></span>
      <span></span>
    </div>

    <div id="weather">
      <span></span>
      <span></span>
    </div>

    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>
  </body>
</html>
```



## Greeting

```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 upper로 표시
// 반복되는 string을 변수로 저장해 실수 예방
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername)
}
```



## Clock

- `setInterval(event, 밀리초)` : 밀리초마다 event(함수) 실행
- `setTimeout(event, 밀리초)` : 밀리초 후 event(함수) 실행

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000)
```



## Quotes

- `Math.random()` : 0~1 사이 랜덤 숫자 반환
- `Math.round()` : 숫자 반올림
- `Math.ceil()` : 숫자 올림
- `Math.floor()` : 숫자 내림

```javascript
const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    ...
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```



## Background

```javascript
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
```



## todo

```javascript
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// JSON.parse(localStorage.getItem("todos"))
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
```



## weather

```javascript
const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY = ""

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

