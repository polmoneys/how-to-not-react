import Observer from '../../engine/observer';
import AppState from '../../interface/AppState';

class Counter extends Observer {
    selector: string;
    constructor() {
        super();
        this.selector = '';
    }

    markUp(state: AppState) {
        return `<p class="center column font-fluid">
        ${state.clicks}
    </p>`;
    }

    render(state: AppState, selector: string) {
        this.selector = selector;
        const markup = this.markUp(state);
        const parent = document.getElementById(selector);
        if (parent !== null) {
            parent.innerHTML = markup;
        }
    }

    // This method will be called by the Subject(state) whenever it updates.
    update(state: AppState) {
        this.render(state, this.selector);
    }
}

export default Counter;
