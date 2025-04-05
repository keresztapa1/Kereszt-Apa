document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('A termék hozzáadva a kosárhoz!');
    });
});

document.querySelector('.empty-cart').addEventListener('click', () => {
    alert('A kosár kiürítve!');
});

document.querySelector('.checkout').addEventListener('click', () => {
    alert('Tovább a pénztárhoz!');
});
