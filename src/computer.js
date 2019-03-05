window.Computer = {
    currentMemoryGBs: 2,
    currentSpaceGBs: 1000,
    addMemory: function() {
        var memory = this.currentMemoryGBs;
        if (arguments.length <= 2) {
            for (var i = 0, len = arguments.length; i < len; i++) {
                memory += arguments[i];
            }
            this.currentMemoryGBs += memory;
            return memory;
        } else { return false }
    },
    install: function() {
        for (var i = 0, len = arguments.length; i < len; i++) {
            if (arguments[i].space <= this.currentSpaceGBs) {
                this.currentSpaceGBs -= arguments[i].space;
                arguments[i].installed = true;
            }
            if (arguments[i].installed === false) {
                return false;
            }
        }
        return true;
    }
}