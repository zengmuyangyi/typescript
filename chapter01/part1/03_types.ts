// 也可以直接使用字面量进行类型声明
let b: 10
let a: string

// 可以使用|来连接多个类型(联合类型)
let c: 'male' | 'female'
c = 'male'
c = 'female'

let d: boolean | string
d = true
d = 'hello'

// any表示是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let e: any

// 声明变量如果不指定类型，则TS解析器会自动判断的类型为any(隐式的any)
let e
e = 10
e = 'hello'
e = true

// unknown 表示未知类型的值
let f: unknown
f = 10
f = true
f = 'hello'

let g:string
// e的类型是any，它可以赋值给任意变量
// g = e

// unknown实际上就是一个类型安全的any
// unknown了些的变量，不能直接赋值给其他变量
if (typeof f === 'string') {
    g = f
}

// 类型断言，可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *      变量 as 类型
 *      <类型>变量
 */
g = f as string
g = <string>f

// void用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
    return
}
// never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错了')
}

export {}