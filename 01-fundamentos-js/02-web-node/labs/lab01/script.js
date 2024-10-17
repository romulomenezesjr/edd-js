function processarForm(ev){
  ev.preventDefault()
  const n = nome.value
  const e = email.value
  const m = mensagem.value

  console.log(n, e, m)
}

const form = document.querySelector("meuFormulario")
form.addEventListener("submit", processarForm)