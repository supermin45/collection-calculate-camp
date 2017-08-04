function collect_same_elements(collection_a, object_b) {
     let result = new Array();
    
    for (let i in collection_a) {
        if (object_b.value.toString().indexOf(collection_a[i].toString()) > -1) {
            result.push(collection_a[i]);
        }
    }
    return result;
}

module.exports = collect_same_elements;
