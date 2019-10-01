class Form {

  static submit = () => {
    let data = {
      name: document.querySelector('input#name').value,
      email: [document.querySelector('input#email').value],
      telephone: [document.querySelector('input#telephone').value]
    }
    data = JSON.stringify(data)
    localStorage.setItem('user', data)
    console.log(JSON.parse(localStorage['user']))
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
    this.outerElement = document.createElement('div')
    this.outerElement.setAttribute('class', 'form')

    this.inputs = this.inputsData.map(({ label, type, id }) => {
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

    this.submitButton = document.createElement('button')
    this.submitButton.setAttribute('onclick', 'Form.submit()')
    this.submitButton.innerText = 'Spara'

    divEl.append(this.submitButton)

    this.inputs.forEach(input => this.outerElement.append(input))

    this.outerElement.append(divEl)
  }

}

const form = new Form()

document.querySelector('body').append(form.outerElement)