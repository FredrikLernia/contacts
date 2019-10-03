class Form extends App {

  constructor(inputSections) {
    super()
    this.inputSections = inputSections
    this.createSection()
  }

  createSection() {
    const formSection = this.createEl('div', 'div.form', { 'class': 'form-section' })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header' })
    this.createEl('i', formHeader, { 'class': 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = 'Lägg till kontakt'

    this.inputSections.forEach(({ label, id, inputs }) => {
      const inputSection = this.createEl('div', formSection, { 'class': 'input-section', id: `input-section-${id}` })
      this.createEl('label', inputSection, { 'for': id }).innerText = label
      inputs.forEach(({ type, className, id, value }) => this.createEl('input', inputSection, { type, 'class': className, id, value }))

      if (id === 'email' || id === 'telephone') this.createEl('i', inputSection, { 'class': 'fas fa-plus-circle add-input-field', id })
    })

    const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
    this.createEl('button', inputSection, { 'class': 'save-contact' }).innerHTML = '<i class="far fa-save"></i> Spara'
  }

}