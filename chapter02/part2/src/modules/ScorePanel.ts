// 定义表示记分牌的类
class ScorePanel {
    private _score = 0
    private _level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 设置一个变量限制等级
    maxLevel: number
    upScore: number
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分的方法
    addScore() {
        this._score++
        this.scoreEle.innerHTML = `${this._score}`
        if (this._score % this.upScore === 0) {
            this.levelUp()
        }
    }
    // 设置加level的方法
    levelUp() {
        if (this._level < this.maxLevel) {
            this._level++
            this.levelEle.innerHTML = `${this._level}`
        }
    }
    // 获取得分
    get score() {
        return this._score
    }
    // 获取级别
    get level() {
        return this._level
    }
}

export default ScorePanel