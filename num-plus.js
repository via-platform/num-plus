let Num = require('num');

Num.prototype.floor = function(precision = 0){
    var copy = Num(this);

    if (precision < copy._precision) {
        copy.set_precision(precision);
    }

    return copy;
};

Num.prototype.ceil = function(precision = 0){
    var copy = Num(this).neg();

    if(precision < copy._precision){
        copy.set_precision(precision);
    }

    return copy.neg();
};

module.exports = Num;
