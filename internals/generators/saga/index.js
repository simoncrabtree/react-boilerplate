/**
 * Container Generator
 */

// const componentExists = require('../utils/componentExists');
const fs = require('fs')
const path = require('path')

function sagaExists (sagaName) {
  try {
    fs.accessSync(path.join(__dirname, `../../../app/sagas/${sagaName}/index.js`), fs.F_OK)
    return true
  } catch (e) {
    return false
  }
}

module.exports = {
  description: 'Add a saga',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'getData',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return sagaExists(value) ? 'A component or container with this name already exists' : true
      }

      return 'The name is required'
    }
  }],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../../app/sagas/{{ name }}/index.js',
      templateFile: './saga/index.js.hbs',
      abortOnFail: true
    }
    // {
    //   type: 'add',
    //   path: '../../app/containers/{{properCase name}}/tests/index.test.js',
    //   templateFile: './container/test.js.hbs',
    //   abortOnFail: true
    // }
    ]

    return actions
  }
}
