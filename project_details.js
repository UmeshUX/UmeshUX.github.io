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
//    ALL LIST ACTIVITY ON CLICK EVENT, CLIOCK ON PROJECT LIST
    $(".proj-work-order").on("click", function ()
    {
        alert("PROJECT WORK ORDER");
        $('.fullscreen.modal.project-work-order').modal('show');
    });

    $(".dept-work-ord").on("click", function ()
    {
        alert("DEPARTMENT WORK WORDER");
        $('.fullscreen.modal.dept-work-order').modal('show');
    });

    $(".proj-wip").on("click", function ()
    {
        alert("PROJECT WIP");
        $('.mini.modal.project-wip').modal('show');
    });

    $(".proj-summary").on("click", function ()
    {
        alert("project summary");
        $('.fullscreen.modal.project-summary').modal('show');
        projectChart();

    });


    $("#add-proj").on("click", function ()
    {

        $('.small.modal.add-proj-list').modal('show');
    });




}

function projectChart()
{
    alert("sdfg");
    let chart = new frappe.Chart("#chart", {// or DOM element
        data: {
            labels: ["JAN 2018", "FEB 2018", "MAR 2018", "APR 2018",
                "MAY 2018", "JUN 2018", "JUL 2018", "AUG 2018", "SEP 2018", "OCT 2018", "NOV 2018", "DEC 2018"],

            datasets: [
                {
                    name: "Profit Line", chartType: 'line',
                    values: [10, 20, 40, 60, 65, 60, 55, 70, 60, 30, 31]
                },

                {
                    name: "Avd Line", chartType: 'line',
                    values: [35, 20, 10, 15, 25, 50, 55, 60, 69, 66, 51]
                },

                {
                    name: "Loss Line", chartType: 'line',
                    values: [22, 35, 47, 50, 66, 77, 70, 66, 70, 75, 60]
                }
            ]

                    // yMarkers: [{ label: "Marker", value: 0,
                    //   options: { labelPos: 'left' }}],

                    // yRegions: [{ label: "Region", start: 5000000, end: 7500000,
                    //   options: { labelPos: 'right' }}],
        },

        title: "GEM Profit chart",
        type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
        height: 400,
        colors: ['green', 'yellow', 'red'],

        tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' Rupees',
        }
    });

//     $('.fullscreen.modal.project-summary').modal('show');

}


