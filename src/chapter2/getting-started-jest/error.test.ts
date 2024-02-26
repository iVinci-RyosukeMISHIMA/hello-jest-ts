import { PassThrough } from "stream";

class User {
    name: string
    password: string

    constructor({ name, password }) {
        if (password.length < 6) throw new Error("password must be less than 6 characters");
        this.name = name
        this.password = password
    }
}


test("normal", () => {
    expect(new User({ name: "hoge", password: "123456" })).toEqual({
        name: "hoge",
        password: "123456"
    })
})

test("error", () => {
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow()
})

test("error message", () => {
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow("password must be less than 6 characters")
})

test("error type", () => {
    expect(() => new User({ name: "hoge", password: "12345" })).toThrow(Error)
})