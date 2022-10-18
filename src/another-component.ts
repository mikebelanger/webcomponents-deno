import { html } from "https://deno.land/x/html/mod.ts";

class AnotherComponent extends HTMLElement {
  static get observedAttributes() {
    return ["history"]
  }

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'})

    let elem = document.createElement('div')
    shadow.append(elem);
  }

  attributeChangedCallback(name: string, old_val: string, new_val: string) {
    let elem = document.createElement('div')
    this.shadowRoot?.append(elem)
  }
}

export default AnotherComponent