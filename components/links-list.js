class LinksList extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src')
    const response = await fetch(src)
    const items = await response.json()

    const ul = document.createElement('ul')
    for (const item of items) {
      const a = document.createElement('a')
      a.setAttribute('href', item.url)
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noreferrer')
      a.textContent = item.content

      const li = document.createElement('li')
      li.append(a)
      ul.append(li)
    }

    this.append(ul)
    this.classList.add('ready')
  }
}

window.customElements.define('links-list', LinksList)
