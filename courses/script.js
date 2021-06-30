$(document).ready(function(){
    var $search = $("#search").on('input',function(){
        var matcher = new RegExp($(this).val(), 'gi');
        $('.box').show().not(function(){
            return matcher.test($(this).find('.title, .sub').text())
        }).hide();
    })
})