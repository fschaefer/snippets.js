(function(exports){
    
    function augment (receiving, giving) {
        if (arguments[2]) {
            for (var i = 2, len = arguments.length; i < len; i++) {
                receiving[arguments[i]] = giving[arguments[i]];
            }
        } else {
            for (var method in giving) {
                if (!receiving[method]) {
                    receiving[method] = giving[method];
                }
            }
        }
    };
    
    exports.augment = augment;
    
})(this);
