'use strict';

function choose_multiples_of_three(collection) {
    return collection.filter((e) => {
        return e % 3 === 0;
    });
}

module.exports = choose_multiples_of_three;
