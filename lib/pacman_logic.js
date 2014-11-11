var _  = require("underscore");

function PacManGuy() {
}

PacManGuy.prototype.move = function() {
  this.x += this.xRateChange;
  this.y += this.yRatechange;
  var blockedPath = this.blockChecker();
  this.stopWhenBlocked(blockedPath);
};

PacManGuy.prototype.blockChecker = function () {
  var blockedPath;
  var _this = this;
  _.(this.board).each(function (wall) {
    if (_this.isUpBlocked(wall)) blockedPath = "Up";
    if (_this.isDownBlocked(wall)) blockedPath = "Down";
    if (_this.isLeftBlocked(wall)) blockedPath = "Left";
    if (_this.isRightBlocked(wall)) blockedPath = "Right";
  })
  return blockedPath;
};

PacManGuy.prototype.isUpBlocked = function(wall) {
  return this._isBeneath(wall) && this._xCollision(wall);
};

PacManGuy.prototype.isDownBlocked = function(wall) {
  return this._isAbove(wall) && this._xCollision(wall);
};

PacManGuy.prototype.isLeftBlocked = function(wall) {
  return this._isToTheRight && this._yCollision(wall)
};

PacManGuy.prototype.isRightBlocked = function(wall) {
  return this._isToTheLeft && this._yCollision(wall)
};

PacManGuy.prototype._isBeneath = function(wall) {
  return this.y > wall.y;
};

PacManGuy.prototype._isAbove = function(wall) {
  return this.y < wall.y;
};

PacManGuys.prototype._isToTheRight = function(wall) {
  return this.x > wall.x;
}

PacManGuys.prototype._isToTheLeft = function(wall) {
  return this.x < wall.x;
}

PacManGuy.prototype._xCollision = function(wall) {
  return this.x >= wall.x && this.x <= (wall.width + wall.x)
    && Math.abs(wall.y - this.y) < this.clearance;
};

PacManGuy.prototype._yCollision = function(wall) {
  return this.y >= wall.y && this.y <= (wall.height + wall.y)
    && Math.abs(wall.x - this.x) < this.clearance
}


