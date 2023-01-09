const rating = document.querySelector('.rating__box')
const endBox = document.querySelector('.thanks__box')
const ratingBtn = document.querySelectorAll('.btn')
const submitBtn = document.querySelector('.submit__btn')
const rate = document.getElementById('rate')
const ratingMsg = document.querySelector('.rating__box p')




const showModal = () => {
      if(rate.textContent == ''){
            ratingMsg.textContent = 'We would appreciate your opinion :)'
            ratingMsg.style.color = 'red'
            return
        }
  
    endBox.classList.toggle('hidden')
    rating.classList.toggle('hidden')
}

ratingBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    rate.textContent = btn.innerHTML
        
        console.log(rate)    
    })
})


 



submitBtn.addEventListener('click', showModal)