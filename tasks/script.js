// 1st task
let x = 5;
alert(++x);

// 2nd task
let example = [] + false - null + true;
console.log(example);

// 3rd task
// let y = 1;
// let x = y = 2;
// alert(x);

// 4th task
let example4 = [] + 1 + 2;
console.log(example4);

// 5th task
alert('1'[0]);

// 6th task 
// AND is stumbles on false!!!!!!!!
// OR is stumbles on true!!!!!!!!!
let operators = 2 && 1 && null && 0 && undefined;
console.log(operators);

// 7th task
console.log(!!(1 && 2) === (1 && 4));

// 8th task
alert(null || 2 && 3 || 4);

// 9th task
const a = [1, 2, 3]; 
const b = [1, 2, 3];
console.log(a == b);

// 10th task
alert(+'Infinity');

// 11th task
// unicode
console.log('Ёжик' > 'яблоко');

// 12th task
console.log(0 || '' || 2 || undefined || true || false);

// try #2

// // 1.
// let x = 5;
// alert(x++); // 5

// // 2.
// let smth = [] + false - null + true;
// console.log(smth); // NaN because after false it`s going not a concat but math operation

// // 3.
// let y = 1;
// let x = y = 2;
// alert(x); // answer is 2

// // 4.
// let sum = [] + 1 + 2;
// console.log(sum); // answer is 12 because [] is a String type concat with Numbers is going to be a String type

// // 5.
// alert('1'[0]); //answer is 1 because the index is 0 that is why it is showing 1

// // 6.
// let operators = 2 && 1 && null && 0 && undefined;
// console.log(operators); // answer is null because AND operator is stopping on false

// // 7.
// console.log(!!(1 && 2) === (1 && 2)); //when we put 2 !! marks it means NOT that is why answer is false

// // 8.
// alert(null || 2 && 3 || 4); // answer is 3 because AND operator has higher priority than OR operator that is why && will be firstly in this answer is 3 because it is returning the last expression OR operator is stopping on true

// // 9.
// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a == b); // answer is that false because arrays are can`t be equal a is box #1 and b is box #2

// // 10.
// alert(+'Infinity'); // answer is Infinity because it`s causes to Number

// // 11.
// console.log('Ёжик' > 'яблоко'); // answer is яблоко because the unicode is higher than first so the answer is false

// // 12.
// console.log(0 || '' || 2 || undefined || true || false);
// // answer 2 because OR operator is stopping on true