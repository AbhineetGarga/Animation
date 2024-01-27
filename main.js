var page1Content = document.querySelector(".page1--content")
var curser = document.querySelector("#curser")



function locoScroll(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main-wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main-wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main-wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main-wrapper").style.transform ? "transform" : "fixed"
});


   


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locoScroll()

function curserEffect(){


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

page1Content.addEventListener("mouseenter", function(){
   gsap.to(curser, {
       scale: 1, 
       opacity:1
   })
})

page1Content.addEventListener("mouseleave", function(){
   gsap.to(curser, {
     scale: 0, 
     opacity:0
   })
})
}

curserEffect()


function page2Animation (){
gsap.from(".second h1", {
   y:120,
   stagger: .1,
   duration:3,
   scrollTrigger: {
      trigger:".page2",
      scroller: "#main-wrapper",
      start : "top 47%",
      end : "top 46%",
      // markers : true,
      scrub : 5
   }
})
}

page2Animation()
