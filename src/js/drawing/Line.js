"use strict";

import Point from "./Point";

export default class Line {
    constructor(point1, point2) {
        if(point1 instanceof Point && point2 instanceof Point) {
            this._point1 = point1;
            this._point2 = point2;
        } else {
            throw Error('Geen Point-object')
        }
    }

    get point1() {
        return this._point1;
    }

    set point1(value) {
        this._point1 = value;
    }

    get point2() {
        return this._point2;
    }

    set point2(value) {
        this._point2 = value;
    }

    toString() {
        return `Line ${this._point1}-${this._point2}`;
    }
}
