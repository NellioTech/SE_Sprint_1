class position{
  x = 0; 
  y = 0;
}


class WorldCell {
  #obstructed = false;
  #bug = null;
  #food = 0;
  #marker = null;
  #base = null;

  isObstructed() = false;
  isOccupied() = false;
  getBug() = null;
  removeBug() = false;
  
  setFood(amount){
    this.#food = amount;
  }
  
  isFriendlyBase(color){
    return #this.#base === color;
  }
   isFriendlyBase(color){
    return #this.#base === color;
  }
  
  setMarker(color)
}
