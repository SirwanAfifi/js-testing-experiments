const { sum, subtract } = require("../math");

let result, expected;

test("sum adds numbers", () => {
    result = sum(3, 7);
    expected = 10;
    expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
    result = subtract(7, 3);
    expected = 4;
    expect(result).toBe(expected);
});

function test(title, callback) {
    try {
        callback();
        console.log(`✅ ${title}`);
    } catch {
        console.error(`🔴 ${title}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(expected) { },
        toBeGreaterThan(expected) { }
    }
}