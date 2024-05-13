var myEach = function(collection, callback) {
    for(let key in collection) {
        callback(collection[key]);
    };
    return collection;
}

var myMap = function(collection, callback){
    let newCollection = [];
    for(let key in collection) {
        newCollection.push(callback(collection[key]));
    };
    return newCollection;
}

var myReduce = function(collection, callback, acc){
    for(let key in collection) {
        if (acc === undefined) {
            acc = collection[key];
        } else {
            acc = callback(acc, collection[key], collection);
        }
    };
    return acc;
}

var myFind = function(collection, predicate) {
    for(let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

var myFilter = function(collection, predicate) {
    let newCollection = []
    for(let key in collection) {
        if (predicate(collection[key])) {
            newCollection.push(collection[key]);
        }
    }
    return newCollection;
}

var mySize = function(collection) {
    let iterator = 0;
    for(let key in collection) {
        iterator++
    }
    return iterator;
}

var myFirst = function(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        let newArray = [];
        for(let i = 0; i < n; i++) {
            //can also be implemented by slice
            newArray.push(array[i]);
        }
        return newArray;
    }
}

var myLast = function(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        let newArray = [];
        for(let i = array.length - n; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}

var mySortBy = function(array, callback) {
    let newArray = [];
    for(let key in array) {
        newArray.push(array[key]);
    };
    newArray.sort((a, b) => {
        a = callback(a);
        b = callback(b);
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return newArray
}

var myFlatten = function(array, shallow=false, newArr=[]) {
    for (let i = 0; i < array.length; i++) {
        // have to check shallow's current status if item being processed is an array itself
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], shallow, newArr);
        } else if (Array.isArray(array[i]) && shallow) {
            newArr.push(...array[i]);
        } else {
            // otherwise it is ready to be pushed
            newArr.push(array[i]);
        }
    }
    return newArr
}

var myKeys = function(object) {
    //return Object.keys(object);
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

var myValues = function(object) {
    //return Object.values(object);
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}
