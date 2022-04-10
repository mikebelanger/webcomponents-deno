// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class WebComponent extends HTMLElement {
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
        let elem = document.createElement("ul");
        shadow.append(elem);
    }
    attributeChangedCallback(name, old_val, new_val) {
        let elem = document.createElement("li");
        elem.textContent = new_val;
        this.shadowRoot?.append(elem);
    }
}
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
class CustomCanvas extends HTMLElement {
    static get observedAttributes() {
        return [
            "backgroundcolor"
        ];
    }
    constructor(){
        super();
        let shadow = this.attachShadow({
            mode: 'open'
        });
        let canvas = document.createElement('canvas');
        canvas.id = "main_canvas";
        var context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "chartreuse";
            context?.fillRect(0, 0, 500, 1000);
            shadow.append(canvas);
        }
    }
    attributeChangedCallback(name, old_val, new_val) {
        let shadow = this.shadowRoot;
        shadow?.childNodes.forEach((cn)=>{
            if (cn.nodeName === "CANVAS") {
                let c = cn;
                let context = c.getContext("2d");
                if (context) {
                    context.fillStyle = new_val;
                    context.fillRect(0, 0, 500, 1000);
                }
            }
        });
        if (name === "backgroundcolor") {
            let c = shadow?.getElementById("main_canvas");
            c?.setAttribute('backgroundColor', new_val);
            if (c) {
                shadow?.appendChild(c);
            }
        }
    }
}
customElements.define('web-component', WebComponent);
customElements.define('another-component', AnotherComponent);
customElements.define('custom-canvas', CustomCanvas);
