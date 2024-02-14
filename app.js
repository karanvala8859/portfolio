// text slider animation

const textSlider = () => {
  var typed = new Typed(".skills", {
    strings: ["Frontend Devloper.", "Web Desinger.", "Freelancer."],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });
};
textSlider();


const animation = () => {
  var tl = gsap.timeline()
  
  tl.from("nav h1 ,nav li",{
    y:-80,
    duration:0.6,
    delay:0.8,
    opacity:0,
    stagger:0.3
  })
  
  tl.from(".main-left h2,.main-left .first-text span,.main-left .first-text h1,.main-left span,.main-left p,.main-left .main-btn",{
    y:40,
    duration:0.8,
    opacity:0,
    delay:0.3,
    stagger:0.2
  })
  
  tl.from(".main-right img",{
    duration:0.6,
    opacity:0,
    stagger:0.2,
    scale:0
  })

}
animation();