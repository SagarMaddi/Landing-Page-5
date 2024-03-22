
var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imagecontainer",{
        ease: Expo.easeInOut,
        width: "100%",
        duration: 2,
        stagger: 2
},"a")
.to(".text h1",{
        ease:Expo.easeInOut,
        stagger: 2,
        top: 0
},"a")
.to(".text h1",{
        delay:2,
        ease:Expo.easeInOut,
        stagger: 2,
        top: "-100%"
},"a")


















// gsap.to(".imagecontainer",{
//     ease: Expo.easeInOut,
//     width: "100%",
//     duration: 2,
//     stagger: 2
// })
// gsap.to(".text h1",{
//     ease:Expo.easeInOut,
//     stagger: 2,
//     top: 0
// })
// gsap.to(".text h1",{
//     delay:2,
//     ease:Expo.easeInOut,
//     stagger: 2,
//     top: "-100%"
// })











// gsap.to("#one",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2
// })