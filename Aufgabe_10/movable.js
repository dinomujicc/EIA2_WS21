"use strict";
var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(750, 470);
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(1000, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_BlumenwiesePolymorphie.crc2.canvas.height;
            if (this.position.x > A10_BlumenwiesePolymorphie.crc2.canvas.height)
                this.position.x -= A10_BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.y > A10_BlumenwiesePolymorphie.crc2.canvas.height)
                this.position.y -= A10_BlumenwiesePolymorphie.crc2.canvas.height;
        }
        draw() {
            // console.log("moveable Move");
        }
    }
    A10_BlumenwiesePolymorphie.Moveable = Moveable;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {}));
//# sourceMappingURL=movable.js.map