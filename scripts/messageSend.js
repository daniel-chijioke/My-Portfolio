document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_portfolio';
    const templateID = 'template_5mv2yym';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Message Sent Successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});