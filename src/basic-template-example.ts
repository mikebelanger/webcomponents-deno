export default class BasicTemplateExample extends HTMLElement {
    constructor() {
        super()
        let template: any = document.getElementById('basic-template-example');
        let templateContent = template?.content;
        const shadowRoot = this.attachShadow({mode: 'open'});
        if (templateContent) {
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
}