class Marker {
    redTypes = 0 // 000000
    blackTypes = 0 // 000000

    setMarker(color, i) {
        if (color === "RED") {
            this.redTypes |= (i << 1)
        } else {
            this.blackTypes |= (i << 1)
        }
    }

    clearMarker(color, i) {
        if (color === "RED") {
            if ((this.redTypes & (i << 1)) === 0) {} // todo error
            this.redTypes ^= (i << 1)
        } else {
            if ((this.blackTypes & (i << 1)) === 0) {} // todo error
            this.blackTypes ^= (i << 1)
        }
    }

}
