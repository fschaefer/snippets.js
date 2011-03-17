(function(exports){
    
    function values (continuation /*, and values */) {
        return Object.prototype.toString.call (continuation) === '[object Function]'
            ? continuation.apply (this, Array.prototype.slice.call(arguments, 1))
            : arguments[1];
    }
    
    exports.values = values;
    
})(this);
