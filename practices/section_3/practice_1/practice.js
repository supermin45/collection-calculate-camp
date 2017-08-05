function create_updated_collection(collection_a, object_b) {
     let sameElements = new Array();
            let collectionC = object_b.value.toString();
            for(let i in collection_a){
                if(collectionC.indexOf(collection_a[i].key.toString())>-1){
                    sameElements.push(collection_a[i].key);
                }
            }
            for (let i in collection_a){
            	for (let j in sameElements){
            		if (collection_a[i].key === sameElements[j]) {
            		collection_a[i].count = collection_a[i].count-1;
            	    }  
            	}
            	
            }
            return collection_a;
 }   

module.exports = create_updated_collection;
