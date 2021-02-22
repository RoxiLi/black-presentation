var form = document.querySelectorAll('.pageclip-form')
objetivo.innerHTML = form
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<span>Gracias!</span>'
})