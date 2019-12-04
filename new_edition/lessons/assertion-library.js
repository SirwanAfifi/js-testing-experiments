const { sumAsync, subtractAsync } = require("../math");

let result, expected;

test("sumAsync adds numbers", async () => {
    result = await sumAsync(3, 7);
    expected = 10;
    expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers", async () => {
    result = await subtractAsync(7, 3);
    expected = 4;
    expect(result).toBe(expected);
});


async function test(title, callback) {
    try {
        await callback();
        console.log(`✅ ${title}`);
    } catch (error) {
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