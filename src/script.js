function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    
}

function hidesidebar(){
    
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    
}

function darkMode() {
    const body = document.body;
    const moonIcon = document.querySelector('.moon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        moonIcon.src = '/img/sun.svg'; 
    } else {
        moonIcon.src = '/img/moon.svg'; 
    }
}