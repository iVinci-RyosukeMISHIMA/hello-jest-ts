import { can1, can2, can3, can4 } from "./object";

test("can1 toBe can2", () => {
    expect(can1).toBe(can2);
})

test("can1 toEqual can2", () => {
    expect(can1).toEqual(can2);
})

test("can1 toStrictEqual can2", () => {
    expect(can1).toStrictEqual(can2);
})


test("can2 toBe can3", () => {
    expect(can2).toBe(can3);
})

test("can2 toEqual can3", () => {
    expect(can2).toEqual(can3);
})

test("can2 toStrictEqual can3", () => {
    expect(can2).toStrictEqual(can3);
})


test("can4 toBe can1", () => {
    expect(can4).toBe(can1);
})

test("can4 toEqual can1", () => {
    expect(can4).toEqual(can1);
})

test("can4 toStrictEqual can1", () => {
    expect(can4).toStrictEqual(can1);
})
