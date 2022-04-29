import { hello } from "../js/hello"

test('hello() return hello', () => {
    expect(hello()).toBe("hello");
})
   