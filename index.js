module.exports = {

    firstHalf: function(str) {
        return str.substring(0, str.length/2);
    },
    
    secondHalf: function(str) {
        return str.substring(str.length/2, str.length);
    },
    
    prune: function(str) {
        return str.length > 1 ? str.substring(1, str.length-1) : "" ;
    },
    
    capitalizeFirst: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    isValidURL: function(url)
    {
        return new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?").test(url);
    }

}
