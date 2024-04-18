try {

    // GetTodays Bdays
    var todayList = await apis.getTodayBDay();

    // var p9UserList = await apis.List();
    // p9UserList = p9UserList.data.userRecords;

    todayList = todayList.data.result.IT_ALL_EMPLOYEE_BDAY;
    var bList = [];
    for (let t = 0; t < todayList.length; t++) {

        bList.push({
            Name: todayList[t].VORNA + ' '+todayList[t].NACHN
        })

    }

    result = getCard(bList);


    complete();
} catch (err) {

    fail(err);
}

function getCard(bList) {

    let actualLength = bList.length;
    let maxLength = 3;
    if (actualLength < maxLength) {
        maxLength = actualLength;
    }

    return {
        "_version": "1.14.0",
        "sap.app": {
            "id": "card.explorer.highlight.list.card",
            "type": "card",
            "title": "Today's Birthdays",
            "applicationVersion": {
                "version": "1.0.0"
            },
            "tags": {
                "keywords": [
                    "List",
                    "Birthday",
                ]
            }
        },
        "sap.ui": {
            "technology": "UI5",
            "icons": {
                "icon": "sap-icon://fa-solid/birthday-cake"
            }
        },
        "sap.card": {
            "type": "List",
            "header": {
                "title": "Today's Birthdays",
                "icon": {
                    "src": "sap-icon://fa-solid/birthday-cake"
                },
                "status": {
                    "text": maxLength + " of " + actualLength
                }
            },
            "configuration": {
                "messages": {
                    "noData": {
                        "type": "NoSearchResults",
                        "title": "No Birhtdays Today",
                        "size": "Auto"
                    }
                }
            },
            "content": {
                "data": {
                    "json": bList
                },
                "maxItems": maxLength,
                "item": {
                    "title": "{Name}",
                }
            }
        }
    }
}
