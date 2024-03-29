import { bitwiseAND, bitwiseOR, bitwiseXOR } from './functions.js';

// Первый тест
test('bitwise 7 AND 12 to equal 4', () => {
    expect(bitwiseAND(7, 12)).toBe(4);
});

test('bitwise 7 OR 12 to equal 15', () => {
    expect(bitwiseOR(7, 12)).toBe(15);
});

test('bitwise 7 XOR 12 to equal 11', () => {
    expect(bitwiseXOR(7, 12)).toBe(11);
});


// Второй тест
test('bitwise 32 AND 17 to equal 4', () => {
    expect(bitwiseAND(32, 17)).toBe(0);
});

test('bitwise 32 OR 17 to equal 15', () => {
    expect(bitwiseOR(32, 17)).toBe(49);
});

test('bitwise 32 XOR 17 to equal 11', () => {
    expect(bitwiseXOR(32, 17)).toBe(49);
});

// Третий тест
test('bitwise 13 AND 19 to equal 1', () => {
    expect(bitwiseAND(13, 19)).toBe(1);
});

test('bitwise 13 OR 19 to equal 31', () => {
    expect(bitwiseOR(13, 19)).toBe(31);
});

test('bitwise 13 XOR 19 to equal 30', () => {
    expect(bitwiseXOR(13, 19)).toBe(30);
});