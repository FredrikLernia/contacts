class Form extends App {

  constructor() {
    super()
    this.inputFields = [
      { label: 'Namn', type: 'text', id: 'name' },
      { label: 'Epost', type: 'text', id: 'email' },
      { label: 'Telefon', type: 'text', id: 'telephone' },
    ]
    this.createSection()
  }

  createSection() {
    const formSection = this.createEl('div', 'main', { 'class': 'form-section', 'data-instance-id': this.instanceId })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header' })
    this.createEl('i', formHeader, { 'class': 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = 'Lägg till kontakt'

    this.inputFields.forEach(({ label, type, id }) => {
      const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
      this.createEl('label', inputSection, { 'for': id }).innerText = label
      this.createEl('input', inputSection, { type, id })
    })

    const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
    this.createEl('button', inputSection, { 'class': 'save-button' }).innerHTML = '<i class="far fa-save"></i> Spara'
  }

}