class CountryHeader extends HTMLElement {
  async connectedCallback() {
    const h2 = document.createElement('h2')
    h2.textContent = this.getAttribute('name')

    const icon = document.createElement('span')
    icon.classList.add('icon')
    icon.textContent = this.getAttribute('icon')
    h2.prepend(icon)

    this.append(h2)
  }
}

window.customElements.define('country-header', CountryHeader)
