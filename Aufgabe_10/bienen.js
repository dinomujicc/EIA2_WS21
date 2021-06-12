"use strict";
var A10_BlumenwiesePolymorphie;
(function (A10_BlumenwiesePolymorphie) {
    class Bee extends A10_BlumenwiesePolymorphie.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new A10_BlumenwiesePolymorphie.Vector(750, 470);
            this.velocity = new A10_BlumenwiesePolymorphie.Vector(1000, 0);
            this.velocity.random(120, 20);
        }
        draw() {
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "#FFCC33";
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.save();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "lightBlue";
            A10_BlumenwiesePolymorphie.crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.arc(this.position.x + 24, this.position.y - 6, 2, 0, 2 * Math.PI);
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.beginPath();
            A10_BlumenwiesePolymorphie.crc2.fillStyle = "black";
            A10_BlumenwiesePolymorphie.crc2.moveTo(this.position.x - 20, this.position.y);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x - 20, this.position.y + 6);
            A10_BlumenwiesePolymorphie.crc2.lineTo(this.position.x - 30, this.position.y + 3);
            A10_BlumenwiesePolymorphie.crc2.fill();
            A10_BlumenwiesePolymorphie.crc2.closePath();
            A10_BlumenwiesePolymorphie.crc2.restore();
        }
    }
    A10_BlumenwiesePolymorphie.Bee = Bee;
})(A10_BlumenwiesePolymorphie || (A10_BlumenwiesePolymorphie = {}));