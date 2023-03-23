class Word extends Text {
    constructor() {
        this.text = 'DADDY';
        super(x,y);
    }

    

    update() {
        text(this.text, x, y);
        textAlign(CENTER, CENTER);
        textSize(89);
       }
}