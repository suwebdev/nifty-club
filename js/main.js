////// LIKE BUTTON ////////

// jQUERY

$(function () {
    $(".like").click(function() {
        var input = $(this).find('.qty1');
        input.val(parseInt(input.val())+ 1);
    });
});

// JAVASCRIPT
var i = 0;
function buttonClick() {
    document.getElementById('clicks').value = ++i;
}