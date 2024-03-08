function imgslider(anthing){
    document.querySelector('.starbucks').src = anthing;
  }
function changeCircleColor(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color;
} 

let btn = document.querySelector("button")

window.onscroll = function(){
    if (window.scrollY >= 1400){
        btn.style.display="block"
    }else{
        btn.style.display="none"
    }
}
btn.onclick= function(){
window.scrollTo({
  left: 0,
  top:0,
  behavoir:"smooth"
})

}