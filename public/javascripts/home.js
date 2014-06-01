function init()
{ //initliaze the calendar

    //color:"#d5e15d"
    //color:"#c85248"
    //getshifts and shit
    //get employees


    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom="Positions";
    scheduler.config.details_on_create=true;
    scheduler.config.details_on_dblclick=true;
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    scheduler.config.wide_form = false;

    //css for unavailability
    scheduler.templates.event_class = function (start, end, event) {
        if (event.color == '#e7e7e7') return "unavailability"
        return "shifts"
    }

    //===============
    //Configuration
    //===============
    var employees=[
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

    var positions=[
    {key:1, label:"Chef", color:"#c85248"},
    {key:2, label:"Server", color:"#d5e15d"},
    {key:3, label:"Bartender", color:"#63b7e6"}
    ];

    var shifts=[
    {id:1, start_date: "2014-01-01 09:00", end_date: "2014-01-01 12:00", text:"Chef", employee_id:1, position_id:1, color:"#c85248"}
    ];

    var unavailability=[
    {id:2, start_date: "2014-01-01 05:00", end_date: "2014-01-01 8:00", employee_id:1, color:"#e7e7e7"},
    {id:4, start_date: "2014-01-01 12:00", end_date: "2014-01-01 19:00", employee_id:2, color:"#e7e7e7"},
    {id:6, start_date: "2014-01-01 05:00", end_date: "2014-01-01 10:00", employee_id:3, color:"#e7e7e7"}
    ];

    scheduler.createTimelineView({
    name: "timeline",
    x_unit:  "minute",
    x_date:  "%g %A", //24hr "%H:%i"
    x_step:  60, //must be dynamic
    x_size: 17,
    x_start: 5,
    x_length: 24,
    y_unit:  employees,
    y_property: "employee_id",
    render:"tree"
    });

    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections=[
    //{name:"description", height:50, map_to:"text", type:"textarea" , focus:true}, //POSTIT NOTE FEATURE?
    {name:"custom", height:23, type:"select", options:positions, map_to:"position_id" },
    //{name:"custom", height:200, options:positions, map_to:"position_id", type:"radio", vertical:true },
    //{name:"time", height:72, type:"time", map_to:"auto"}
    ];

    //var test = scheduler.getLabel("position_id", 1);;
    var shifts=[
    {id:1, start_date: "2014-01-01 09:00", end_date: "2014-01-01 12:00", text:"Chef", employee_id:1, position_id:1, color:"#c85248"}
    ];
        
    scheduler.init('scheduler_here',new Date(2014,0,01),"timeline");

    scheduler.parse(unavailability,"json");
    scheduler.parse(shifts,"json");

    for(var i = 0;i<unavailability.length;i++) {
        var eventID = scheduler.getEvent(unavailability[i].id);
        eventID.readonly = true;
    }

    console.log('wooow' + scheduler.getEvent(2).position)

    //disable click for read only events
    scheduler.attachEvent("onDblClick", function (id, e){
        var eventID = scheduler.getEvent(id);
        if(eventID != null)
            if(eventID.readonly)
                return false;
        return true;
      });

    //disable drag for read only events
    scheduler.attachEvent("onBeforeDrag", function (id, mode, e){
        var eventID = scheduler.getEvent(id);
        if(eventID != null)
            if(eventID.readonly)
                return false;
        return true;
    });

}
