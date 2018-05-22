class PlayScreen {

    game:Game
    private balls: Ball[] = []
    private paddle:Paddle

    constructor(g:Game) {
        this.game = g
        this.paddle = new Paddle(20, 87, 83)
        
        for (var i = 0; i < 5; i++) {
            this.balls.push(new Ball())
        }      
    }

    public update(): void {
        for (var b of this.balls) {
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                b.hitPaddle()
            }

            b.update()
        }

        this.paddle.update()
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }


}