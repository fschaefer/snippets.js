(function(exports){
    
    function guard (args, types) {
        
        if (types.length !== args.length) {
            throw 'Guard.js: Invalid number of arguments: Expected ' + types.length + ', received ' + args.length + ' instead.';
        }
        
        for (var i = 0, len = types.length; i < len; i++) {
            if (args[i].constructor !== types[i]) {
                throw 'Guard.js: Invalid argument type: Expected ' + types[i].name + ', received ' + args[i].constructor.name + ' instead.';
            }
        }
        
    }
    
    exports.guard = guard;
    
})(this);
