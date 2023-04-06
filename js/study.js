//비교연산자, 조건문 if else
//논리연산자 and or not
//반복문 for, while, do while

//switch문은 if else문과 동일하다.


//switch(평가){
    case A:
        //A일때 코드
    case B:
        //B일때 코드
}

//if(평가==A){
    //A일때 코드
} else if(평가==B){
    //B일때 코드
}

//위의 두 구문이 동일함.

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit){
    case '사과':
        console.log('100원 입니다.');
        break;
    case '바나나':
        console.log('200원 입니다.');    
        break;
    case '키위':
        console.log('300원 입니다.');
        break;
    case '멜론':
    case '배':
        console.log('400원 입니다.');
        break;
    case '수박':
        console.log('500원 입니다.');
        break;
    default :
        console.log('그런 과일은 없습니다.');
}

//function

//console, alert, confirm

//   함수   함수명  매개변수
//function sayHello(name){
    console.log(`Hello, ${name}`);
}

//sayHello('Mike');

//함수 작성
//매개변수가 없는 함수

function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.');
}

showError();


//함수 작성
//매개변수가 있는 함수

let msg='Hello';  // 전역변수(global varable)
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    if(name){
        msg += `, ${name}`;
    }
    console.log('함수 내부') // 지역 변수(local varable)
    console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후')
console.log(msg)

//전역 변수와 지역 변수

let msg = "welcome";
console.log(msg)

function sayHello(name){
    let msg = "Hello"
    console.log(msg + ' ' + name);
}

sayHello('Mike');
console.log(msg)

//예제2

let name = "Mike";

function sayHello(name){
    console.log(name)
}

sayHello();
sayHello('Jane');

//OR

function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg)
}

sayHello();
sayHello('Jane');


//OR 다른방법 default value

function sayHello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello();
sayHello('Jane');

//return 으로 값 반환 리턴 오른쪽에 있는 값을 반환

function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result)


function showError(){
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.')
}
const result = showError();
console.log(result);


//함수는 한번에 한 작업에 집중
//읽기쉽고 어떤 동작인지 알 수 있게 네이밍
//showError 에러를 보여줌
//getName 이름을 얻어옴
//createUserData 유저데이터 생성
//checkLogin 로그인 여부 체크



//함수 선언문 vs 함수 표현식

let sayHello = function(){
    console.log('Hello');
}

sayHello();



//화살표 함수(arrow function)

let add = function (num1, num2){
    return num1 + num2;
}
console.log(add)

let add1 = (num1, num2) =>{
    return num1 + num2;
}
console.log(add1)

let add2 = (num1, num2) =>(
    num1 + num2
)
console.log(add2)
    

let add3 = (num1, num2) => num1 + num2;
console.log(add3)


//인수가 하나라면 괄호 생략가능
let sayHello =(name) => `Hello, ${name}`;

//인수가 없다면 괄호 생략 불가능
let showError = () => {
    alert('error!');
}

const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

const add = (num1, num2) => num1 + num2;

console.log(add(1,2))



//표현식보다는 선언문이 자유로움



//객체(Object)

//객체는 {}중괄호로 작성 그 사이에 키(key)와 값(value)가 들어감 ,쉼표로 구분함.

//객체에 접근하고 싶을때는 . 또는 [] 를 사용.
//추가할때도 마찬가지
//삭제는 delete를 사용 삭제하고싶은 프로퍼티 앞에 사용


//프로퍼티 = 객체 내부의 속성
//단축 프로퍼티

//프로퍼티 존재 여부 확인

//존재하지 않는 항목
superman.birthDay;
// undefined

//존재여부 확인 (true 또는 false)
'birthDay' in superman;
// false
'age' in superman;
// true


//객체

const superman = {
    name : 'zzure',
    age : 32,
}

superman['hairColor'] = 'black'
superman.hobby = 'basketball';

delete superman.age;

console.log(superman)


function makeObject(name, age){
    return {
        name,
        age,
        hobby : 'basketball'
    }
}

const Pang = makeObject("Pang", 27);
console.log(Pang);

console.log('age' in Pang)
console.log('birthDay' in Pang)


//객체 in


function isAdult(user){
    if(!('age' in user) || //user에 age가 없거나
    user.age < 20){ // 20살 미만이거나
        return false;
    } return true;
}

const Pang = {
    name : 'Pang',
    age : 27
}

const Bone = {
    name : "Bone"
}

console.log(isAdult(Bone))


//객체 for ... in

const Zzure = {
    name: "Zzure",
    age: 32,
    hobby: "basketball"
};

for(x in Zzure){
    if(x == 'name' || x == 'age') continue;
    console.log(Zzure[x]) // Zzure['name']  Zzure['age']
}


//객체 method / this
//method : 객체 프로퍼티로 할당 된 함수


let boy={
    name:'Mike',
    showName: function(){
        console.log(boy.name)
    }
};

    //sayHello:function(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

let girl={
    name:'Jane',
}


boy.sayHello();
girl.sayHello();


sayHello:function(){
    console.log(`Hello, I'm${this.name}`);
}


//method

let boy={
    name:'Mike',
    showName: function() {
        console.log(boy.name)
    }
};

let man = boy;
man.name = "Tom"

console.log(boy.name)

//another method

let boy={
    name:'Mike',
    showName: function() {
        console.log(boy.name)  // boy -> this로 바꿔주면 작동.
    }
};

let man = boy;
boy = null;

man.showName(); // Error


//화살표함수 사용 method
//객체의 method를 작성할때는 화살표함수로 작성X

let boy = {
    name : 'Mike',
    sayThis: function(){
        console.log(this);
    }
};

boy.sayThis();




//배열 array


//1번에 쭈루 2번에 팡어 30번에 뼈햄
//let students=['쭈루', '팡어', ... ,'뼈햄'];
//        index   0       1            29



let arr = [
    '쭈루',  //문자
    3,   //숫자
    false, //불린
    {
        name : 'Zzure',
        age : 32,
    },      //객체
    function(){
        console.log('TEST'); 
    }  //함수
];

//length: 배열의 길이


students.length // 30



//push() 배열 끝에 추가
//pop() 배열 끝 요소 제거
//shift, unshift 배열 앞에 제거/추가



//array

let days = ['mon', 'tue', 'wed'];

days[1] = '화요일';

console.log(days.length);




let days = ['mon', 'tue', 'wed'];

days.push('thu', 'fri');
days.shift();
days.shift();

console.log(days);


for(let index=0; index<days.length; index++){
    console.log(days[index]);
}


for(let day of days){
    console.log(day);
}






