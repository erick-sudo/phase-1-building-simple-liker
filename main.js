// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

    let likebtns = document.querySelectorAll(".like-glyph")
    likebtns.forEach(likeHandler)
})

function likeHandler(glyph) {
  glyph.addEventListener('click', likeCallback)
}

function toggleHeart(like) {
  if(like.textContent === EMPTY_HEART) {
    like.textContent = FULL_HEART
    like.classList.add("activated-heart")
  } else {
    like.textContent = EMPTY_HEART
    like.classList.remove("activated-heart")
  }
}

function likeCallback(event) {
  mimicServerCall()
  .then(response => {
    toggleHeart(event.target)
  })
  .catch(error => {
    const modal = document.querySelector("#modal")
    modal.classList.remove("hidden")
    document.querySelector("#modal p").textContent = "Like Rejected"
    setTimeout(()=> {
      modal.classList.add("hidden")
    }, 3000)
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
