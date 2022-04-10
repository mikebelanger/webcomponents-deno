class CustomCanvas extends HTMLElement {
    static get observedAttributes() {
        return ["backgroundcolor"]
    }
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        let canvas = document.createElement('canvas')
        canvas.id = "main_canvas"
        var context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "chartreuse"
            context?.fillRect(0, 0, 500, 1000)
            shadow.append(canvas)    
        }
    }

    attributeChangedCallback(name: string, old_val: string, new_val: string) {
        let shadow = this.shadowRoot;
        shadow?.childNodes.forEach((cn) => {
            if (cn.nodeName === "CANVAS") {
                let c = cn as HTMLCanvasElement;
                let context = c.getContext("2d");
                if (context) {
                    context.fillStyle = new_val;
                    context.fillRect(0, 0, 500, 1000);
                }
            }
        });
    }
}

export default CustomCanvas