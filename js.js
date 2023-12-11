const container =document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click',function(e){

    // cek apakah yang di-klik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },250);

        thumbs.forEach(function(e){
            e.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});