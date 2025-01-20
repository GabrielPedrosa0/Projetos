const checkbox = document.getElementById('iestr')
const lista = document.getElementById('iest')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        lista.style.display = 'none';
    } else {
        lista.style.display = 'block'
    }
})