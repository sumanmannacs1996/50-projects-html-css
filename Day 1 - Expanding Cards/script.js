const panals = document.querySelectorAll('.panal');
console.log(panals);

const remouveAllActiveClasses = () => {
    panals.forEach(panal => {
        panal.classList.remove('active')
    })
}


panals.forEach(panal => {
    panal.addEventListener('click', () => {
        remouveAllActiveClasses()
        panal.classList.add('active')
    })
})