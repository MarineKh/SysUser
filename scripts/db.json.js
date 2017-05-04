var user1 = [
  [
    { tagName: 'label', name: 'First Name:', 'for': 'inputone' },
    { tagName: 'input', id: 'inputone', accesskey: 'i', autocomplete: 'on', maxlength: '40', tabindex: 1, pattern: '[A-Za-z]{2,}', placeholder: 'Enter your first name...', required: 'required' }
  ],
  [
    { tagName: 'label', name: 'Last Name:', 'for': 'inputtwo' },
    { tagName: 'input', id: 'inputtwo', accesskey: 'i', autocomplete: 'on', maxlength: '40', tabindex: 2, pattern: '[A-Za-z]{2,}', placeholder: 'Enter your Last name...', required: 'required' }
  ],
  [
    { tagName: 'label', name: 'Login Name:', 'for': 'inputthree' },
    { tagName: 'input', id: 'inputthree', accesskey: 'i', autocomplete: 'on', maxlength: '40', tabindex: 3, pattern: '[A-Za-z]{2,}', placeholder: 'Enter your login name...', required: 'required' }
  ],
  [
    { tagName: 'label', name: 'Password:', 'for': 'inputfour' },
    { tagName: 'input', id: 'password', type: 'password', accesskey: 'i', autocomplete: 'on', maxlength: '40', tabindex: 4, pattern: '[A-Za-z]{2,}', placeholder: 'Enter your password...', required: 'required' }
  ],
  [
    { tagName: 'label', name: 'Confirm Pass:', 'for': 'inputfive' },
    { tagName: 'input', id: 'confirm', type: 'password', accesskey: 'i', autocomplete: 'on', maxlength: '40', tabindex: 5, pattern: '[A-Za-z]{2,}', placeholder: 'Confirm your password...', required: 'required' }
  ],
   [
    { tagName: 'label', name: 'Job Title:', 'for': 'optionone' },
    { tagName: 'select', id: 'optionone' }
   ]
];
var user2 = [
  [
    { tagName: 'label', name: 'Gender:', 'class': 'genderLbl' },
    { tagName: 'label', name: 'F', 'class': 'gender', 'for': 'female' },
    { tagName: 'input', id: 'female', name: 'gender', type: 'radio', 'class': 'inputwidth', value: 'female' },
    { tagName: 'label', name: 'M', 'class': 'gender', 'for': 'male' },
    { tagName: 'input', id: 'male', name: 'gender', type: 'radio', 'class': 'inputwidth', value: 'male' }
  ],
  [
    { tagName: 'label', name: 'Profit:', 'class': 'profit_td' },
    { tagName: 'label', name: 'A', 'class': 'profit', 'for': 'a' },
    { tagName: 'input', name: 'profit', type: 'checkbox', 'class': 'a', value: 'a' },
    { tagName: 'label', name: 'B', 'class': 'profitb', 'for': 'b' },
    { tagName: 'input', name: 'profit', type: 'checkbox', 'class': 'b', value: 'b' },
    { tagName: 'label', name: 'C', 'class': 'profitc', 'for': 'c' },
    { tagName: 'input', id: 'c', name: 'profit', type: 'checkbox', 'class': 'inputwidth', value: 'c' }
  ],
  [
    { tagName: 'label', name: 'Teletype:', 'for': 'textarea' },
    { tagName: 'textarea', id: 'textarea',  autofocus: 'off', placeholder: 'Call me ...' }
  ],
  [
    { tagName: 'label', name: 'Country:', 'for': 'CountryId' },
    { tagName: 'input', name: 'CountryId', 'class': 'country_input', title: 'Country', list: 'CountryId', placeholder: 'Select ...' },
    { tagName: 'datalist', id: 'CountryId' }
  ],
  [
    { tagName: 'label', 'class': 'file', title: 'Upload', 'for': 'file' },
    { tagName: 'input', name: 'file', type: 'file', 'class': 'file' }
  ]

]
// var tFoot = [
//   [
//     { tagName:'button', 'class': 'cancelBtn', type: 'reset', 'title': 'Cancel', 'text': 'Cancel' }, 
//     { tagName:'button', 'class': 'saveBtn', type: 'submit', 'title': 'Save', 'text': 'Save' },
//     { tagName:'button', 'class': 'prev', 'title': 'Prev', 'onclick': 'myFunctionTwo()'},
//     { tagName:'button', 'class': 'next' , 'title': 'Next', 'onclick': 'myFunction()' }
//   ]
// ];