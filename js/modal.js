const modal = document.querySelector(".modal")
const openModalButton = document.querySelector(".open-modal-button")
const closeModalButton = document.querySelector(".modal-head img")

openModalButton.addEventListener('click', () => {
    openModal()
})   

closeModalButton.addEventListener('click', () => {
    closeModal()
})

const openModal = () => {
    modal.style.display = 'block'
}

const closeModal = () => {
    modal.style.display = 'none'
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})
