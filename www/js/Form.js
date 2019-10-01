class Form {

  static submit = () => {
    let data = {
      name: document.querySelector('input#name').value,
      email: [document.querySelector('input#email').value],
      telephone: [document.querySelector('input#telephone').value]
    }

    try {
      let contacts = JSON.parse(localStorage.contacts)
      contacts.push(data)
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    catch(e) {
      localStorage.setItem('contacts', JSON.stringify([data]))
    }
  }

  constructor() {
    this.inputsData = [
      {
        label: 'Namn',
        type: 'text',
        id: 'name'
      },
      {
        label: 'E-post',
        type: 'text',
        id: 'email'
      },
      {
        label: 'Telefon',
        type: 'text',
        id: 'telephone'
      },
    ]

    this.createForm()
  }

  createForm() {
    this.outerEl = document.createElement('div')
    this.outerEl.setAttribute('class', 'form-div')

    const headingDiv = document.createElement('div')
    headingDiv.setAttribute('class', 'form-div-heading')

    const addContactSymbol = document.createElement('i')
    addContactSymbol.setAttribute('class', 'fas fa-user-plus')

    const h3 = document.createElement('h3')
    h3.innerText = 'Lägg till kontakt'

    headingDiv.append(addContactSymbol)
    headingDiv.append(h3)
    this.outerEl.append(headingDiv)

    const inputs = this.inputsData.map(({ label, type, id }) => {
      const divEl = document.createElement('div')
      divEl.setAttribute('class', 'input-section')

      const labelEl = document.createElement('label')
      labelEl.setAttribute('for', id)
      labelEl.innerText = label

      const inputEl = document.createElement('input')
      inputEl.setAttribute('type', type)
      inputEl.setAttribute('id', id)

      divEl.append(labelEl)
      divEl.append(inputEl)

      return divEl
    })

    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'input-section')

    const submitButton = document.createElement('button')
    submitButton.setAttribute('onclick', 'Form.submit()')
    submitButton.innerText = 'Spara'

    const saveSymbol = document.createElement('i')
    saveSymbol.setAttribute('class', 'far fa-save')
    submitButton.prepend(saveSymbol)

    divEl.append(submitButton)

    inputs.forEach(input => this.outerEl.append(input))

    this.outerEl.append(divEl)
  }

}

/* const form = new Form()

document.querySelector('body').append(form.outerEl) */