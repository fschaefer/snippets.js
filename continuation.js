(function(exports){
    
    function continuation(continuation /*, and values */) {
        return typeof continuation === 'function'
            ? continuation.apply(this, Array.prototype.slice.call(arguments, 1))
            : arguments[1];
    }
    
    exports.continuation = continuation;
    
})(this);
