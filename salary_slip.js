
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
    $(".card").on("click", function()
    {
        alert("card salary slip is called");
        $(".gem-ui-slry-cont").show();
        $(".gem-ui-slry-card").hide();
        
    });

}
