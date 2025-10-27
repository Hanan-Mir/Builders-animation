gsap.registerPlugin(ScrollTrigger)
const navbar=document.querySelector('#navbar')
const navbarLogo=document.querySelector('.navbar-logo')

let hasScrolled=false;
window.addEventListener('scroll',()=>{
    const scrollY=window.scrollY;
    console.log(scrollY)
    if(scrollY>50 && !hasScrolled){
        hasScrolled=true;
        gsap.to(navbar,{
            y:0,
            duration:0.7,
            ease:'power3.out'
        })
    }
    else if(scrollY<=50 && hasScrolled){
        hasScrolled=false;
        gsap.to(navbar,{
            y:'-100%',
            duration:0.6,
            ease:'power2.in'
        })
    }
})
ScrollTrigger.create({
    trigger:'body',
    start:'top top',
    end:'680px top',
    scrub:1,
    onUpdate:(self)=>{
        const progress=self.progress;
        const scale=1-(progress*0.8);
        const translateX=progress *-48;
        const translateY=progress*-50;
        gsap.to('.logo',{
            scale:scale,
            x:`${translateX}%`,
            y:`${translateY}%`,
            duration:0.1
        })
        if(progress >0.95){
            gsap.to('.logo',{opacity:0,duration:0.2});
            gsap.to(navbarLogo,{opacity:1,duration:0.3})
        }else{
            gsap.to('.logo',{opacity:1,duration:0.2})
            gsap.to(navbarLogo,{opacity:0,duration:0.2})
        }
    }
})