var page1Content = document.querySelector(".page1--content")
var curser = document.querySelector("#curser")

//  in normal java script 
// page1Content.addEventListener("mousemove", function(dets){
//     curser.style.left = dets.x+"px"
//     curser.style.top = dets.y+"px"
// })


// now gsap 
page1Content.addEventListener("mousemove", function(dets){
   gsap.to(curser, {
      x:dets.x,
      y: dets.y
   })
})