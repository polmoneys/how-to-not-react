import AppState from '../interface/AppState';
import Subject from './Subject';

class State extends Subject {
    state: AppState;

    constructor() {
        super();
        this.state = {};
    }

    get() {
        return this.state;
    }

    update(data: AppState = {}) {
        this.state = { ...this.state, ...data };
        this.notify(this.state);
    }
}

export default State;
