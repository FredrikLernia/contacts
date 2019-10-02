class Contacts extends App {

  constructor() {
    super()
    this.tableHeadings = ['Namn', 'E-post', 'Telefon', '']
    this.createTable()
  }

  createTable() {
    const contactsSection = this.createEl('div', 'main', {'class': 'contacts-section', 'data-instance-id': this.instanceId})
    const table = this.createEl('table', contactsSection)
    const thead = this.createEl('thead', table)
    const tr = this.createEl('tr', thead)
    this.tableHeadings.forEach(tableHeading => {
      const th = this.createEl('th', tr)
      th.innerText = tableHeading
    })
    const tbody = this.createEl('tbody', table)
    
  }

}

new Contacts()