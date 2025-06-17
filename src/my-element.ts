import { html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from './index.css?inline';
import { BaseElement } from './base';
import './components/atoms/svg-icon';
import './components/pages/icon-viewer';

@customElement('my-element')
export class MyElement extends BaseElement {
 
 static override styles = [
  ...super.styles,
  unsafeCSS(style)
 ];

  @property({ type: String })
  name = 'World'

  override render() {
    return html`
      <div class="bg-white">
        <h1 class="text-3xl font-bold underline">Hello ${this.name}</h1>
        <svg-icon 
        name="down-arrow" 
        size="xxxl"
        color="text-success" 
        rotation="0"
        background="bg-transparent"
        rounded="rounded-full"
        borderColor="border-danger"
        borderWidth="border-4"
         ></svg-icon>
        <icon-viewer></icon-viewer>
        
      </div>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
