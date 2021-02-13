var modals = document.querySelectorAll('.simpleModal');

var modalBtn = document.querySelectorAll('button.modalBtn');

var spans = document.getElementsByClassName('timcloseBtn');

for (var i = 0; i < modalBtn.length; i++) {
    modalBtn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}


for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
       for (var index in modals) {
         if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
       }
    }
   }

   window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


/*
modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}


function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }

}
*/