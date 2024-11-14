// 定义食物类
class Food{
    // 定义一个属性表示食物的元素
    element: HTMLElement
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!
    }
    // 定义获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }
    // 定义获取食物y轴坐标的方法
    get Y() {
        return this.element.offsetTop
    }
    // 修改食物位置的方法
    change() {
        // 食物位置在0~290
        // 蛇移动一次一格为10，食物的坐标必须是整10
        this.element.style.left = `${Math.round(Math.random() * 29) * 10}px`
        this.element.style.top = `${Math.round(Math.random() * 29) * 10}px`
    }
}

// const food = new Food()
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);

export default Food