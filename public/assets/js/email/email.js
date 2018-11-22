$(function ($) {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        let subject = $('#inputName')[0].value;
        let recipient = $('#inputEmail')[0].value;
        let htmlBody = $('#inputMessage').val().replace(/\n/g,'<br/>');
        let action = 'Web Contact Form';

        if(!subject || !recipient || !htmlBody) {
            // alertify.alert('Please check your entries')
            //     .setHeader('');
        }
        else {
            subject = 'Message to Hui Teng by: ' + $('#inputName')[0].value;
            let data = {
                subject: subject,
                recipient: 'huiteng1995@gmail.com',
                htmlBody: htmlBody,
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

            // alertify.alert('Your message is successfully sent!')
            //     .setHeader('');
        }
    });
});