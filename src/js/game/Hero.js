"use strict";

import WereldObject from './WereldObject';

export default class Hero extends WereldObject {
    moveDown(number) {
        this._location.y -= 1;
    }

    moveUp(number) {
        this._location.y += 1;
    }

    moveLeft(number) {
        this._location.x -= 1;
    }

    moveRight(number) {
        this._location.x += 1;
    }



}