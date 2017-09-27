"use strict";
function _classCallCheck(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function e(e, r) {
    for (var a = 0; a < r.length; a++) {
      var o = r[a];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (r, a, o) {
    return a && e(r.prototype, a), o && e(r, o), r;
  };
}(),
    Board = exports.Board = function () {
  function e(r, a, o) {
    _classCallCheck(this, e), this._numberOfBombs = o, this._numberOfTiles = r * a, this._playerBoard = e.generatePlayerBoard(r, a), this._bombBoard = e.generateBombBoard(r, a, o);
  }return _createClass(e, [{ key: "flipTile", value: function e(r, a) {
      if (" " !== this._playerBoard[r][a]) return void console.log("This tile has already been flipped!");"B" === this._bombBoard[r][a] ? this._playerBoard[r][a] = "B" : this._playerBoard[r][a] = this.getNumberOfNeighborBombs(r, a), this._numberOfTiles--;
    } }, { key: "getNumberOfNeighborBombs", value: function e(r, a) {
      var o = this,
          t = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]],
          n = this._bombBoard.length,
          i = this._bombBoard[0].length,
          l = 0;return t.forEach(function (e) {
        var t = r + e[0],
            s = a + e[1];t >= 0 && t < n && s >= 0 && s < i && "B" === o._bombBoard[t][s] && l++;
      }), l;
    } }, { key: "hasSafeTiles", value: function e() {
      return this._numberOfTiles !== this._numberOfBombs;
    } }, { key: "print", value: function e() {
      console.log(this._playerBoard.map(function (e) {
        return e.join(" | ");
      }).join("\n"));
    } }, { key: "playerBoard", get: function e() {
      return this._playerBoard;
    } }], [{ key: "generatePlayerBoard", value: function e(r, a) {
      for (var o = [], t = 0; t < r; t++) {
        for (var n = [], i = 0; i < a; i++) {
          n.push(" ");
        }o.push(n);
      }return o;
    } }, { key: "generateBombBoard", value: function e(r, a, o) {
      for (var t = [], n = 0; n < r; n++) {
        for (var i = [], l = 0; l < a; l++) {
          i.push(null);
        }t.push(i);
      }for (var s = 0; s < o;) {
        var u = Math.floor(Math.random() * r),
            f = Math.floor(Math.random() * r);"B" !== t[u][f] && (t[u][f] = "B", s++), t[u][f] = "B", s++;
      }return t;
    } }]), e;
}();