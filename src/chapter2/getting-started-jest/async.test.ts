import { doesNotMatch } from "assert"

const fetchDataWithCallBack = (callback) => {
    setTimeout(callback, 3000, 'lemon')
}

test('return lemon', (done) => {
    const callback = (message: string) => {
        expect(message).toBe('lemon')
        done()
    }
    fetchDataWithCallBack(callback)

})