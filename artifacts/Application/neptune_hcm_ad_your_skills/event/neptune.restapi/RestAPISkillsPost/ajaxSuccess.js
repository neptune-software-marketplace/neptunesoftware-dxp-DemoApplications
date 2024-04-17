var username = AppCache.userInfo.email;
var options = {
    parameters: {
        "where": JSON.stringify({"createdBy" : username}), 
    }
};

apiRestAPIGetSkills(options);
sap.m.MessageToast.show("Saved");
RatingIndicator1.setValue(0);
Input.setValue();