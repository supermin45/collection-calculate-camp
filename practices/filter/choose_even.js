'use strict';

function choose_even(collection) {
    return collection.filter((e) => {
        return e % 2 === 0;
    });
}

module.exports = choose_even;
