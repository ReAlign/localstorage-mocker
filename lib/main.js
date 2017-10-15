let defaultStore = {
    length: 0
};

class LocalStorageMocker {
    constructor() {
        this.store = defaultStore;
    }

    clear() {
        this.store = defaultStore;
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
        if(this.getItem(key) != null) {
            this.store.length += 1;
        }
    }

    removeItem(key) {
        delete this.store[key];
        if(this.getItem(key) != null && this.store.length) {
            this.store.length -= 1;
        }
    }
};

Object.defineProperty(window, 'localStorage', {
    value: new LocalStorageMocker
});