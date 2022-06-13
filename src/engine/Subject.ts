import AppState from '../interface/AppState';
import Observers, { Observer } from '../interface/Observer';

class Subject {
    observers: Observers;

    constructor() {
        this.observers = [];
    }

    addObserver(observer: Observer) {
        this.observers = [...this.observers, observer];
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter((obs) => observer !== obs);
    }

    // onUpdate STORE
    notify(data: AppState) {
        if (this.observers.length > 0) {
            this.observers.forEach((observer) => observer.update(data));
        }
    }
}

export default Subject;
