
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('click').checked = false; 
    });
});


const typed = new Typed('.multi-text', {
    strings: [ 'Yashraj Sharma', 'A Designer', 'A Developer', 'A Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// about-me

let skill = document.querySelector(".skill");
let experience = document.querySelector(".experience");
let education = document.querySelector(".education");
let interest = document.querySelector(".interest");

let skillAns = document.querySelector(".skill-ans");
let experienceAns = document.querySelector(".experience-ans");
let educationAns = document.querySelector(".education-ans");
let interestAns = document.querySelector(".interest-ans");

skill.addEventListener("click",()=>{
    skillAns.classList.remove("hide");
    experienceAns.classList.add("hide");
    educationAns.classList.add("hide");
    interestAns.classList.add("hide");
})
experience.addEventListener("click",()=>{
    experienceAns.classList.remove("hide");
    educationAns.classList.add("hide");
    interestAns.classList.add("hide");
    skillAns.classList.add("hide");
    
})
education.addEventListener("click",()=>{
    educationAns.classList.remove("hide");
    interestAns.classList.add("hide");
    skillAns.classList.add("hide");
    experienceAns.classList.add("hide");
})

interest.addEventListener("click",()=>{
    interestAns.classList.remove("hide");
    skillAns.classList.add("hide");
    experienceAns.classList.add("hide");
    educationAns.classList.add("hide");
})
