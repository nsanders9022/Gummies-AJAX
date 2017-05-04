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
        })
    })
})