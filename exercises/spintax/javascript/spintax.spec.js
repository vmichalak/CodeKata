const spin = require('./spintax');

test('string without spin', () => {
    expect(spin("abcdef")).toBe("abcdef");
    expect(spin("Bonjour")).toBe("Bonjour");
    expect(spin("Au revoir")).toBe("Au revoir");
});

xtest('string with spin but with only one possible value', () => {
    expect(spin("Bonjour, moi c'est {Valentin}")).toBe("Bonjour, moi c'est Valentin");
    expect(spin("{hello}")).toBe("hello");
});

xtest('spin with two values', () => {
    let a = spin("{a|b}");
    expect(a === "a" || a === "b").toBeTruthy();

    let b = spin("{c|d}");
    expect(b === "c" || b === "d").toBeTruthy();

    let c = spin("{e|f}");
    expect(c === "e" || c === "f").toBeTruthy();
});

xtest('spin with more values', () => {
    let a = spin("{a|b|c}");
    expect(a === "a" || a === "b" || a === "c").toBeTruthy();

    let b = spin("{d|e|f|g|h}");
    expect(b === "d" || b === "e"|| b === "f" || b === "g" || b === "h").toBeTruthy();
});

xtest('spin with special chars', () => {
    let a = spin("{a$|b€|%c}");
    expect(a === "a$" || a === "b€" || a === "%c").toBeTruthy();
});

xtest('spin with space', () => {
    let a = spin("Bonjour {a et b|b et c}");
    expect(a === "Bonjour a et b" || a === "Bonjour b et c").toBeTruthy();

    let b = spin("{d e|e f|g h|i j|k l}");
    expect(b === "d e" || b === "e f"|| b === "g h" || b === "i j" || b === "k l").toBeTruthy();
});

xtest('spin in spin', () => {
    let a = spin("{a{a|b}|b{c|d|e}}");
    expect(a === "aa" || a === "ab" || a === "bc" || a === "bd" || a === "be").toBeTruthy();

    let b = spin("{z {a|z}|d {d|de}|a}");
    expect(b === "z a" || b === "z z"|| b === "d d" || b === "d de" || b === "a").toBeTruthy();
});