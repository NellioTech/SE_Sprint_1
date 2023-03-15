export default class BugBrain {
    #instructions = []
    #pos = 0

    constructor(instructions) {
        this.#instructions = instructions
    }

    getNextInstruction() {
        this.#pos++
        return this.#instructions[this.#pos]
    }
}
