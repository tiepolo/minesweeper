"use strict";
function _classCallCheck(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}var _createClass = function () {
  function e(e, r) {
    for (var o = 0; o < r.length; o++) {
      var a = r[o];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }return function (r, o, a) {
    return o && e(r.prototype, o), a && e(r, a), r;
  };
}(),
    _board = require("./board"),
    Game = function () {
  function e(r, o, a) {
    _classCallCheck(this, e), this._board = new _board.Board(r, o, a);
  }return _createClass(e, [{ key: "playMove", value: function e(r, o) {
      this._board.flipTile(r, o), "B" === this._board.playerBoard[r][o] ? (console.log("The game is over, bro!"), this._board.print()) : this._board.hasSafeTiles() ? (console.log("Current Board:"), this._board.print()) : console.log("You won! Great job, bruh!");
    } }]), e;
}();