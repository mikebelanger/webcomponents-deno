const tagpair = (tag_name: string, inner: string) => {
  return `<${tag_name}>${inner}</${tag_name}>`;
}

const li = (li: string) => {
  return tagpair('li', li);
}

const ul = (li: string) => {
  return `<ul>${li}</ul>`;
}

type ListState = {
  items: string[];
}

class WebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["history"]
  }

  state: ListState;

  constructor() {
    super();
    this.state = {
      items: [],
    };
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = ul('');
    this.update();
  }

  update() {
    this.render();
  }

  render() {
    if (this.shadowRoot?.innerHTML) {
      const updated = this.shadowRoot.innerHTML = ul(
        this.state.items.map((i: string) => {
          return li(i);
        }).join('')
      );
    }
  }

  attributeChangedCallback(name: string, old_val: string, new_val: string) {
    if (new_val) {
      this.state.items.push(new_val);
      this.update();  
    }
  }
}

export default WebComponent