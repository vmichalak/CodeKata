const solution = require('./luhn');

test('single digit strings can not be valid', () => {
    expect(solution.valid('1')).toBe(false);
});

xtest('a single zero is valid', () => {
    expect(solution.valid('0')).toBe(false);
});

xtest('a simple valid SIN that remains valid if reversed', () => {
    expect(solution.valid('059')).toBe(true);
});

xtest('a simple valid SIN that becomes valid if reversed', () => {
    expect(solution.valid('59')).toBe(true);
});

xtest('single zero with space is valid', () => {
    expect(solution.valid(' 0')).toBe(false);
});

xtest('more than a single zero is valid', () => {
    expect(solution.valid('0000 0')).toBe(true);
});

xtest('a valid Canadian SIN', () => {
    expect(solution.valid('055 444 285')).toBe(true);
    expect(solution.valid('788 632 818')).toBe(true);
    expect(solution.valid('249 387 382')).toBe(true);
});

xtest('valid Canadian SIN', () => {
    expect(solution.valid('055 444 286')).toBe(false);
    expect(solution.valid('788 632 819')).toBe(false);
    expect(solution.valid('249 387 383')).toBe(false);
});

xtest('valid credit card', () => {
    expect(solution.valid('4456 2922 8603 7803')).toBe(true);
    expect(solution.valid('4289 0031 4275 2235')).toBe(true);
    expect(solution.valid('4766 6566 8643 4163')).toBe(true);
});

xtest('valid credit card', () => {
    expect(solution.valid('4456 2922 8603 7804')).toBe(false);
    expect(solution.valid('4289 0031 4275 2236')).toBe(false);
    expect(solution.valid('4766 6566 8643 4164')).toBe(false);
});

xtest('valid number with an even number of digits', () => {
    expect(solution.valid('095 245 88')).toBe(true);
});

xtest('valid number with an odd number of spaces', () => {
    expect(solution.valid('234 567 891 234')).toBe(true);
});

xtest('valid strings with a non-digit added at the end invalid', () => {
    expect(solution.valid('059a')).toBe(false);
});

xtest('valid strings with punctuation included become invalid', () => {
    expect(solution.valid('055-444-285')).toBe(false);
});

xtest('valid strings with symbols included become invalid', () => {
    expect(solution.valid('4456& 2922/ 8603€ 7803')).toBe(false);
    expect(solution.valid('4289 0031$ 4275# 2235')).toBe(false);
    expect(solution.valid('4766% 6566 8643£ 4163')).toBe(false);
});

xtest('input digit 9 is correctly converted to output digit 9', () => {
    expect(solution.valid('091')).toBe(true);
});

xtest('using ascii value for non-doubled non-digit isn\'t allowed', () => {
    expect(solution.valid('055b 444 285')).toBe(false);
});

xtest('using ascii value for doubled non-digit isn\'t allowed', () => {
    expect(solution.valid(':9')).toBe(false);
});

xtest('generate a valid luhn number', () => {
    expect(solution.valid(solution.generate(16))).toBe(true);
    expect(solution.valid(solution.generate(16))).toBe(true);
    expect(solution.valid(solution.generate(16))).toBe(true);
    expect(solution.valid(solution.generate(16))).toBe(true);
    expect(solution.valid(solution.generate(16))).toBe(true);
});