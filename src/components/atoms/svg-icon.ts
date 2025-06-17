import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { icons } from '../../config/constants';
import { BaseElement } from '../../base';

@customElement('svg-icon')
export class SvgIcon extends BaseElement {
  @property({ type: String }) name: string = '';
  @property({ type: String }) size: string = 'md';
  @property({ type: String }) color: string = 'text-current';
  @property({ type: Number }) rotation: number = 0;
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) override title: string = ''; // TODO: add title to the icon 
  @property({ type: String }) background: string = 'bg-transparent';
  @property({ type: String }) rounded: string = 'rounded-none';
  @property({ type: String }) borderColor: string = 'border-transparent';
  @property({ type: String }) borderWidth: string = 'border-2';


    @state() sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    xxl: 'w-12 h-12',
    xxxl: 'w-14 h-14',
    xxxxl: 'w-16 h-16',
  }

  @state() colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
  }


  private injectSizeIntoSvg(svg: string): string {
    const svgWithoutSize = svg.replace(
      /\s+(transform|class|width|height)="[^"]*"/g,
      ''
    );
    const color = this.colors[this.color as keyof typeof this.colors] || this.color
    const size = this.sizes[this.size as keyof typeof this.sizes] || this.size

    const combinedCss = `${color} ${size}`

    const newSvg = svgWithoutSize.replace(
          /<svg([^>]*)>/,
          `<svg$1
          class="${combinedCss}" fill="currentColor"
          style="transform: rotate(${this.rotation}deg);"
          >`
        );

    return newSvg;
  }

  override render() {
    const svg = icons[this.name as keyof typeof icons];

    return html`<span
      class="w-fit h-fit flex items-center justify-center p-2 ${this.background} ${this.rounded} ${this.borderColor} ${this.borderWidth}"
      title=${this.title}
      ?disabled=${this.disabled}
      >${unsafeHTML(this.injectSizeIntoSvg(svg))}</span
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'svg-icon': SvgIcon;
  }
}