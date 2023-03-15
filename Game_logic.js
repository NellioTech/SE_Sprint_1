class position{
  #x; // position x
  #y; // position y
}
class WorldCell {
  #obstructed = false;
  #bug = null;
  #food = 0;
  #marker = {x:0, y:0, i}; // set the marker i at position (x,y)
  #base = null;
  #position = {x:0, y: 0};
  constructor(x, y) {
    this.#position.x = x;
    this.#position.y = y;
  }

  isObstructed() {
    return this.#obstructed != this.null;
  }
  isOccupied() {
    return this.#bug !== this.null;
  }
  getBug() {
    if (this.#bug !== null) {
      return new position(this.#bug.x, this.#bug.y);
    }
    else
      return null;
  }
  removeBug() {
    if (this.#bug !== null) {
      this.#bug = null;
      new position(this.#bug.x, this.#bug.y);
      return true;
    }
    else
      return false;
  }

  setFood(amount) {
    this.#food = amount;
  }

  isFriendlyBase(color) {
    return this.#base === color;
  }
  isFriendlyBase(color) {
    return this.#base === color;
  }
  setMarker(color, i) {
    if (this.#bug !== null && this.#base === color) {
      this.#marker = new marker();
      this.#marker.i = markerIndex;
    }
  }
  clearMarker(color, i) {
    //this.position
    if (this.#bug !== null && this.#base === color) {
      this.#marker = null;;
      this.#marker.i = 0;
    }
  }

}
