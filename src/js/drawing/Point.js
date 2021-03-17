"use strict";

export default class Point{
    constructor(x,y){
        if (isNaN(x) || isNaN(y)) {
            throw new Error("Parameter is not a number!");
        }
        this._x = x;
        this._y = y;
    }

    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    toString() {
        return `(${this._x},${this._y})`;
    }
}
