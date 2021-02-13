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



.row .modalBtn .image {
  width:100%;
}
.row .modalBtn .image img {
  width:100%;
  max-height: 200px;
  border-radius: 10px 10px 0 0;
  transition: 250ms all;
  object-fit: cover;
}
.row .modalBtn .image img:hover {
  opacity: 0.65;
}
.row .modalBtn {
  width:33.333%;
  flex:1;
  margin:10px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  background-color:#fff;
  border-radius: 10px;
}
.row .modalBtn .content {
  padding: 25px;
}

.timcloseBtn{
  color:lightgray;
  float: right;
  font-size:30px;

}

.timcloseBtn:hover,.timcloseBtn:focus{
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@keyframes modalopen{
  from{opacity:0}
  to{opacity: 1}
}





      <button class="modalBtn" href="#modal1">

  
        <div class="image">
          <img src="nathanPic.jpg"/>
        </div>
        <div class="content">
          
          
          <p>Nathan Farrell</p>
        
        </div>
      
      
      </button>
      
      <div id="modal1" class="simpleModal">
      <div class="modal-content">
        <span class="timcloseBtn">x</span>
          <p>
              
              <div class="box">
                <div class="image">
                  <a href="nathan.html"><img src="nathanPic.jpg"/></a>
                </div>
                <div class="content">
                  <h3 class="nathanTitle">Nathan Farrell</h3>
                  <h4 style="text-align:center; color:gray">Project Lead</h4>
                  <h5> I grew up in a small town in Idaho and got attached to video games.</h5>
                </div>
              </div>
          </p>
      
      </div>
      </div>


     

<button class="modalBtn" href="#modal2">

  
    <div class="image">
     <img src="lexi-hero.png" alt="yeet" />
    </div>
    <div class="content">
      
      
      <p>Lexi Chavez</p>
    
    </div>
  
  
  </button>
  
  <div id="modal2" class="simpleModal">
  <div class="modal-content">
    <span class="timcloseBtn">x</span>
      <p>
          
          <div class="box">
            <div class="image">
              <a href="lexi.html"><img src="lexi-hero.png" alt="yeet" /></a>
            </div>
            <div class="content">
              <h3>Lexi Chavez</h3>
              <p>hi yes, I code websites - and I suffer. Web development is my thing and everyday I cry more.</p>
            </div>
          </div>
      </p>
  
  </div>
  </div>


<button class="modalBtn" href="#modal3">

      <div class="image">
       <img src="panda.jpeg"/>
      </div>
      <div class="content">        
        <p>Timothy Cammack</p>
      </div>
  
  </button>
  
  <div id="modal3" class="simpleModal">
  <div class="modal-content">
    <span class="timcloseBtn">x</span>
      <p>
          
          <div class="box">
            <div class="image">
              <a href="tim.html"><img src="panda.jpeg"/></a>
            </div>
            <div class="content">
              <h3>Timothy Cammack</h3>
              <p>I code VR, and I too suffer</p>
            </div>
          </div>
      </p>
  
  </div>
  </div>
  

  <button class="modalBtn" href="#modal4">

    <div class="image">
     <img src="emilysnowboard.png"/>
    </div>
    <div class="content">        
      <p>Timothy Cammack</p>
    </div>

</button>

<div id="modal4" class="simpleModal">
<div class="modal-content">
  <span class="timcloseBtn">x</span>
    <p>
        
        <div class="box">
          <div class="image">
            <a href="emily.html"><img src="emilysnowboard.png"/></a>
          </div>
          <div class="content">
            <h3>Emily Mead</h3>
            <p>I code VR, and I too suffer</p>
          </div>
        </div>
    </p>

</div>
</div>



  
  
  <button class="modalBtn" href="#modal5">

  
    <div class="image">
      <img src="IMG_0917 copy.png">
    </div>
    <div class="content">
      
      
      <p>Carlos Campa</p>
    
    </div>
  
  
  </button>
  
  <div id="modal5" class="simpleModal">
  <div class="modal-content">
    <span class="timcloseBtn">x</span>
      <p>
          
          <div class="box">
            <div class="image">
              <a href="carlos.html"><img src="IMG_0917 copy.png"></a>
              <p>Carlos Campa</p>
            </div>
            <div class="content">
              <p>Hello I design 3d models and animate them. I like reading sci fi and fantasy books.</p>
            </div>
          </div>
      </p>
  
  </div>
  </div>


      
      <a href="style.html"><div class="spongeBobImage">
        
      </div></a>
    </div>
    <footer>
      <p><a href="https://www.youtube.com/watch?v=2q82bGtujFA&t=8s" target="_blank">&copy;2021 Washed Ashore Trolls</a></p>
    </footer>
    <script src="main.js"></script>


*/