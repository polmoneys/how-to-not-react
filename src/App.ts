import Store from './engine/Store';
import initialState from './initialState';
import Slugs from './interface/Slugs';
import UserList from './ui/lists/UserList';
import AddUser from './ui/forms/AddUser';
import Counter from './ui/forms/Counter';
import OnClick from './ui/utils/OnClick';
import Box from './ui/utils/Box';

const App = (() => {
    let pages: Record<string, any> = {};

    pages.render = (page: Slugs) => {
        if (['landing', 'project'].includes(page)) {
            // init()
            const STORE = new Store();
            const LIST = new UserList();
            const FORM = new AddUser(STORE);
            const COUNTER = new Counter();

            // update STORE with initial users & clicks
            STORE.update({ ...initialState });

            // const app = document.querySelector<HTMLDivElement>('#app')!;
            LIST.render(STORE.get(), 'list-container');
            FORM.render('form-container');
            COUNTER.render(STORE.get(), 'counter-container');

            // Add the observers
            STORE.addObserver(LIST);
            STORE.addObserver(COUNTER);

            // update STORE
            const nextUsers = [...initialState.users, { id: 4, name: 'Billie' }];
            setTimeout(() => STORE.update({ users: nextUsers }), 2000);

            // Creates a 'box' for a value
            const clicks = new Box(0);
            // Adds onChange to the 'box'
            clicks.addListener((value) => {
                STORE.update({ ...STORE.get(), clicks: value });
            });

            const BUTTON = new OnClick('#test-button', () => clicks.set(2));
            // fyi we can BUTTON.destroy()
        }
        if (page === 'fourofour') {
            console.log('not found');
        }
    };

    return pages;
})();

export default App;
