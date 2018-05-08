document.querySelector('.sample-form input[type=submit]')
    .addEventListener('click', sendForm);

function sendForm(e) {
    const form = document.querySelector('.sample-form');
    if (form.checkValidity()) {
    e.preventDefault();
    fetch('server/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            planning: document.querySelector('.sample-form input[name=type-of-planning]').value,
            name: document.querySelector('.sample-form input[name=name]').value,
            email: document.querySelector('.sample-form input[name=email]').value,
            Phone: document.querySelector('.sample-form input[name=number]').value,
            date: document.querySelector('.sample-form input[name=date]').value,
            guests: document.querySelector('.sample-form input[name=number-of-guests]').value,
            service: document.querySelector('.sample-form input[name=what-services-are-you-interested-in]').value,
            budget: document.querySelector('.sample-form input[name=budget]').value,
            
        })
    });
    }
    
}