var username = AppCache.userInfo.email;
console.log("user name" ,username);
var options = {
    parameters: {
        "where": JSON.stringify({"createdBy" : username}), 
    }
};
apiRestAPIGetSkills(options);