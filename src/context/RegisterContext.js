import React from 'react'

const RegisterContext = React.createContext({
  input: '',
  selectedTopic: 'Arts and Culture',
  isRegister: false,
  changeName: () => {},
  changeSelectValue: () => {},
  displayError: () => {},
  topicValue: () => {},
})

export default RegisterContext
