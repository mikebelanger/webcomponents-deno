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
    connectedCallback() {
        let observer = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.addedNodes.length) {
                    var context = this.getCanvasContext();
                    mutation.addedNodes.forEach((an)=>{
                        if (context) {
                            context.fillStyle = "blue";
                            context.fillRect(0, 0, 500, 1000);
                            context.fillStyle = "black";
                            context.fillText(an.textContent ?? "", 200, 50);
                        }
                    });
                }
            });
        });
        observer.observe(this, {
            childList: true,
            attributes: true,
            subtree: true
        });
    }
    getCanvasContext() {
        let shadow = this.shadowRoot;
        let c = undefined;
        shadow?.childNodes.forEach((cn)=>{
            if (cn.nodeName === "CANVAS") {
                let canvas = cn;
                c = canvas.getContext("2d");
            }
        });
        return c;
    }
    attributeChangedCallback(name, old_val, new_val) {
        let shadow = this.shadowRoot;
        if (name === "backgroundcolor") {
            shadow?.childNodes.forEach((cn1)=>{
                if (cn1.nodeName === "CANVAS") {
                    let c = cn1;
                    let context = c.getContext("2d");
                    if (context) {
                        context.fillStyle = new_val;
                        context.fillRect(0, 0, 500, 1000);
                        context.fillStyle = "black";
                        context.font = '25px serif';
                        this.childNodes.forEach((cn)=>{
                            if (cn.nodeName === "DIV") {
                                context?.fillText(cn.textContent || "NA", 50, 50);
                            }
                        });
                    }
                }
            });
        }
    }
}
class BasicTemplateExample extends HTMLElement {
    constructor(){
        super();
        let template = document.getElementById('basic-template-example');
        let templateContent = template?.content;
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        if (templateContent) {
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
}
customElements.define('web-component', WebComponent);
customElements.define('another-component', AnotherComponent);
customElements.define('custom-canvas', CustomCanvas);
customElements.define('basic-template-example', BasicTemplateExample);
