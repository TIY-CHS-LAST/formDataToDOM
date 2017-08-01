

// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// const inputs = [];
//
// // lets get all the inputs out of the formData
//
// for (let i = 0; i < formData.length; i++) {
//   const isInput = formData[i].type === 'text'
//      || formData[i].type === 'tel'
//      || formData[i].type === 'email';
//
//    if(isInput) {
//         inputs.push(formData[i])
//    }
// }
//
// const textareas = [];
//
// for (let i = 0; i < formData.length; i++) {
//   const isTextArea = formData[i].type === 'textarea';
//
//    if(isTextArea) {
//         textareas.push(formData[i])
//    }
// }
//
// const selects = [];
//
// for (let i = 0; i < formData.length; i++) {
//   const isSelect = formData[i].type === 'select';
//
//    if(isSelect) {
//         selects.push(formData[i])
//    }
// }
//
//
// console.log('inputs', inputs);
// console.log('textareas', textareas);
// console.log('selects', selects);
//
// function makeEl (tagName) {
//   return document.createElement(tagName)
// }
//
// // <div>
// //   <label for="name">my label</label>
// //   <input id="name" name="name" type="text || email || tel">
// // </div>
//
//
// function makeLabel (label, id) {
//   const labelEl = makeEl('label')
//   labelEl.setAttribute('for', id)
//   labelEl.textContent = label
//   return labelEl
// }
//
// function makeInput (formObj) {
//   const div = makeEl('div')
//   const input = makeEl('input')
//   const inputLabel = makeLabel(formObj.label, formObj.id)
//
//   input.setAttribute('type', formObj.type)
//   input.setAttribute('id', formObj.id)
//   input.setAttribute('name', formObj.id)
//
//   div.append(inputLabel, input)
//
//   return div;
//
// }
//
// const formDom = document.querySelector('#fields')
// for(let i = 0; i < inputs.length; i++) {
//   let currInput = makeInput(inputs[i])
//   formDom.appendChild(currInput)
// }
//
//
//
//
//
//
//
// function makeTextArea () {}
// function makeSelect () {}




















// -------- Your Code Goes Below this Line --------
(function () {
  const inputs = formData.filter((item) => item.type !== 'textarea' || item.type !== 'select')
  const textareas = formData.filter((item) => item.type === 'textarea')
  const selects = formData.filter((item) => item.type === 'select')
  const frag = createEl('div')

  for (let i = 0; i < inputs.length; i++) {
    frag.appendChild(makeInput(inputs[i]))
  }

  textareas.forEach(item => {
    frag.appendChild(makeTextArea(item))
  })
  selects.forEach(item => {
    frag.appendChild(makeSelect(item))
  })
  const form = document.getElementById('fields')
  form.appendChild(frag)

})()

function createEl (element) {
  return document.createElement(element)
}
function createText (txt) {
  return document.createTextNode(txt)
}

function makeLabel (label, id) {
  const labelEl = createEl('label')
  const txt = createText(label)
  labelEl.appendChild(txt)
  labelEl.setAttribute('for', id)
  return labelEl
}

function makeInput ({type, label, id}) {
  const div = createEl('div')
  const labelInput = makeLabel(label, id)
  const input = createEl('input')
  input.setAttribute('type', type)
  input.setAttribute('id', id)
  div.append(labelInput, input)
  return div
}

function makeTextArea ({type, label, id}) {
  const div = createEl('div')
  const labelInput = makeLabel(label, id)
  const textarea = createEl('textarea')
  textarea.setAttribute('type', type)
  textarea.setAttribute('id', id)
  div.append(labelInput, textarea)
  return div
}

function makeSelect ({type, label, id, options}) {
  const div = createEl('div')
  const labelInput = makeLabel(label, id)
  const select = createEl('select')

  const optFrag = document.createDocumentFragment()
  options.forEach(el => {
    const option = createEl('option')
    const txt = createText(el.label)
    option.setAttribute('value', el.value)
    option.appendChild(txt)
    optFrag.appendChild(option)
  })
  select.appendChild(optFrag)
  select.setAttribute('type', type)
  select.setAttribute('id', id)
  div.append(labelInput, select)
  return div
}
