//Load Data into Doc
$(document).ready(function () {
    loadData();
});

//Load Data Into Function
function loadData() {
    $.ajax({
        url: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.BookingId + '</td>';
                html += '<td>' + item.booking_date + '</td>';
                html += '<td>' + item.car_make + '</td>';
                html += '<td>' + item.car_model + '</td>';
                html += '<td>' + item.car_colour + '</td>';
                html += '<td>' + item.user_email + '</td>';
                html += '<td>' + item.user_name + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.BookingID + ')">Edit</a> | <a href ="#" onclick = "Delete(' + item.BookingID + ')">Delete</a></td>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }

    });
}

function Add() {
    var who  = validate();
    if (who === false) {
        return false;
    }
    var bookingObj = {
        BookingId: $('#BookingID').val(),
        booking_date: $('#booking_date').val(),
        car_make: $('#car_make').val(),
        car_model: $('#car_model').val(),
        car_colour: $('#car_colour').val(),
        user_email: $('#user_email').val(),
        user_name: $('#user_name').val()
    };
    $.ajax({
        url: "/Home/Add",
        data: JSON.stringify(bookingObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            loadData();
            $('#myModal'), modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    //GET DATA VIA ID
    function getbyID(booking)
    {
        $('#BookingID').css('border-color', 'lightgrey');
        $('#booking_date').css('border-color', 'lightgrey');
        $('#car_make').css('border-color', 'lightgrey');
        $('#car_model').css('border-color', 'lightgrey');
        $('#car_colour').css('border-color', 'lightgrey');
        $('#user_email').css('border-color', 'lightgrey');
        $('#user_name').css('border-color', 'lightgrey');

        $.ajax({

        });

    }
    //FUNCTION: UPDATE RECORDS
    function Update()
    {
        var bookingObj = {
            BookingID: $('#BookingID').val(),
            car_make: $('#car_make').val(),
            car_model: $('#car_model').val(),
            car_colour: $('#car_colour').val(),
            user_email: $('#user_email').val(),
            user_name: $('#user_name').val()
        };
        $.ajax({
            url: "/Home/Update",
            data: JSON.stringify(bookingObj),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                $('#mModal').modal('hide');
                $('#BookingID').val("");
                $('#car_make').val("");
                $('#car_model').val("");
                $('#car_colour').val("");
                $('#user_email').val("");
                $('#user_name').val("");
            }, error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }

    //FUNCTION: DELETE RECORDS
    function Delete(ID) {
        var check = confirm("Are you Sure you want to delete this record?");
        if (check) {
            $.ajax({
                url: "/Home/Delete/" + ID,
                type: "POST",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                    loadData();
                },
                error: function (errormessage) {
                    alert(errormessage.responseText);
                }
            });
        }
    }


    //FUNCTION: CLEAR TEXT BOXES
    function clearTextBox() {
        $('#BookingID').val("");
        $('#car_make').val("");
        $('#car_model').val("");
        $('#car_colour').val("");
        $('#user_email').val("");
        $('#user_name').val("");
        $('#btnUpdate').hide();
        $('#btnAdd').show();

        $('#booking_date').css('border-color', 'lightgrey');
        $('#car_make').css('border-color', 'lightgrey');
        $('#car_model').css('border-color', 'lightgrey');
        $('#car_colour').css('border-color', 'lightgrey');
        $('#user_email').css('border-color', 'lightgrey');
        $('#user_name').css('border-color', 'lightgrey');
    }

    //JQUERY VALIDATION
    function validate() {
        var isValid = true;
        if ($('#booking_date').val().trim() === "") {
            $('#booking_date').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#booking_date').css('border-color', 'lightgrey');
        }
        if ($('#car_make').val().trim() === "") {
            $('#car_make').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#car_make').css('border-color', 'lightgrey');
        }
        if ($('#car_model').val().trim() === "") {
            $('#car_model').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#car_model').css('border-color', 'lightgrey');
        }
        if ($('#car_colour').val().trim() === "") {
            $('#car_colour').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#car_colour').css('border-color', 'lightgrey');
        }
        if ($('#user_email').val().trim() === "") {
            $('#user_email').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#user_email').css('border-color', 'lightgrey');
        }
        if ($('#user_name').val().trim() === "") {
            $('#user_name').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#user_name').css('border-color', 'lightgrey');
        }
        return isValid;
    }


}