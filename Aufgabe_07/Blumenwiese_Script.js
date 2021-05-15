"use strict";
// Zusammenarbeit mit Tim Nees und Hilfe von Alessia
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky(0, 0, "#FF82FD");
        drawMountainBig(500, 310, "#a9a9a9");
        drawMeadow(0, 0);
        drawSun(560, 120, "#F982FF", "#F982FF");
        drawTree(750, 300);
        drawBushBig(860, 380, "#FF8282");
        drawBushSmall(90, 380, "#F6FA7A");
        drawBushSmall(190, 380, "#F2D7D0");
        drawBushBig(470, 380, "#F7B865");
        drawBushSmall(560, 410, "#F6FA7A");
        drawBushBig(-20, 440, "#F7B865");
        drawCloud(760, 150, "#9382FF");
        drawCloud(560, 200, "#9382FF");
        drawCloud(360, 40, "#9382FF");
        drawPoppy(550, 565);
        drawSunflower(960, 565);
        drawTulip(900, 600);
        for (var height = 450; height < 630; height += 2) {
            var randomFlower = Math.floor((Math.random() * 3));
            var width = Math.floor((Math.random() * 1100) - 10);
            switch (randomFlower) {
                case 0:
                    drawSunflower(width, height);
                    break;
                case 1:
                    drawPoppy(width, height);
                    break;
                case 2:
                    drawTulip(width, height);
                    break;
            }
        }
    }
    function drawMeadow(_x, _y) {
        var gradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#383D59");
        gradient.addColorStop(0.6, "#99AABF");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y + 400);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);
        crc2.closePath();
        crc2.fill();
    }
    function drawSky(_x, _y, _strokeColor) {
        var gradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#FF82FD");
        gradient.addColorStop(1, "#383D59");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);
        crc2.closePath();
        crc2.fill();
    }
    function drawMountainBig(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        var gradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#0A49D1");
        gradient.addColorStop(0.8, "#041F59");
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.moveTo(500, 500);
        crc2.quadraticCurveTo(100, 10, -200, 400);
        crc2.moveTo(500, 55);
        crc2.quadraticCurveTo(50, 0, -20, -10);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(1000, 500);
        crc2.quadraticCurveTo(850, 50, -200, 600);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(1280, 400);
        crc2.quadraticCurveTo(1050, 10, 600, 750);
        crc2.fill();
    }
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(150, _y, 100, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#850000";
        crc2.fillRect(1000, 335, 25, 110);
        crc2.fillRect(1080, 355, 50, 6);
        crc2.fillRect(1070, 380, 20, 6);
        crc2.beginPath();
        crc2.fillStyle = "#04BD7C";
        crc2.arc(980, 255, 60, 0, 2 * Math.PI);
        crc2.arc(1050, 285, 55, 0, 2 * Math.PI);
        crc2.arc(980, 315, 35, 0, 2 * Math.PI);
        crc2.arc(990, 305, 55, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#850000";
        crc2.fillRect(200, 325, 25, 110);
        crc2.beginPath();
        crc2.fillStyle = "#04BD7C";
        crc2.arc(220, 255, 40, 0, 2 * Math.PI);
        crc2.arc(250, 310, 35, 0, 2 * Math.PI);
        crc2.arc(190, 315, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#850000";
        crc2.fillRect(1080, 335, 25, 110);
        crc2.beginPath();
        crc2.fillStyle = "#04BD7C";
        crc2.arc(1800, 255, 60, 0, 2 * Math.PI);
        crc2.arc(1140, 285, 55, 0, 2 * Math.PI);
        crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 305, 55, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBushBig(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 55, _y + 30, 45, 0, 2 * Math.PI);
        crc2.arc(_x + 75, _y + 10, 30, 0, 2 * Math.PI);
        crc2.arc(_x + 120, _y + 40, 34, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 30, 45, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBushSmall(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawPoppy(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#3CC956";
        crc2.fillRect(_x - 2, _y + 10, 4, 50);
        crc2.moveTo(_x, _y + 50);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.moveTo(_x, _y + 50);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.moveTo(_x, _y + 55);
        crc2.lineTo(_x + 12, _y + 35);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C92222";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawSunflower(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#3CC956";
        crc2.fillRect(_x - 2, _y + 10, 4, 50);
        crc2.beginPath();
        crc2.fillStyle = "#FBFF00";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawTulip(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#3CC956";
        crc2.fillRect(_x + 9, _y + 28, 3, 40);
        crc2.arc(_x + 8, _y + 30, 20, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FCA714";
        crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y + 7);
        crc2.lineTo(_x + 6, _y + 14);
        crc2.lineTo(_x + 10.5, _y + 4);
        crc2.lineTo(_x + 15, _y + 14);
        crc2.lineTo(_x + 20, _y + 7);
        crc2.lineTo(_x + 20, _y + 21);
        crc2.closePath();
        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Blumenwiese_Script.js.map