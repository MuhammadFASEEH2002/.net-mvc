﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.onload = function () {

    document.getElementById("button").addEventListener("click", () => {
        alert("I am clicked");
    });
//    let tablerow = '';
//    fetch('../../js/data.json')
//        .then(response => response.json())
//        .then(data => {
//            data.foreach(data => {
//                tablerow += `

// <tr>
//                    <td>${data.name}</td>
//                                        <td>${data.email}</td>
//                    <td>${data.age}</td>

//                </tr>
//`
//            });
//            document.getelementbyid('tablebody').innerhtml += tablerow
//        })
//        .catch(error => {
//            console.error('error:', error);
    //        });
    let TableRow = '';

    $.ajax({
        url: '../../js/data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(data => {
                TableRow += `
                <tr>
                    <td>${data.Name}</td>
                    <td>${data.Email}</td>
                    <td>${data.Age}</td>
                </tr>`;
            });
            $('#tableBody').append(TableRow);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

    console.log("hello")
};