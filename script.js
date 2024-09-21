//for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// for animation of texts
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: 0,
        // opacity: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })

    .from("#mainfooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
        // stagger: .2
    })

}

// jab mouse move ho to hum log skew kar paye aur maximum skew 
// and minimum skew define kar paye, jab mouse move ho to chapta ki value badhe, 
// aur jab mouse move na ho to chapta vapas circle ho jaye.
var timeout;
function cicrleSkew() {
    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX; 
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function (){  
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
    });
    
}

//for mouse follower
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets) {
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleMouseFollower();
firstPageAnim();
cicrleSkew();    

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffront = 0;

    elem.addEventListener("mouseleave", function(dets) {
        
        // var diff = dets.clientY - elem.getBoundingClientRect().top;
        // diffront = dets.clientX - rotate;
        // rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            // left: dets.clientX,
            // rotate: gsap.utils.clamp(-20, 20, diffront * 2),
        });
    });
       
//     elem.addEventListener("mousemove", function(dets) {
        
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         diffront = dets.clientX - rotate;
//         rotate = dets.clientX;
//         // var diffy = dets.clientY - elem.getBoundingClientRect().top;
//         // var diffx = dets.clientx - elem.getBoundingClientRect().left;
//         // const imgWidth=img.offsetWidth / 2;
//         // const imgHeight=img.offsetHeight / 2;
//         //  var diff =  elem.getBoundingClientRect();

//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power3,
//             // top: dets.clientY,
//             // top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20, 20, diffront * 2),

//             // top: diffy - imgHeight,
//             // left: diffx - imgWidth,
//         });
//     });
// });


// document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function(dets) {
        // Get the image inside the element
        const img = elem.querySelector("img");
        diffront = dets.clientX - rotate;
        rotate = dets.clientX;
        // Calculate the Y and X difference based on the mouse position
        const diffY = dets.clientY - elem.getBoundingClientRect().top;
        const diffX = dets.clientX - elem.getBoundingClientRect().left;
        
        // Get the image's width and height for centering
        const imgWidth = img.offsetWidth / 2;
        const imgHeight = img.offsetHeight / 2;

        // Use GSAP to animate the image's position with centering logic
        gsap.to(img, {
            opacity: 1,
            ease: Power1,
            // top: diffY - imgHeight,
            left: diffX - imgWidth,
            rotate: gsap.utils.clamp(-20, 20, diffront * 2),
        });
    });
});


// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mouseleave",function(dets){
//         gsap.to(elem.querySelector("img"), {
//             opacity:0,
//             // diplay:none,
//             ease: Power1,
//             duration:1,
//         });
//     });
// });