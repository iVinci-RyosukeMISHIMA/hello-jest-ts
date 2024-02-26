const expected = [1, 2, 3];

test("array toEqual", () => {
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining(expected));
})