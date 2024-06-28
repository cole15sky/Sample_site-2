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

//  =====================Update active navigation =====================
function updateActiveNavLink() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.sidebar a'); // Selecting nav links from the sidebar

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50; // Adjusted offset for better accuracy
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', updateActiveNavLink);

// Initial call to update active navigation link on page load
updateActiveNavLink();






