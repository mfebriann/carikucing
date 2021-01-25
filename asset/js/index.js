const checkbox = document.querySelector('.check');
const navigation = document.querySelector('nav ul');

checkbox.addEventListener('click', function() {
    navigation.classList.toggle('show');
})