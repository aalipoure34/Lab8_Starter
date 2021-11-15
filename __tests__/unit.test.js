// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Tests For isPhoneNumber

test('858-875-9878 is a real number', () => {
    expect(functions.isPhoneNumber("858-875-9878")).toBe(true);
});

test('619-485-8952 is a real number', () => {
    expect(functions.isPhoneNumber("619-485-8952")).toBe(true);
});

test('epicmemes is not a real number', () => {
    expect(functions.isPhoneNumber("epicmemes")).toBe(false);
});


test('123 is not a real number', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});

//Tests for Email

test('goofy@gmail.com is a real email', () => {
    expect(functions.isEmail("goofy@gmail.com")).toBe(true);
});

test('epicBeast@yahoo.com is a real email', () => {
    expect(functions.isEmail("epicBeast@yahoo.com")).toBe(true);
});

test('hello@ is not a real email', () => {
    expect(functions.isEmail("hello@")).toBe(false);
});

test('goofy@gmail.commm is not a real email', () => {
    expect(functions.isEmail("goofy@gmail.commm")).toBe(false);
});

//Tests for strong passwords

test('hello_batman123 is a strong password', () => {
    expect(functions.isStrongPassword("hello_batman123")).toBe(true);
});

test('StephCurry_30 is a strong password', () => {
    expect(functions.isStrongPassword("StephCurry_30")).toBe(true);
});

test('1010password is not a strong password', () => {
    expect(functions.isStrongPassword("1010password")).toBe(false);
});

test('hihihihihihihihihi is not a strong password', () => {
    expect(functions.isStrongPassword("hihihihihihihihihi")).toBe(false);
});

//Tests for Dates

test('02/10/2010 is a real date', () => {
    expect(functions.isDate("02/10/2010")).toBe(true);
});

test('07/22/2022 is a real date', () => {
    expect(functions.isDate("07/22/2022")).toBe(true);
});

test('07/22/20222 is not a real date', () => {
    expect(functions.isDate("07/22/20222")).toBe(false);
});

test('08/20 is not a real date', () => {
    expect(functions.isDate("08/20")).toBe(false);
});

//Tests for Hex Colors

test('#FFFFFF is a real hex color', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('#C32A02 is a real hex color', () => {
    expect(functions.isHexColor("#C32A02")).toBe(true);
});

test('red is not a real hex color', () => {
    expect(functions.isHexColor("red")).toBe(false);
});

test('blue is not a real hex color', () => {
    expect(functions.isHexColor("blue")).toBe(false);
});








