$(document).ready(function () {
    $('.show-details').click(function () {
        console.log(this.id);
        var route = '#result-details-' + this.id;
        console.log(route);
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: 'Gummies/Details/' + this.id,
            success: function (result) {
                $(route).html(result);
            }
        });
    });
    $('.show-create').click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: 'Gummies/Create',
            success: function (result) {
                $('#result-create').html(result);
            }
        });
    });
    $('.new-gummy').submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: 'Gummies/Create',
            type: 'POST',
            dataType: 'json',
            data: $(this).serialize(),
            success: function (result) {
                var resultMessage = "Data has been added";
                $('#result-add').html(resultMessage);
            }
        });
    });
})