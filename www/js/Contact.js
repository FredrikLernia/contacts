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

    this.createEl('p', contactSection, { 'class': 'info-text' }).innerText = `Klicka på en tidigare/senare version för att ändra kontaktuppgifterna eller på "Uppdatera" för att skapa en ny.`

    // Small devices
    const contactSmall = this.createEl('div', contactSection, { 'class': 'contact-small' })

    contact.versions.forEach((version, i) => {
      const { name, email, telephone, added } = version

      const versionDiv = this.createEl('div', contactSmall, { 'class': contact.chosenVersion === i ? 'selected-version version-info clearfix' : 'version-info clearfix' })

      const dateDiv = this.createEl('h3', versionDiv)
      dateDiv.innerHTML = `<u>${new Date(added).toLocaleDateString('sv-SE', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</u>`
      if (contact.chosenVersion === i) this.createEl('i', dateDiv, { 'class': 'fas fa-check check' })
      else this.createEl('i', dateDiv, { 'class': 'fas fa-arrow-left choose', 'id': `${this.id}-${i}` })

      this.createEl('p', versionDiv, { 'class': 'info-div' }).innerHTML = `<i class="fas fa-user"></i> ${name}`

      if (email.length) {
        const emailDiv = this.createEl('div', versionDiv, { 'class': 'info-div' })
        this.createEl('p', emailDiv, { 'class': 'info-heading' }).innerHTML = '<i class="fas fa-envelope"></i> <strong>E-post</strong>'
        email.forEach(email => {
          this.createEl('p', emailDiv).innerText = email
        })
      }

      if (telephone.length) {
        const telephoneDiv = this.createEl('div', versionDiv, { 'class': 'info-div' })
        this.createEl('p', telephoneDiv, { 'class': 'info-heading' }).innerHTML = '<i class="fas fa-phone"></i> <strong>Telefon</strong>'
        telephone.forEach(telephone => {
          this.createEl('p', telephoneDiv).innerText = telephone
        })
      }

      this.createEl('hr', contactSmall)
    })

    // Large devices
    const table = this.createEl('table', contactSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)
    contact.versions.forEach((version, i) => {
      const { name, email, telephone, added } = version
      const tr = this.createEl('tr', tbody, { 'class': contact.chosenVersion === i ? 'selected-version' : 'change-version', 'id': `${this.id}-${i}` })
      this.createEl('td', tr).innerText = new Date(added).toLocaleDateString('sv-SE', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
      this.createEl('td', tr).innerText = name
      this.createEl('td', tr).innerText = email.join('\n')
      this.createEl('td', tr).innerText = telephone.join('\n')
      const checkTd = this.createEl('td', tr)
      if (contact.chosenVersion === i) this.createEl('i', checkTd, { 'class': 'fas fa-check' })
    })

    this.createEl('hr', contactSection, { 'class': 'large-view' })

    const backDiv = this.createEl('div', contactSection, { 'class': 'go-back' })
    this.createEl('i', backDiv, { 'class': 'far fa-arrow-alt-circle-left' })
    this.createEl('span', backDiv).innerText = ' Tillbaka'
  }

}