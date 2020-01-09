// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeButton = document.querySelectorAll('.like')

let errorDiv = document.querySelector('#modal')
errorDiv.classList.add('hidden')

likeButton.forEach(button => {
  button.addEventListener('click', (e)=>{
  let heart = button.querySelector('span')
  mimicServerCall()
    .then(resp => {
      if(errorDiv.className !== 'hidden'){
        errorDiv.className = 'hidden'
      }
      if(heart.className === 'like-glyph activated-heart'){
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }else{
        heart.textContent = FULL_HEART
        heart.classList.add('activated-heart')
      }
    })
    .catch(error => {
      errorDiv.classList.remove('hidden');
      errorDiv.textContent = `${error}`
      window.setTimeout((e)=>{
        errorDiv.classList.add('hidden')
      }, 3000)
    })
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
