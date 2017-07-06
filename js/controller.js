class Controller {
    velocity = 0;
    up = document.getElementById('top');
    down = document.getElementById('bottom');

    constructor(name, io) {
        // this.up.addEventListener('mousedown', (event) => {
        //     io.emit(name, -1);
        //     console.log(-1);
        // });

        // this.up.addEventListener('mouseup', (event) => {
        //     io.emit(name, 0);
        //     console.log(0);
        // });

        this.up.addEventListener('touchstart', (event) => {
            io.emit(name, -1);
            console.log(-1);
        });

        this.up.addEventListener('touchend', (event) => {
            io.emit(name, 0);
            console.log(0);
        });

        // ---

        // this.down.addEventListener('mousedown', (event) => {
        //     io.emit(name, 1);
        //     console.log(1);
        // });

        // this.down.addEventListener('mouseup', (event) => {
        //     io.emit(name, 0);
        //     console.log(0);
        // });

        this.down.addEventListener('touchstart', (event) => {
            io.emit(name, 1);
            console.log(1);
        });

        this.down.addEventListener('touchend', (event) => {
            io.emit(name, 0);
            console.log(0);
        });
    }
}
