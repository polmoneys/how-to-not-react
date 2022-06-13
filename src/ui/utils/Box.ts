import Subscribers from '../../interface/Subscriber';
import ObjectLike from '../../interface/ObjectLike';

type Fun = (...args: any[]) => any;

/*
    A Box stores a value and providessetters and getters
*/

class Box {
    state: ObjectLike | number;
    subscribers: Subscribers;

    constructor(initial: ObjectLike | number) {
        this.state = initial;
        this.subscribers = [];
    }

    get() {
        return this.state;
    }

    addListener(fn: Fun) {
        this.subscribers = [...this.subscribers, fn];
    }

    set(newValue: ObjectLike | number) {
        this.state = newValue;
        this.subscribers.forEach((fn) => fn(newValue));
    }
}

export default Box;
