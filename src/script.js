function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}

function hidesidebar() {

    const sidebar = document.querySelector('.sidebar')
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





// =================TimeDisplay===========

let time = document.getElementById(`current-time`);

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();

}, 1000)


//  =====================Gallery-Section =====================

// document.addEventListener("DOMContentLoaded", function() {
//     const stickySection = document.querySelectorAll('.sticky');
//     const images = [
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//         'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
//     ];

//     images.forEach(img => {
//         stickySection.forEach(section => {
//             const image = document.createElement('img');
//             image.src = img;
//             section.querySelector('.scroll-section').appendChild(image);
//         });
//     });

//     window.addEventListener('scroll', () => {
//         stickySection.forEach(section => {
//             transform(section);
//         });
//     });

//     function transform(section) {
//         const offsetTop = section.parentElement.offsetTop;
//         const scrollSection = section.querySelector('.scroll-section');
//         let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
//         percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
//         scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
//     }
// });





