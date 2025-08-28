const tl=gsap.timeline();
tl.from(".page",{
    opacity:0,
    duration:1.5,
    delay:0.3,
    ease:"sine.inOut"
});
tl.from("button",{
    y:-900,
    duration:0.8,
    ease:"bounce.out"

},"+=0");
tl.from(".pass",{
    y:-900,
    duration:0.8,
    ease:"bounce.out",
    stagger:0.2
},"+=0.1");
tl.from(".gmail",{
    y:-900,
    duration:0.8,
    ease:"bounce.out"
},"+=0.1");
