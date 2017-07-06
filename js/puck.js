class Puck {
    radius = 10
    xVelocity = 5;
    yVelocity = 0;

    constructor(game) {
        this.game = game;
        this.size = 20
        this.x = game.width / 2;
        this.y = game.height / 2;
    }

    update() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if(this.x >= this.game.width) {
            this.reset();
        }

        if(this.x <= 0) {
            this.reset();
        }

        if(this.y <= 0) {
            this.yVelocity = -1 * this.yVelocity;
        }

        if(this.y >= this.game.height) {
            this.yVelocity = -1 * this.yVelocity;
        }

        if(this.hitsPlayer(this.game.players[0])) {
            this.xVelocity = -1 * this.xVelocity;
            this.yVelocity = (this.y - this.game.players[0].y + (this.game.players[0].height / 2)) / 35;
        }

        if(this.hitsPlayer(this.game.players[1])) {
            this.xVelocity = -1 * this.xVelocity;
            this.yVelocity = (this.y - this.game.players[1].y + (this.game.players[1].height / 2)) / 35 ;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }

    reset() {
        this.x = game.width / 2;
        this.y = game.height / 2;
        this.yVelocity = 0;
    }

    hitsPlayer(player) {
        var DeltaX = this.x - Math.max(player.x, Math.min(this.x, player.x + player.width));
        var DeltaY = this.y - Math.max(player.y, Math.min(this.y, player.y + player.height));

        return (DeltaX * DeltaX + DeltaY * DeltaY) < (this.radius * this.radius);
    }
}
