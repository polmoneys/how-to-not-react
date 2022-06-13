import AppState from '../../interface/AppState';
import Observer from '../../engine/Observer';
import User from '../../interface/User';

class List extends Observer {
    selector: string;

    constructor() {
        super();
        this.selector = '';
    }
    markUp(state: AppState) {
        return `<ul>
    ${state?.users?.map((user: User) => `<li>${user.name}</li>`).join('\n')}
    </ul>`;
    }

    render(state: AppState = {}, selector: string) {
        this.selector = selector;
        const markup = this.markUp(state);
        const parent = document.getElementById(selector);
        if (parent !== null) {
            parent.innerHTML = markup;
        }
    }

    // onUpdate will Subject(state)
    update(state: AppState) {
        this.render(state, this.selector);
    }
}

export default List;
