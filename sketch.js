class Lissajous {
    constructor(x, y) {
        this.pointPos = []
        this.radius = 100
        this.factor = round(random(1,3))
        this.pos = {x: x, y: y}
        /*lissajous PunktPositionen wird mit loop generiert und in this.pos array gepusht*/
        for (let b = 0; b < TAU; b = b + TWO_PI/250) {
            let posX = cos(b + this.factor) * this.radius
            let posY = sin(b * this.factor) * this.radius
            this.pointPos.push({x: posX, y: posY})
        }
    }

    show() {
        this.t = frameCount/100;
        push()
        translate(this.pos.x, this.pos.y)
        //Lissaujous Punkte werden auf Canvas gezeichnet
        for (let p of this.pointPos) {
            // point(p.x  * cos(this.t), p.y)
            line(p.x * cos(this.t), p.y * sin(this.t), 400, 400)
        }
        pop()
    }

connect() {

}

}


let lissajous = []

function setup() {
    createCanvas(400, 400);
    for (i = 0; i < 3; i += 1) {
        lissajous.push(new Lissajous((i + 1) * 100, (i + 1) * 100))
    }
}


function draw() {
    background(200);
    for (i = 0; i < lissajous.length; i += 1) {
        lissajous[i].show()
        // lissajous[i].moving()
    }
}