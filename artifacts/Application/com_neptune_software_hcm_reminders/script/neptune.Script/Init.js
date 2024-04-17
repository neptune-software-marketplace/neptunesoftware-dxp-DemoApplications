sap.ui.getCore().attachInit(function(data, navObj) {

    modelListReminder.setData([{
        title: "Workflow",
        statusState: "Warning",
        action: "Your lease accomodation will expire on 31st August 2021",
        actionText: "Apply"
    },{
        title: "Workflow",
        statusState: "Success",
        action: "You are a Divisional Nominated employee for Development Center 2021",
        actionText: "Apply"
    },{
        title: "Workflow",
        statusState: "Warning",
        action: "You were absent two days ago",
        actionText: "Apply Again"
    },{
        title: "Workflow",
        statusState: "Error",
        action: "Your password is about to expire",
        actionText: "Apply"
    }]);
});
