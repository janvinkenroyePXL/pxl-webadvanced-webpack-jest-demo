"use strict";

import Point from "./Point";

export default class WereldObject {
    constructor(location) {
        if (!location instanceof Point) {

        } else {
            this._location = location;
        }
    }

    getX() {
        return this._location.getX();
    }

    getY() {
        return this._location.getX();
    }

    setX(value) {
        this._location.x = value;
    }

    setY(value) {
        this._location.y = value;
    }
}