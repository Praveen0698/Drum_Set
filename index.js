const btn = document.querySelectorAll('.drum');
for (let tap of btn) {
  tap.addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
    }); 

 
  }
     
  window.addEventListener('keypress', function (e) {
    makeSound(e.key);
   animation(e.key);
   });



function animation (applied) {
  const apply = document.querySelector("." + applied)
  apply.classList.add("pressed");

  setTimeout(() => {
    apply.classList.remove("pressed");
  },200)
}

function makeSound(key) {
    switch(key){
      case 'w':
        var audio = new Audio('crash.mp3');
        audio.play();
        break;
      
      case 'a':
        var audio = new Audio('kick-bass.mp3');
        audio.play();
        break;
      
      case 's':
        var audio = new Audio('snare.mp3');
        audio.play();
        break;
      
      case 'd':
        var audio = new Audio('tom-1.mp3');
        audio.play();
        break;
      
      case 'j':
        var audio = new Audio('tom-2.mp3');
        audio.play();
        break;
      
      case 'k':
        var audio = new Audio('tom-3.mp3');
        audio.play();
        break;
      
      case 'l':
        var audio = new Audio('tom-4.mp3');
        audio.play();
        break;
      
      default:
      
    }
  }
