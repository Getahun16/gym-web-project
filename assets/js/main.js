const calculateForm=document.getElementById('calculate-form');
const calculateCm=document.getElementById('calculate-cm');
const calculateKg=document.getElementById('calculate-kg');
const calculateMessage=document.getElementById('calculate-message');


const calculateBmi =(e)=>{
    e.preventDefault()
    if(calculateCm.value ==='' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent='Fill in the height and weight 👩‍💻'

        setTimeout(()=>{
            calculateMessage.textContent = ''
        },3000)
    }
    else{
        const cm=calculateCm.value /100,
              kg=calculateKg.value,
              bmi=Math.round(kg/ (cm* cm))


              if(bmi< 18.5){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI IS ${bmi} and you are skinny🙆‍♂️`
              }
              else if(bmi<25){
                 calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI IS ${bmi} and you are Healthy 😂`
              }
              else{
                 calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI IS ${bmi} and you are overweight🧐`
              }
              calculateCm.value=''
              calculateKg.value=''

              setTimeout(()=>{
                calculateMessage.textContent=''
              },4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const sr=ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2500 ,
  delay:400,
})
sr.reveal(`.home__data `)
sr.reveal(`.home__img`,{delay:700,origin:'bottom'})
sr.reveal(`.logos__img , .program__card, .pricing__card ,.coach__card ,.schedule__data`,{interval:100})

sr.reveal(`.choose__img, .calculate__content `,{origin:'left'})
sr.reveal(`.choose__content, .calculate__img`,{origin:'right'})