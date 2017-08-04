function create_updated_collection(collection_a, object_b) {
    let result = new Array();
    let sameElements = new Array();
    
    for (let i in collection_a) {
        if (object_b.value.toString().indexOf(collection_a[i].key.toString()) > -1) {
            sameElements.push(collection_a[i].key);
        }
    }
    
    
    
    for (let i in collection_a) {
        for (let j in sameElements) {
            if (collection_a[i].key === sameElements[j]  && collection_a[i].count >= 3) {
                collection_a[i].count  -= Math.floor(collection_a[i].count/3);
            }
        }
    }
    result = collection_a;
    
    return result;
    
}


module.exports = create_updated_collection;
