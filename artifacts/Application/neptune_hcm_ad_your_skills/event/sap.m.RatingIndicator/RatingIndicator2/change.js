// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Single Field
const value = context.getProperty("id");

var options = {
    parameters: {
        "where": JSON.stringify({"id": value}) 
    },
    data: {
        "level": this.getValue(),
    }
};

apiRestAPISkillsPost(options);