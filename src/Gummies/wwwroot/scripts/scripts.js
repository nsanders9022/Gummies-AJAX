$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'Gummies/GummyList',
        success: function (result) {
            $('.gummy-list').html(result)
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
                })
            })
        }
    })
})




    ////DETAILS
    //$('.show-details').click(function () {
    //    console.log(this.id);
    //    var route = '#result-details-' + this.id;
    //    console.log(route);
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        url: 'Gummies/Details/' + this.id,
    //        success: function (result) {
    //            $(route).html(result);
    //        }
    //    });
    //});
    //CREATE
    //$('.show-create').click(function () {
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        url: 'Gummies/Create',
    //        success: function (result) {
    //            $('#result-create').html(result);
    //        }
    //    });
    //});
    //$('.new-gummy').submit(function (event) {
    //    event.preventDefault();
    //    $.ajax({
    //        url: 'Gummies/Create',
    //        type: 'POST',
    //        dataType: 'json',
    //        data: $(this).serialize(),
    //        success: function (result) {
    //            var resultMessage = "Data has been added";
    //            $('#result-add').html(resultMessage);
    //        }
    //    });
    //});
    ////DELETE
    //$('.show-delete').click(function () {
    //    console.log(this.id);
    //    var route = '#result-delete-' + this.id;
    //    console.log(route);
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        url: 'Gummies/Delete/' + this.id,
    //        success: function (result) {
    //            $(route).html(result);
    //        }
    //    });
    //});

    //$('.delete-gummy').click(function () {
    //    var route = '#result-delete-' + this.id;
    //    console.log(this.value);
    //    console.log("inside delete button");
    //    $.ajax({
    //        type: 'POST',
    //        url: 'Gummies/Delete/' + this.value,         
    //        success: function (result) {
    //            $(route).remove();
    //        }
    //    });
    //});

        
    ////EDIT
    //$('.show-edit').click(function () {
    //    console.log(this.id);
    //    var route = '#result-edit-' + this.id;
    //    console.log(route);
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        url: 'Gummies/Edit/' + this.id,
    //        success: function (result) {
    //            $(route).html(result);
    //        }
    //    });
    //});

    //$('.edit-gummy').submit(function (event) {
    //    event.preventDefault();
    //    var route = '#result-edit-' + this.id;
    //    $.ajax({
    //        url: 'Gummies/Edit/' + this.id,
    //        type: 'POST',
    //        dataType: 'json',
    //        data: $(this).serialize(),
    //        success: function (result) {
    //            var resultMessage = "Data has been edited";
    //            $('#result-edit').html(resultMessage);
    //        }
    //    });
    //});

    //$('.gummy-list').ready(function () {
    //    $.ajax({
    //        type: 'GET',
    //        url: 'Gummies/GummyList',
    //        success: function (result) {
    //            $('.all-gummies').html(result)
    //        }
    //    })
    //})
//});