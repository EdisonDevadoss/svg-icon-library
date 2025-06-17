import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { css } from 'lit';

import { icons } from '../../config/constants';
import { BaseElement } from '../../base';

@customElement('icon-viewer')
export class IconViewer extends BaseElement {
    
  static override styles = [
    ...super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
        background-color: rgb(226 232 240); /* bg-slate-200 */
      }

      .toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1e293b;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      .toast.show {
        opacity: 1;
      }
    `
  ];
    
  @state() private searchQuery = '';
  // @state() private selectedIcon: { name: string; svg: string } | null = null;
  @state() private toastMessage = '';
  @state() private showToast = false;

  private get filteredIcons() {
    const filltedArray = Object.entries(icons)
      .filter(([name]) =>
        name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .map(([name, svg]) => ({ name, svg }));
    return [
      ...filltedArray
    ];
  }

  private handleIconClick(icon: { name: string; svg: string }) {
    // this.selectedIcon = icon;
    this.copySvg(icon.name);
  }

  private showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  private copySvg(svgName: string) {
    if (svgName) {
      navigator.clipboard.writeText(svgName);
      this.showToastMessage(`Copied "${svgName}" to clipboard`);
    }
  }

  override render() {
    return html`
      <div class="w-full flex flex-col p-8 max-w-7xl mx-auto">
        <h3 class="text-2xl font-bold mb-8">Icon Viewer</h3>
        <div class="mb-8">
          <input
            type="text"
            class="w-full px-3 py-2 text-base border-2 border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
            placeholder="Search icons..."
            .value=${this.searchQuery}
            @input=${(e: Event) =>
              (this.searchQuery = (e.target as HTMLInputElement).value)}
          />
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          ${this.filteredIcons.map(
            (icon) => html`
              <div
                class="border-2 border-slate-200 rounded-lg p-4 flex flex-col items-center gap-4 cursor-pointer transition-all hover:border-blue-400 hover:shadow-lg bg-white"
                @click=${() => this.handleIconClick(icon)}
              >
                <div class="w-12 h-12 flex items-center justify-center">
                  ${unsafeHTML(icon.svg)}
                </div>
                <span class="text-sm text-slate-500">${icon.name}</span>
              </div>
            `
          )}
        </div>

        <div class="toast ${this.showToast ? 'show' : ''}">
          ${this.toastMessage}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-viewer': IconViewer;
  }
}