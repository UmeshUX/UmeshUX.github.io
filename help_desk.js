$(document).ready(function ()
{
    init();
});


function init()
{
    loadCommonHTML();
    initializeWidgets();
    ticketHide();
    $(".gem-total-tick").show();

} // init()


function loadCommonHTML()
{
    $("#header").load("common/header.html");
}

function initializeWidgets()
{
    
 $("#create-ticket").click(function ()
    {
        alert("ticket details");
        $('.small.modal.create-ticket').modal('show');

    });
}

function ticketInbox(ticket)
{
//    ticketHide();
        ticketHide();
        
    $(ticket).show();
}

function ticketHide()
{
    $(".gem-total-tick").hide();
    $(".gem-pending-tick").hide();
    $(".gem-forme-tick").hide();
    
}
