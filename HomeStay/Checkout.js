function togglePaymentMethod() {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const hiddenContainer = document.querySelector('.container.hide');

    if (paymentMethodSelect.value === 'internationalCard' || paymentMethodSelect.value === 'domesticCard') {
        hiddenContainer.classList.add('active');
    } else {
        hiddenContainer.classList.remove('active');
    }
}

document.getElementById('search-icon').addEventListener('click', function () {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'flex';
    } else {
        searchBar.style.display = 'none';
    }
});
