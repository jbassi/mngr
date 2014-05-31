function init()
{ //initliaze the calendar

    //getshifts and shit
    //get employees



    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom="Section";
    scheduler.config.details_on_create=true;
    scheduler.config.details_on_dblclick=true;
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    //===============
    //Configuration
    //===============
    var sections=[
    {key:1, label:"Jeremy Bassi"},
    {key:2, label:"Nick Ardecky"},
    {key:3, label:"Christian Carreon"},
    {key:4, label:"Cole Stipe"},
    {key:5, label:"James Lee"},
    {key:6, label:"Colby Harrison"},
    {key:7, label:"Jonathan Trinh"},
    {key:8, label:"Richard Ying"},
    {key:9, label:"Joe Kang"},
    {key:10, label:"Yutang Lin"}
    ];

    scheduler.createTimelineView({
    name: "timeline",
    x_unit:  "minute",
    x_date:  "%H:%i",
    x_step:  30,
    x_size: 24,
    x_start: 16,
    x_length:   48,
    y_unit:  sections,
    y_property: "section_id",
    render:"bar"
    });

    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections=[
    {name:"description", height:130, map_to:"text", type:"textarea" , focus:true},
    {name:"custom", height:23, type:"select", options:sections, map_to:"section_id" },
    {name:"time", height:72, type:"time", map_to:"auto"}
    ];
    scheduler.init('scheduler_here',new Date(2009,5,30),"timeline");
    scheduler.parse([
    {id:1, start_date: "2009-06-30 09:00", end_date: "2009-06-30 12:00", text:"6AM - 10AM", section_id:1}
    ],"json");
}
