import { html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from './index.css?inline';
import { BaseElement } from './base';
import './components/atoms/svg-icon';
import './components/pages/icon-viewer';

@customElement('my-element')
export class MyElement extends BaseElement {
 
 static override styles = unsafeCSS(style);

  @property({ type: String })
  name = 'World'

  override render() {
    return html`
      <div class="bg-white">
        <h1 class="text-3xl font-bold underline">Hello ${this.name}</h1>
        <icon-viewer></icon-viewer>
        
        <svg-icon 
        name="user" 
        size="xxxl"
        color="text-success" 
        rotation="0"
        background="bg-transparent"
        rounded="rounded-full"
        borderColor="border-success"
        borderWidth="border-4"
         ></svg-icon>
      </div>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
