
$(document).ready(function ()
{
    init();
});


function init()
{
    loadCommonHTML();
    initializeWidgets();

} // init()


function loadCommonHTML()
{
    $("#header").load("common/header.html");
}


function initializeWidgets()
{

$('.menu .item')
  .tab()
;


}
