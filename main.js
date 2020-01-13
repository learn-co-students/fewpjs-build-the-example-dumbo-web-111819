// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', (e) => {
  let error = document.getElementById("modal")
  error.className = "hidden"

  let likes = document.querySelectorAll(".like")
  
  likes.forEach((like) => {
    like.addEventListener("click", (e) => {
      if(e.target.className === "like-glyph"){
        if(e.target.innerText === EMPTY_HEART){
          mimicServerCall()
            .then(function() {
              e.target.innerText = FULL_HEART
              e.target.className = "activated-heart"
            })
            .catch(
              function(promise){
                error.className = ""
                error.innerText = promise
                setTimeout(function(){error.className = "hidden"}, 5000)
              }
            )
          }
      } else {
          e.target.innerText = EMPTY_HEART
          e.target.className = "like-glyph"
      }
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
