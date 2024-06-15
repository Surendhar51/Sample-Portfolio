var typed = new Typed('#role', {
  strings: ['Enter your skills here by comma(,)'],
  typeSpeed:50,
  backSpeed:50,
  backDelay:50,
  loop:true
});


const scriptURL = 'SCRIPT HERE'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML= "Message sent successfully"
      setTimeout(function(){
          msg.innerHTML= ""
      },4000)
      form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})