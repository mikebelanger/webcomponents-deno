import WebComponent from './web-component.ts';
import AnotherComponent from './another-component.ts';
import CustomCanvas from './custom-canvas.ts';
import BasicTemplateExample from './basic-template-example.ts'

// console.log(Custom)
customElements.define('web-component', WebComponent)
customElements.define('another-component', AnotherComponent)
customElements.define('custom-canvas', CustomCanvas)
customElements.define('basic-template-example', BasicTemplateExample);