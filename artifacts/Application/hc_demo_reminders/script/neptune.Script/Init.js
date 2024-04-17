sap.ui.getCore().attachInit(function(data, navObj) {

    modelListReminder.setData([{
        title: "Workflow",
        statusState: "Success",
        action: "You have two inspections to review",
        actionText: "Review"
    },{
        title: "Workflow",
        statusState: "Warning",
        action: "You have 2 leave requests in your inbox",
        actionText: "Take Action"
    },{
        title: "Workflow",
        statusState: "Success",
        action: "Call John about the productivity reports",
        actionText: "Call"
    },{
        title: "Workflow",
        statusState: "Warning",
        action: "You were absent two days ago",
        actionText: "Apply Again"
    },{
        title: "Workflow",
        statusState: "Error",
        action: "Your password is about to expire",
        actionText: "Change"
    }]);
});
