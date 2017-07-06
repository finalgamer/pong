class Player {
    width = 10;
    height = 70;

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.velocity = 0;
    }

    update() {
        this.y += this.velocity

        if(this.y + this.height >= this.game.height) {
            this.y = this.game.height - this.height;
        }

        if(this.y  < 0) {
            this.y = 0;
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    hits(ball) {
        return false;
    }
}
