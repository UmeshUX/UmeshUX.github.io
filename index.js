
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

    $("#salary-menu").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/salary_slip.html";
    });
    
     $("#holiday-menu").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/holiday.html";
    });
    
     $("#help-menu").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/help_desk.html";
    });
    
    $("#overhead-invoice-menu").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/overhead_invoice.html";
    });
    
    $("#user-mgmt").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/user_mgmt.html";
    });
    
     $("#proj-detls").on("click", function()
    {
        window.location.href = "http://localhost:8383/gem-engserv-lvm/project_details.html";
    });
    
    
    
}
