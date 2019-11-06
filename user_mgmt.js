$(document).ready(function ()
{


    init();

   
});


function init()
{
    loadCommonHTML();
    initializeWidgets();
    hideAllSelectSection();
    $(".gem-user-leave").show();

} // init()


function loadCommonHTML()
{
    $("#header").load("common/header.html");
}




function hideAllSelectSection()
{
    $(".gem-user-pass-reset").hide();
    $(".gem-user-leave-structure").hide();
    $(".gem-user-leave").hide();
    $(".gem-emp-super").hide();
    $(".gem-dept-head").hide();
    $(".gem-pro-mgr").hide();
//    $(".gem-dept-share").hide();
}



function initializeWidgets()
{
    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion();

    $('.gem-ui-hd-pge-cont .menu .item').tab();
    
     $("#selectData").on("change", function ()
    {   
        hideAllSelectSection()
        
        var selectedVal = $("#selectData").val();
        $(selectedVal).show();
    });
    
    $("#add-inp-user").click(function ()
    {
        alert("add user input form");
        $('.fullscreen.modal.add-user-form').modal('show');

    });

    $("#create-overhead").click(function ()
    {
        alert("overhead details");
        $('.mini.modal.create-overhead').modal('show');

    });

    $(".change-emp-s-wiser").click(function ()
    {
        alert("change-emp-s-wiser");
        $('.mini.modal.change-emp-super').modal('show');
    });


    $(".change-pro-mgmt").click(function ()
    {
        alert("change-pro-mgmt");
        $('.mini.modal.change-pro-mgmt-sec').modal('show');
    });



    $(".gem-cnge-btn").click(function ()
    {

        $('.mini.modal.change-dept').modal('show');

    });



}


