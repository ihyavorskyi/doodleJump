const { ccclass, property } = cc._decorator;

@ccclass
export default class Score extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    characterNode: cc.Node = null;

    score = 0;

    static nloScore = 0;

    scoreForScreen = 0;

    update(dt) {

        if (this.score < this.characterNode.y / 10)
            this.score = this.characterNode.y / 10;


        this.scoreForScreen = this.score + Score.nloScore;
        this.scoreLabel.string = "Score: " + this.scoreForScreen.toFixed();
    }
}
