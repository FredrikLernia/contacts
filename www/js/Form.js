class Form extends App {

  constructor(inputSections) {
    super()
    this.inputSections = inputSections
    /* this.inputFields = [
      { label: 'Namn', type: 'text, id: 'name' },
      { label: 'Epost', type: 'text', id: 'email' },
      { label: 'Telefon', type: 'text', id: 'telephone' }
    ] */
    /* this.inputSections = [
      { label: 'Namn', id: 'name', inputs: [{ type: 'text', className: 'name-input', id: 'name' }] },
      { label: 'Epost', id: 'email', inputs: [{ type: 'text', className: 'email-input', id: 'email' }, { type: 'text', class: 'email-input', id: 'email2' }] },
      { label: 'Telefon', id: 'telephone', inputs: [{ type: 'text', className: 'telephone-input', id: 'telephone' }] }
    ] */
    this.createSection()
  }

  createSection() {
    const formSection = this.createEl('div', 'div.form', { 'class': 'form-section', 'data-instance-id': this.instanceId })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header' })
    this.createEl('i', formHeader, { 'class': 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = 'Lägg till kontakt'

    /* this.inputFields.forEach(({ label, type, id }) => {
      const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
      this.createEl('label', inputSection, { 'for': id }).innerText = label
      this.createEl('input', inputSection, { type, id })

      if (id === 'email' || id === 'telephone') this.createEl('i', inputSection, { 'class': 'fas fa-plus-circle' })
    }) */

    this.inputSections.forEach(({ label, id, inputs }) => {
      const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
      this.createEl('label', inputSection, { 'for': id }).innerText = label
      inputs.forEach(({ type, className, id }) => this.createEl('input', inputSection, { type, 'class': className, id }))

      if (id === 'email' || id === 'telephone') this.createEl('i', inputSection, { 'class': 'fas fa-plus-circle add-input-field', id })
    })

    const inputSection = this.createEl('div', formSection, { 'class': 'input-section' })
    this.createEl('button', inputSection, { 'class': 'save-contact' }).innerHTML = '<i class="far fa-save"></i> Spara'
  }

}