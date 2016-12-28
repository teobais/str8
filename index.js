module.exports = {

    firstHalf: function(str) {
        return str.substring(0, str.length/2);
    },
    
    secondHalf: function(str) {
        return str.substring(str.length/2, str.length);
    },
    
    prune: function(str) {
        return str.length > 1 ? str.substring(1, str.length-1) : "" ;
    }

}
