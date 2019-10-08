class Contact extends App {

  constructor(id) {
    super()
    this.id = id
    this.tableHeadings = ['Ändrad', 'Namn', 'E-post', 'Telefon', '']
    this.createSection()
  }

  createSection() {
    const contact = contacts.find(contact => contact.id === +this.id)

    const contactSection = this.createEl('div', 'div.contact', { 'class': 'contact-section' })

    const contactHeader = this.createEl('div', contactSection, { 'class': 'contact-header clearfix' })
    this.createEl('i', contactHeader, { 'class': 'far fa-address-card' })
    this.createEl('h3', contactHeader).innerText = contact.versions[contact.chosenVersion].name
    this.createEl('button', contactHeader, { 'class': 'update-contact', id: this.id }).innerText = 'Uppdatera'
    
    this.createEl('p', contactSection).innerText = `Klicka på en tidigare/senare version för att ändra kontaktuppgifterna eller på "Uppdatera" för att skapa en ny.`

    const table = this.createEl('table', contactSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)
    contact.versions.forEach((versions, i) => {
      const { name, email, telephone, added } = versions
      const tr = this.createEl('tr', tbody, { 'class': contact.chosenVersion === i ? 'selected-version' : 'change-version', 'id': `${this.id}-${i}` })
      this.createEl('td', tr).innerText = new Date(added).toLocaleDateString('sv-SE', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
      this.createEl('td', tr).innerText = name
      this.createEl('td', tr).innerText = email.join('\n')
      this.createEl('td', tr).innerText = telephone.join('\n')
      const checkTd = this.createEl('td', tr)
      if (contact.chosenVersion === i) this.createEl('i', checkTd, { 'class': 'fas fa-check' })
    })
  }

}