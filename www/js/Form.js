class Form extends App {

  constructor() {
    super()
    this.inputFields = [
      { label: 'Namn', type: 'text', id: 'name' },
      { label: 'Epost', type: 'text', id: 'email' },
      { label: 'Telefon', type: 'text', id: 'Telephone' },
    ]
    this.createSection()
  }

  createSection() {
    const formSection = this.createEl('div', 'main', { 'class': 'form-section', 'data-instance-id': this.instanceId })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header' })
    this.createEl('i', formHeader, { 'class': 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = 'Lägg till kontakt'
  }

}