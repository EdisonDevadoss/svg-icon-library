import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from '../index.css?inline';

@customElement('base-element')
export class BaseElement extends LitElement {
  static override styles = unsafeCSS(style);
}