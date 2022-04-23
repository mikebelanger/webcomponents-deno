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

    connectedCallback() {
        let observer = new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach((mutation: MutationRecord) => {
                if (mutation.addedNodes.length) {
                    var context = this.getCanvasContext();
                    mutation.addedNodes.forEach((an) => {
                        if (context) {
                            context.fillStyle = "blue"
                            context.fillRect(0, 0, 500, 1000);
                            context.fillStyle = "black";
                            context.fillText(an.textContent ?? "", 200, 50)
                        }
                    })            
                }
            })
        })

        observer.observe(this, { childList: true, attributes: true, subtree: true })
    }

    getCanvasContext(): CanvasRenderingContext2D | undefined {
        let shadow = this.shadowRoot;
        let c = undefined;
        shadow?.childNodes.forEach((cn: ChildNode) => {
            if (cn.nodeName === "CANVAS") {
                let canvas = cn as HTMLCanvasElement
                c = canvas.getContext("2d")
            }
        });
        return c
    }

    attributeChangedCallback(name: string, old_val: string, new_val: string) {
        let shadow = this.shadowRoot;
        
        if (name === "backgroundcolor") {
            shadow?.childNodes.forEach((cn: ChildNode) => {
                if (cn.nodeName === "CANVAS") {
                    let c = cn as HTMLCanvasElement;
                    let context = c.getContext("2d");
                    if (context) {
                        context.fillStyle = new_val;
                        context.fillRect(0, 0, 500, 1000);
                        context.fillStyle = "black"
                        context.font = '25px serif';
                        this.childNodes.forEach((cn: ChildNode) => {
                            if (cn.nodeName === "DIV") {
                                context?.fillText(cn.textContent || "NA", 50, 50)
                            }
                        })                
                    }
                }
            });    
        }
    }
}

export default CustomCanvas