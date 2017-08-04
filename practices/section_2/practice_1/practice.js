function count_same_elements(collection) {
    var count0 = 1;
    var yuansu = new Array();
    var sum = new Array();
    for (var i=0; i<collection.length; i++) {
        for (var j=i+1; j<collection.length; j++) {
            if (collection[i] === collection[j]) {
            	count0 ++;
                collection.splice(j,1);
                j--;
            }
        }
        yuansu[i] = collection[i];
        sum[i] = count0;
        count0 = 1;
    }
    
    return getResult(yuansu, sum)
}

function getResult(yuansu, sum) {
    var result = new Array();
    for (var i=0; i<yuansu.length; i++) {
        result[i] = {key:' ', count:0};
        result[i].key = yuansu[i];
        result[i].count = sum[i];
    }  
    
    return result;
}

module.exports = count_same_elements;
