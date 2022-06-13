import AppState from '../../interface/AppState';

class AddUser {
    appState: AppState;

    constructor(state: AppState = {}) {
        this.appState = state;
    }

    markUp() {
        return `
        <form id="add-user" class="column">
            <label for="username">Add name</label>
            <input id="username" type="text" name="name">
            <button type="submit" class="-icon column center">
            <svg viewBox="0 0 24 24" fill="var(--black)"><path  d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></svg>
            </button>
        </form>
    `;
    }

    render(selector = 'app') {
        const markup = this.markUp();
        const parent = document.getElementById(selector);
        if (parent !== null) {
            parent.innerHTML = markup;
        }
        this.addListeners();
    }

    addListeners() {
        const form = document.getElementById('add-user');
        if (form !== null) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // TODO: fix type
                const el = e.target as any;
                const { value: name } = el.name;

                if (!name) {
                    return;
                }

                const state = this.appState.get();

                const users = [...state.users, { id: state.users.length++, name }];
                el.name.value = '';
                // used at Subject::notify
                this.appState.update({
                    ...state,
                    users,
                });
            });
        }
    }
}

export default AddUser;
