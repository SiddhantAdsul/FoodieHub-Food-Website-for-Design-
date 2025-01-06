document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownBtn.addEventListener('click', function () {
        if (dropdownMenu.style.display ==='block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    })

    dropdownMenu.style.display = 'none';

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            }
        }
    })

})