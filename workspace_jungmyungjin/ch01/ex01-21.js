// 구조 분해 할당
var colors = ["yellow", "green", "blue"];
var [one, two, three, four] = colors;
console.log(one, two, three, four);

var kim1 = { userName: "김철수", userAge: 35 };
var { userName, userAge: age } = { userName: "김철수", userAge: 35 };

// 선언된 변수에 적용
var first, second;
[first, second] = [100, 200, 300];
console.log(first, second);
// 그냥 할당은 안됨
// {first, second} = {first: 'orange', second: 'green', third: 'yellow'}

// 괄호를 감싸면 선언된 변수에 사용 가능
({ first, second } = { first: "orange", second: "green", third: "yellow" });

// 기본값 할당(undefined 대체)
// var {userName, userAge} = {userName:'이영희', userAge: 25};
// var { userName, userAge } = { userName: "이영희" };
var { userName, userAge = "" } = { userName: "이영희" };

// 변수명 변경과 기본값 할당

// 변수값 교환
[a, b] = [b, a];

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a];

// 복합 객체에서 사용
var userList = [
  {
    name: "김철수",
    age: 30,
    course: {
      name: "멋사 6기",
    },
  },
  {
    name: "이영희",
    age: 35,
    course: {
      name: "멋사 8기",
    },
  },
];

// 이름과 코스명만 출력

for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName);
}
