(function(){
    /**
     * 以abstract开头的类是抽象类，抽象类和其他类区别不大，只是不能用来创建对象
     * 抽象类就是专门用来被继承的
     * 抽象类中可以添加抽象方法
     */
    abstract class Animal{
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }

    class Dog extends Animal {
        sayHello(): void {
            // 在类的方法中super就表示当前类的父类
            // super.sayHello()
            console.log('汪汪汪汪！');
        }
    }

    const dog = new Dog('旺财')
    dog.sayHello()
})()