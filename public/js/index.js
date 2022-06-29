let navbar=document.querySelector('.navbar')
let navlist=document.querySelector('.nav-list')
let rightnav=document.querySelector('.rightnav')
document.getElementById('bur').addEventListener('click',()=>{
        navlist.classList.toggle('v-resp')
        rightnav.classList.toggle('v-resp')
        navbar.classList.toggle('h-resp')
})