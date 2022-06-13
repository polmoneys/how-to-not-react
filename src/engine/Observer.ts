import AppState from '../interface/AppState';

class Observer {
    // used at Subject::notify
    update(state?: AppState) {}
}

export default Observer;
