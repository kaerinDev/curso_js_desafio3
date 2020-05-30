const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.logo')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    modal.classList.add('active')
})