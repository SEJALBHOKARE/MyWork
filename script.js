function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var cur = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  gsap.to(cur, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out",
  });
});

var cur = document.querySelector(".cursor");
var video = document.querySelector(".vd");
/*
document.addEventListener("mousemove", function (event) {
  cur.style.top = event.clientY + "px";
  cur.style.left = event.clientX + "px";
});*/
/*
document.addEventListener("mouseenter", function (video) {
  cur.style.textContent = "Sound On";
  cur.style.display = "block";
  cur.style.height = "20px";
  cur.style.width = "20px";
  cur.style.borderRadius = "50%";
  cur.style.position = "fixed";
  cur.style.zIndex = "9999";
});
document.addEventListener("mouseleave", function(video) {
  cursor.style.display = "none";
});


*/

gsap.from(".page2 h4", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

var tl = gsap.timeline({
  delay: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "body",
    start: "top 25%",
    scrub: 0.1,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "fast"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "fast"
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "fast"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    scrub: 3,
    start: "top -30%",
    end: "top 120%",
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});
tl2.to(".nav", {
  backgroundColor: "#0F0D0D",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -80%",
    end: "top 300%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});
