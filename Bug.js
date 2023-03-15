enum BugState {
    DEAD,
}

export default class Bug {
    #id;
    #color;
    #state;
    #resting;
    #direction;
    #hasFood;
    #brain;
    #pos;

    kill() {
        console.assert(this.state !== BugState.DEAD);
        this.state = BugState.DEAD;
    }

    getPosition() {
        alert("Not yet implemented");
    }

    toString() {
        return `Bug ${this.#id} of color ${this.#color} at position ${this.#pos}.\n
        State: ${this.#state}, \n
        Resting: ${this.#resting}, \n
        Direction: ${this.#direction}, \n
        HasFood: ${this.#hasFood}, \n
        Brain: ${this.#brain.toString()}.`
    }
}