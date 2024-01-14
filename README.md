This is for begginer and simple way How to add menu on index java script.
some impotant elements had shown by this repository.

how to create sticky  header

    
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background-color: transparent;
    padding: 20px 10%;
    position: fixed;
    width: 100%;
/*      ------------use z-index/top/right for new elements----------- */
    z-index: 1000;
    top: 0;
    right: 0;
    transition: all 0.50s ease;
    
}
/* this is for sticky elements use on js  */
header.sticky{
    background: transparent;
    backdrop-filter: blur(48px);
    padding: 10px 10%;
}
  

<script>
const head = document.querySelector("header");

window.addEventListener("scroll", function(){

    head.classList.toggle("sticky", window.scrollY >60 )
});
  
</script>

how to create sticky on menu by using JS
<body>
 <div class="follow">
            <!-- this is for menu  -->
            <div class="bx bx-menu" id="menu"></div>
        </div>
</body>
        <style>
         #menu{
        display: none;    
        @media only screen and (max-width: 800px){
           #menu{
        display: block;
    }
    /* important part of menu/navbar/.navbar.open this elements used on js  */
    .navbar{
        position: absolute;
        width: 100%;
        height: 90vh;
        padding: 30px 40px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: -10px;
        background-color: var(--bg-color);
        opacity: 0.9;
    }
    .navbar a{
        font-size: 1.2rem;
        display: block;
        margin-bottom: 30px;
        padding: 5px 15px;
        border-radius: 8px;  
    }
    .navbar.open{
        left: 0;
    }
}
  </style>
  <script>
  // this is for menu option 
let menu = document.querySelector("#menu");
let nav = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}
//If remove menu icon 
menu.onclick = () => {
    menu.removeList.toggle('bx-x');
    nav.removeList.toggle('open');
}
    
  </script>

      
        
