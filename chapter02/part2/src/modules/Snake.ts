class Snake {
    head: HTMLElement
    bodies: HTMLCollection
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇的坐标(蛇头的坐标)
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 290) {
            throw Error('蛇撞墙了！！！')
        }
        if (this.bodies[1] && (<HTMLElement>this.bodies[1]).offsetLeft === value) {
            console.log('水平方向发生掉头');
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        if (this.bodies.length > 4) {
            this.checkHeadBody()
        }
    }
    set Y(value:number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            throw Error('蛇撞墙了！！！')
        }
        if (this.bodies[1] && (<HTMLElement>this.bodies[1]).offsetTop === value) {
            console.log('竖直方向发生掉头');
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
    }
    // 增加蛇身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    // 蛇身体移动的方法
    moveBody() {
        /**
         * 将后边的身体设置为前边身体的位置
         */
        for (let i = this.bodies.length -1; i > 0; i--) {
            // 获取前面身体的位置
            let X = (<HTMLElement>this.bodies[i - 1]).offsetLeft;
            let Y = (<HTMLElement>this.bodies[i - 1]).offsetTop;
            // 将值设置到当前身体上
            (<HTMLElement>this.bodies[i]).style.left = X + 'px';
            (<HTMLElement>this.bodies[i]).style.top = Y + 'px';
        }
    }
    // 检查蛇头是否撞到自己
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了!')
            }
        }
    }
}

export default Snake