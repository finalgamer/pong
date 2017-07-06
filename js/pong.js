class Pong {
    width = 900;
    height = 500;
    prevTimestamp = null;
    puck = new Puck(this);
    players = [
        new Player(this, 20, this.height / 2 - 35),
        new Player(this, this.width - 20, this.height / 2 - 35)
    ];

    constructor(io) {
        this.io = io;
        this.canvas = this.setupCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.bindings();
    }

    setupCanvas() {
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.height = this.height;
        canvas.width = this.width;

        return canvas;
    }

    start() {
        this.prevTimestamp = new Date().getTime();

        requestAnimationFrame(this.animFrame.bind(this));
    }

    animFrame(timestamp) {
        var progress = timestamp - this.prevTimestamp;

        if(progress < 2000) {
            this.update();
            requestAnimationFrame(this.animFrame.bind(this));
        }
    }

    update() {
        this.puck.update();
        this.players[0].update();
        this.players[1].update();
        this.draw(this.ctx);
    }

    draw(ctx) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, this.width, this.height);

        this.puck.draw(ctx);
        this.players[0].draw(ctx);
        this.players[1].draw(ctx);
    }

    bindings() {
        this.io.on('controller1', (data) => {
            this.players[0].velocity = data;
        });

        this.io.on('controller2', (data) => {
            this.players[1].velocity = data;
        });
    }
}
