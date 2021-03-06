// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class AnotherComponent extends HTMLElement {
    static get observedAttributes() {
        return [
            "history"
        ];
    }
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        });
        let elem = document.createElement("div");
        shadow.append(elem);
    }
    attributeChangedCallback(name, old_val, new_val) {
        let elem = document.createElement("li");
        elem.textContent = new_val;
        this.shadowRoot?.append(elem);
    }
}
export { AnotherComponent as default };
