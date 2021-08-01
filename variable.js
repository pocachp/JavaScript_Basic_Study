// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
// Mutable 데이터 타입
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);


// 3. Constants
// favor immutable data type always for a few reasons;
// 웬만하면 값을 할당한 다음에 값을 변경되지 않는 데이터 타입
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// primitive : 더 이상 작은 단위로 나눠질 수 없는 한 가지의 아이템
// object, box container
// function, first-class function(function도 변수에 할당 가능, 함수의 인자 전달, 반환 가능)

 const count = 17; // integer
 const size = 17.1 // decimal number
 console.log(`value: ${count}, type: ${typeof count}`); //타입은 Number
 console.log(`value: ${size}, type: ${typeof size}`);

 // number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 추가된 것으로 다른 브라우저에서 많이 쓰이지 않음
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value : ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undifined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 아무것도 아니라고 지정하는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언 O, 아무것도 지정되어있지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 자동으로 string으로 변경
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // Number
console.log(`value: ${text}, type: ${typeof text}`);
