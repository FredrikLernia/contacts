class Form extends App {

  constructor(id = '') {
    super()
    this.id = id
    this.createSection()
  }

  createSection() {
    let contact
    if (this.id) {
      contact = contacts.find(contact => contact.id === +this.id)
      contact = contact.versions[contact.chosenVersion]
    }

    const formSection = this.createEl('div', 'div.form', { 'class': 'form-section' })

    const formHeader = this.createEl('div', formSection, { 'class': 'form-header clearfix' })
    this.createEl('i', formHeader, { 'class': this.id ? 'far fa-edit' : 'fas fa-user-plus' })
    this.createEl('h3', formHeader).innerText = this.id ? 'Uppdatera kontakt' : 'Lägg till kontakt'
    if (this.id) this.createEl('i', formHeader, { 'class': 'exit-form fas fa-times' })

    const nameInputSection = this.createEl('div', formSection, { 'class': 'input-section', id: 'input-section-name' })
    this.createEl('label', nameInputSection, { 'for': 'name-input' }).innerText = 'Namn'
    this.createEl('input', nameInputSection, { type: 'text', 'class': 'name-input', id: 'name-input', value: contact ? contact.name : '' })

    const emailInputSection = this.createEl('div', formSection, { 'class': 'input-section', id: 'input-section-email' })
    this.createEl('label', emailInputSection, { for: 'email-input' }).innerText = 'E-post'
    if (contact) {
      if (contact.email.length) {
        contact.email.forEach((mail, i) => this.createEl('input', emailInputSection, { type: 'text', 'class': 'email-input', id: i ? '' : 'email-input', value: mail }))
      }
      else {
        this.createEl('input', emailInputSection, { type: 'text', 'class': 'email-input', id: 'email-input', value: '' })
      }
    }
    else {
      this.createEl('input', emailInputSection, { type: 'text', 'class': 'email-input', id: 'email-input', value: '' })
    }
    this.createEl('i', formSection, { 'class': 'fas fa-plus-circle add-input-field', id: 'email' })

    const telephoneInputSection = this.createEl('div', formSection, { 'class': 'input-section', id: 'input-section-telephone' })
    this.createEl('label', telephoneInputSection, { 'for': 'telephone-input' }).innerText = 'Telefon'
    if (contact) {
      if (contact.telephone.length) {
        contact.telephone.forEach((nr, i) => this.createEl('input', telephoneInputSection, { type: 'text', 'class': 'telephone-input', id: i ? '' : 'telephone-input', value: nr }))
      }
      else {
        this.createEl('input', telephoneInputSection, { type: 'text', 'class': 'telephone-input', id: 'telephone-input', value: '' })
      }
    }
    else {
      this.createEl('input', telephoneInputSection, { type: 'text', 'class': 'telephone-input', id: 'telephone-input', value: '' })
    }
    this.createEl('i', formSection, { 'class': 'fas fa-plus-circle add-input-field', id: 'telephone' })

    const saveInputSection = this.createEl('div', formSection, { 'class': 'input-section' })
    this.createEl('button', saveInputSection, { 'class': 'save-contact', id: this.id }).innerHTML = '<i class="fas fa-save"></i>Spara'
  }

}