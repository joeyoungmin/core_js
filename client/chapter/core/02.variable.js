/* ------------------ */
/* Variables          */
/* ------------------ */

// admin과 name이라는 변수를 선언하세요.
// name에 값으로 "John"을 할당해 보세요.
// name의 값을 admin에 복사해 보세요.
// admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.

// let admin;
// let name;

// name = 'John';
// admin = name;

// console.log(admin);

// 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// 웹사이트를 개발 중이라고 가정하`고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// let ourPlanetName = "Earth";
// let currentUserName = "John";

// 위 코드의 상수 birthday는 태어난 날짜 정보를 담고 있습니다. age라는 상수는 나이에 관한 값을 담고 있는데 birthday를 조작하여 그 값을 도출합니다(생일을 이용하여 나이를 도출하는 코드는 간결성을 위해 여기선 언급하지 않겠습니다. 이 문제에서 해당 코드가 중요한 역할을 하지 않기도 합니다).
// 이런 상황에서 birthday를 대문자 상수로 바꾸는 것이 적절할까요? age 역시 대문자 상수로 바꾸는 것이 괜찮은 선택일까요?

// const BIRTHDAY = '18.04.1982'; // 대문자 상수로 바꿔도 괜찮을까요?
// const AGE = someCode(BIRTHDAY); // 대문자 상수로 바꿔도 괜찮을까요?

// 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 주로 사용합니다. 실행 전에 이미 값을 알고 있고, 코드에서 직접 그 값을 쓰는 경우에 사용하죠.
// 위 코드에서 birthday가 그런 경우입니다. 따라서 birthday는 대문자 상수로 적합합니다.
// 반면, age는 런타임에 평가됩니다. 올해의 나이와 내년의 나이는 다르죠. 상수는 코드가 실행될 때마다 바뀌지 않아야 하는 값이란 걸 아마 느끼셨을 겁니다. 이런 관점에서 보았을 때, age는 birthday보다 덜 상수스럽습니다. 런타임에 계산되죠. 따라서 age는 대문자 상수에 적합하지 않습니다.

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;
// - 구매 제품 가격의 총 합
let totalProductPrice;
// - 1년 기준 일(day)자 수
let isPayment = true;
let hasCartPayItem = false;
// - 구매 결제 여부
let paymentList;
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
let fortuneToday = 'so good';
// - 상품 정보
const product_info = '....';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */
