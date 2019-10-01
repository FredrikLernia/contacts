// window.addEventListener('click', e => console.log(e))
// console.log(window)

class Table {

  constructor() {
    this.headings = ['Namn', 'E-post', 'Telefon']
    this.createTable()
    this.appendContacts()
  }

  createTable() {
    this.outerEl = document.createElement('div')
    this.outerEl.setAttribute('class', 'table-div')

    const headingDiv = document.createElement('div')
    headingDiv.setAttribute('class', 'table-div-heading')

    const contactsSymbol = document.createElement('i')
    contactsSymbol.setAttribute('class', 'far fa-address-card')

    const h3 = document.createElement('h3')
    h3.innerText = 'Kontakter'

    headingDiv.append(contactsSymbol)
    headingDiv.append(h3)
    this.outerEl.append(headingDiv)

    this.table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')

    const ths = this.headings.map(heading => {
      const th = document.createElement('th')
      th.innerText = heading

      return th
    })

    ths.forEach(th => tr.append(th))
    thead.append(tr)
    this.table.append(thead)

    this.outerEl.append(this.table)
  }

  appendContacts() {
    const tbody = document.createElement('tbody')

    let contacts = JSON.parse(localStorage.contacts)

    contacts = contacts.map(({ name, email, telephone }) => {
      const tr = document.createElement('tr')

      const tdName = document.createElement('td')
      tdName.innerText = name

      const tdEmail = document.createElement('td')
      tdEmail.innerText = email[0]

      const tdTelephone = document.createElement('td')
      tdTelephone.innerText = telephone[0]

      tr.append(tdName)
      tr.append(tdEmail)
      tr.append(tdTelephone)

      tbody.append(tr)
    })

    this.table.append(tbody)    
  }

}

/* const table = new Table()

document.querySelector('body').append(table.outerEl) */