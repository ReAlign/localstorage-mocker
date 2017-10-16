// let defaultStore = {
//     length: 0
// };

// let getKeyMap = (data) => {
//     let map = {};
//     let count = 0;

//     for(let q in data) {
//         if(data.hasOwnProperty(q) && q != 'length') {
//             map[count] = q;
//             count += 1;
//         }
//     }

//     return map;
// };

// class LocalStorageMocker {
//     constructor() {
//         this.store = defaultStore;
//     }

//     clear() {
//         this.store = defaultStore;
//     }

//     key(num) {
//         if(num < 0 || num >= this.store.length) {
//             return null;
//         } else {
//             let keyMap = getKeyMap(this.store);
//             return keyMap[num] || null;
//         }
//     }

//     getItem(key) {
//         return this.store[key] || null;
//     }

//     setItem(key, value) {
//         this.store[key] = value.toString();
//         if(this.getItem(key) != null) {
//             this.store.length += 1;
//         }
//     }

//     removeItem(key) {
//         delete this.store[key];
//         if(this.getItem(key) != null && this.store.length) {
//             this.store.length -= 1;
//         }
//     }
// };

// Object.defineProperty(window, 'localStorage', {
//     value: new LocalStorageMocker
// });

/**
 * Change the way to achieve
 * Compatible with the length attribute and the key method
 */

let localStorageMock = (function () {
    var storage = {};

    return {
        setItem: function (key, value) {
            storage[key] = value || '';
        },
        getItem: function (key) {
            return storage[key] || null;
        },
        removeItem: function (key) {
            delete storage[key];
        },
        clear: function () {
            storage = {};
        },
        get length() {
            return Object.keys(storage).length;
        },
        key: function (i) {
            var keys = Object.keys(storage);
            return keys[i] || null;
        }
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});