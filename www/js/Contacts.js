class Contacts extends App {

  constructor() {
    super()
    this.tableHeadings = ['Namn', 'E-post', 'Telefon', '']
    this.createTable()
  }

  createTable() {
    const contactsSection = this.createEl('div', 'main', { 'class': 'contacts-section', 'data-instance-id': this.instanceId })

    const table = this.createEl('table', contactsSection)

    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => this.createEl('th', tr).innerText = tableHeading)

    const tbody = this.createEl('tbody', table)
    const contacts = this.loadContacts()
    if (typeof contacts === 'string') {
      const emptyContacts = this.createEl('p', contactsSection, { 'class': 'empty-contacts' })
      emptyContacts.innerText = contacts
    }
    else contacts.forEach(({ id, name, email, telephone }) => {
      const tr = this.createEl('tr', tbody)

      this.createEl('td', tr).innerText = name
      this.createEl('td', tr).innerText = email.join('\n')
      this.createEl('td', tr).innerText = telephone.join('\n')
      this.createEl('td', tr).innerHTML = `<i class="fas fa-user-times" id="${id}"></i>`
    })
  }

}

new Contacts()