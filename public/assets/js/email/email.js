$(function ($) {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        let name = $('#inputName')[0].value;
        let email = $('#inputEmail')[0].value;
        let message = $('#inputMessage').val().replace(/\n/g,'<br/>');
        let action = 'Web Contact Form';

        if(!name || !email || !message) {
            alertify.alert('Please check your entries')
                .setHeader('');
        }
        else {
            let data = {
                name: name,
                email: email,
                message: message,
                action: action
            };

            JSON.stringify(data);

            $.ajax({
                url: "https://portfolio-htl-email-api.herokuapp.com/api/sendEmail",
                method: "POST",
                data: data,
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            });

            $(this).get(0).reset();

            alertify.alert('Your message is successfully sent!')
                .setHeader('');
        }
    });
});