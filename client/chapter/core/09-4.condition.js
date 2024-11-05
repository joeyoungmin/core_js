/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 'kindtiger@gmail.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// condition ? value1 : value2

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';

receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

// console.log(0 || WIDTH);
// console.log(0 ?? WIDTH);

// console.log(undefined || WIDTH);
// console.log(undefined ?? WIDTH);

// console.log(isActive || WIDTH);
// console.log(isActive ?? WIDTH);

// console.log('' || WIDTH);
// console.log('' ?? WIDTH);

// a ||= b a가 false일때 b 값을 a에 할당
// a &&= b a가 true일때 b 값을 a에 할당
// a ??= b a가 undefined,null일때 b 값을 a에 할당

// 당신은 온라인 쇼핑몰의 구매 기능을 구현하고 있습니다.
// 고객이 상품을 구매할 때 여러 조건을 검토해야 합니다.

// 1. 사용자 상태:
//   - 사용자는 회원일 수도 있고 비회원일 수도 있습니다.
//   - 사용자가 회원일 경우, '프리미엄' 회원과 '일반' 회원으로 나뉩니다.

// 2. 할인 규칙:
//   - 모든 사용자(회원 및 비회원)에게 첫 구매 시 5% 할인이 적용됩니다.
//   - 일반 회원은 두 번째 구매부터 10% 할인을 받습니다.
//   - 프리미엄 회원은 항상 20% 할인을 받습니다.
//   - 비회원은 두 번째 구매부터 할인이 없습니다.

// 3. 추가 조건:
//   - 구매 금액이 100달러 이상일 경우, 추가로 5% 할인을 제공합니다. 이 할인은 모든 사용자에게 적용됩니다.

function discountPrice(state, count, price) {
  let discount = 0;

  if (count === 1) {
    discount += 5;
  }

  if (state === '프리미엄 회원') {
    discount += 20;
  } else if (state === '일반 회원' && count > 1) {
    discount += 10;
  } else if (state === '비회원' && count > 1) {
    discount += 0;
  }

  if (price >= 10000) {
    discount += 5;
  }

  console.log(price - price * discount * 0.01);
  console.log(price * (1 - discount / 100));

  const totalPrice = price * (1 - discount / 100);

  return totalPrice;
}

discountPrice('프리미엄 회원', 1, 12350);
