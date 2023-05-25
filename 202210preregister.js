$(".eventBtn01").click(function() {
    $('.eventDetailsArea01').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea01').addClass('formAnimation2');
})

$(".eventBtn02").click(function() {
    $('.eventDetailsArea02').removeClass('eventOff');
    $('body').addClass('bodyScrollOff');
    $('.eventDetailsArea01').addClass('formAnimation1');
})

$(".contentClose").click(function() {
    $('.eventDetailsArea01,.eventDetailsArea02').addClass('eventOff');
    $('body').removeClass('bodyScrollOff');
    $('.eventDetailsArea01,.eventDetailsArea02').removeClass('formAnimation2');
})

var url = window.location.href;
if (url.indexOf("MLINE") >= 0) {
    $('.forLINEPUSH').removeClass('lineOff');
    $('.forGeneral').addClass('lineOff');
};