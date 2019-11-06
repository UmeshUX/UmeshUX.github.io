$(document).ready(function ()
{


    init();

    $("#selectData").on("change", function ()
    {   
        hideAllSelectSection()
        
        var selectedVal = $("#selectData").val();
        $(selectedVal).show();
    });
});


function init()
{
    loadCommonHTML();
    initializeWidgets();
    $(".gem-user-leave").show();

} // init()


function loadCommonHTML()
{
    $("#header").load("common/header.html");
}



function initializeWidgets()
{
//    $('.ui.checkbox').checkbox();

    $('.gem-ui-hd-pge-cont .menu .item').tab();

    $("#create-overhead").click(function ()
    {
        alert("overhead details");
        $('.mini.modal.create-overhead').modal('show');

    });




}


