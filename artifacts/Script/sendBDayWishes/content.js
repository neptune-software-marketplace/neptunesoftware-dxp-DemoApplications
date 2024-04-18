try {

    // GetTodays Bdays
    var todayList = await apis.getTodayBDay();

    // var p9UserList = await apis.List();
    // p9UserList = p9UserList.data.userRecords;

    todayList = todayList.data.result.IT_ALL_EMPLOYEE_BDAY;

    for (let t = 0; t < todayList.length; t++) {
        if (todayList[t].EMAIL !== "" && validateEmail(todayList[t].EMAIL)) {
            var eData = {
                "NAME": todayList[t].VORNA
            }
            // log.warn(todayList[t].EMAIL)
            await sendEmail(todayList[t].EMAIL, null, null, "hr@neptune-software.com", "69F914F7-B2C8-ED11-A8E0-000D3A67F81F", eData, []);
        }

    }

    complete();
} catch (err) {

    fail(err);
}

function validateEmail(emailId) {
    return emailId.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function toCamelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}