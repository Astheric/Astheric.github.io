//toggle class active
const pertemuan = document.querySelector('.pertemuan');
//ketika icon di klik
document.querySelector('#icon-button').onclick = () => {
      pertemuan.classList.toggle('active');
};

//klik diluar sidebar untuk nonaktif nav
const icon = document.querySelector('#icon-button');

document.addEventListener('click',function(e){
      if(!icon.contains(e.target) && !pertemuan.contains(e.target))     
      {pertemuan.classList.remove('active');}
});