class Form extends App {

  constructor(inputSections, id = '') {
    super()
    this.inputSections = inputSections
    this.id = id
    this.createSection()
  }

  createSection() {
    const formSection = this.createEl('div', 'div.form', { 'class': 'form-section' })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header clearfix' })
    this.createEl('i', formHeader, { 'class': this.id ? 'far fa-edit' : 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = this.id ? 'Uppdatera kontakt' : 'Lägg till kontakt'
    if (this.id) this.createEl('i', formHeader, { 'class': 'exit-form fas fa-times' })

    this.inputSections.forEach(({ label, id, inputs }) => {
      const inputSection = this.createEl('div', formSection, { 'class': 'input-section', id: `input-section-${id}` })
      this.createEl('label', inputSection, { 'for': id }).innerText = label
      inputs.forEach(({ type, className, id, value }) => this.createEl('input', inputSection, { type, 'class': className, id, value }))

      if (id === 'email' || id === 'telephone') this.createEl('i', inputSection, { 'class': 'fas fa-plus-circle add-input-field', id })
    })

    const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
    this.createEl('button', inputSection, { 'class': 'save-contact', id: this.id }).innerHTML = '<i class="far fa-save"></i> Spara'
  }

}