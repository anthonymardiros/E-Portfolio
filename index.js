let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
}

async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_qz78xuj',
            'template_nph7yji',
            event.target,
            'Ih3ds9B0C04WpQCPc'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly at tonychrism@gmail.com"
            );
        })
}

// or

// async function contact(event) {
//     event.preventDefault();
//     await emailjs
//         .sendForm(
//             'service_qz78xuj',
//             'template_nph7yji',
//             event.target,
//             'Ih3ds9B0C04WpQCPc'
//         )
// }

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal__open');
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}