function create_updated_collection(collection_a, object_b) {
     var count0 = 1;
    var yuansu = new Array();
    var sum = new Array();
    for (var i=0; i<collection_a.length; i++) {
        for (var j=i+1; j<collection_a.length; j++) {
            if (collection_a[i] === collection_a[j]) {
            	count0 ++;
                collection_a.splice(j,1);
                j--;
            }
        }
        yuansu[i] = collection_a[i];
        sum[i] = count0;
        count0 = 1;
    }
    var result1 = new Array();
    for (var i=0; i<yuansu.length; i++) {
        result1[i] = {key:' ', count:0};
        result1[i].key = yuansu[i];
        result1[i].count = sum[i];
    }  
    

    let sameElements = new Array();
    
    for (let i in result1) {
        if (object_b.value.toString().indexOf(result1[i].key.toString()) > -1) {
            sameElements.push(result1[i].key);
        }
    }
    
    
    
    for (let i in result1) {
        for (let j in sameElements) {
            if (result1[i].key === sameElements[j]  && result1[i].count >= 3) {
                result1[i].count  -= Math.floor(result1[i].count/3);
            }
        }
    }
    
    
    return result1;
    
}

module.exports = create_updated_collection;
