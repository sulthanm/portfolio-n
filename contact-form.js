
const scriptURL = 'https://script.google.com/macros/s/AKfycbz5_zRyci9izL_c7e1aUTfcVA7JYEYavcDJfg8zIO63RDEBquQQK8BJEGfthbWzAAp-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfullt, Thank You."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
 