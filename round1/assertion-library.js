const { sum, subtract } = require("./math");

test("sum adds numbers", () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
});





function test(title, callback) {
    try {
        callback();
        console.log(`X ${title}`);
    } catch (error) {
        console.log(`X ${title}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toEqual(expected) { },
        toBeGreaterThan(expected) { }
    }
}