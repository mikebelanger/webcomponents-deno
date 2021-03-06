class WebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["history"]
  }

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'})

    let elem = document.createElement("ul")
    shadow.append(elem);
  }

  attributeChangedCallback(name: string, old_val: string, new_val: string) {
    let elem = document.createElement("li")
    elem.textContent = new_val;
    this.shadowRoot?.append(elem)
  }
}

export default WebComponent