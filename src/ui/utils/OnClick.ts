type Fun = (...args: any[]) => any;

class ClickEvent {
    el: Element | null;
    cb: Fun;
    constructor(selector: string, cb: Fun) {
        this.el = document.querySelector(selector);
        this.cb = cb;
        this.el?.addEventListener('click', (event) => this.handleClick(event));
    }
    handleClick(event: Event) {
        this?.cb(event);
    }
    destroy() {
        this.el?.removeEventListener('click', (event) => this.handleClick(event));
    }
}

export default ClickEvent;
