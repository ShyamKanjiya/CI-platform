﻿function recommendStory(storyId, views) {    views = views + 1;    var recUsersList = [];    $('.modal-body input[type="checkbox"]:checked').each(function () {        recUsersList.push($(this).attr("id"));    });        $("#divLoader").removeClass('d-none');    $('#modal-content').addClass('d-none');    if (recUsersList.length != 0) {        $.ajax({            type: 'POST',            url: '/Story/RecommandToCoworker',            data: { "sId": storyId, "userIds": recUsersList, "totalViews": views },            success: function () {                $("#divLoader").addClass('d-none');                $('#modal-content').removeClass('d-none');                Swal.fire({                    title: 'Success!',                    html: 'Story sent succesfully.',                    timer: 2000,                    didOpen: () => {                        Swal.showLoading()                        const b = Swal.getHtmlContainer().querySelector('b')                        timerInterval = setInterval(() => {                            b.textContent = Swal.getTimerLeft()                        }, 100)                    },                    willClose: () => {                        clearInterval(timerInterval)                    }                });                $('#exampleModal').modal('hide');            },            error: function () {                $("#divLoader").addClass('d-none');                console.log('error');            },        });    }    else {        $('#divLoader').addClass('d-none');        $('#modal-content').removeClass('d-none');        Swal.fire({            title: 'Alert',            html: 'Select at least one user!',            timer: 3000,            didOpen: () => {                Swal.showLoading()                const b = Swal.getHtmlContainer().querySelector('b')                timerInterval = setInterval(() => {                    b.textContent = Swal.getTimerLeft()                }, 100)            },            willClose: () => {                clearInterval(timerInterval)            }        })    }}