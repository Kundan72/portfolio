const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// EmailJs

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     emailjs.sendForm('service_59hfxla', 'template_e25xjmy', this)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Your message has been sent.',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//         }, function(error) {
//             console.log('FAILED...', error);
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'There was an error sending your message. Please try again later.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         });
// });
