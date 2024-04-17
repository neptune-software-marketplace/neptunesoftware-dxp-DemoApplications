sap.ui.getCore().attachInit(function(startParams) {

    modelListOpenPositions.setData([{
        TitleJobDescription: "Marketing and Community Manager",
        TitleTotalApplicants: "5 Applicants",
        TitleNewCandidates: "5 New Candidates",
        TitleToReqruit: "6 To Reqruit",
        Icon: "sap-icon://fa-solid/angle-double-up",
        Color : "green",
        status: "Active"
    },{
        TitleJobDescription: "ABAP Consultant",
        TitleTotalApplicants: "2 Applicants",
        TitleNewCandidates: "43 New Candidates",
        TitleToReqruit: "2 To Reqruit",
        Icon: "sap-icon://fa-solid/angle-double-up",
        Color : "green",
        status: "Active"
    },{
        TitleJobDescription: "Engineer",
        TitleTotalApplicants: "0 Applicants",
        TitleNewCandidates: "0 New Candidates",
        TitleToReqruit: "0 To Reqruit",
        Icon: "sap-icon://fa-solid/angle-double-down",
        Color : "red",
        status: "Active"
    }
    ])




    modelListCandidates.setData([{
        imageSrc: "https://gtmdemosystem.neptune-software.cloud/media/root/Kaan/random person.png",
        imageHeight: "4rem",
        imageWidth: "4rem",
        type: "Employee",
        title: "Mark Kelly",
        description: "Engineering",
        source: "Overview",
        status: "First HR Interview",
        but1: "Emphasized",
        but2: "Emphasized",
        but3: "Emphasized",
        level:25,
        status_level:"None"
    },{
        imageSrc: "https://gtmdemosystem.neptune-software.cloud/media/root/Luuk%20W%C3%B6sten/people/Screenshot 2023-04-26 at 15.04.42.png",
        imageHeight: "4rem",
        imageWidth: "4rem",
        type: "Employee",
        title: "Kyle O. Johnson",
        description: "Engineering",
        source: "Overview",
        status: "Technical Interview",
        but1: "Success",
        but2: "Success",
        but3: "Success",
        level:50,
        status_level:"None"
    },{
        imageSrc: "https://gtmdemosystem.neptune-software.cloud/media/root/Luuk%20W%C3%B6sten/people/Screenshot 2023-04-26 at 15.04.58.png",
        imageHeight: "4rem",
        imageWidth: "4rem",
        type: "Employee",
        title: "Jane K. Himly",
        description: "Human Resources",
        source: "Overview",
        status: "Second HR Interview",
        but1: "Success",
        but2: "Success",
        but3: "Success",
        level:75,
        status_level:"None"
    },{
        imageSrc: "https://gtmdemosystem.neptune-software.cloud/media/root/Luuk%20W%C3%B6sten/people/Screenshot 2023-04-26 at 15.05.25.png",
        imageHeight: "4rem",
        imageWidth: "4rem",
        type: "Employee",
        title: "John S. Langworth",
        description: "Finance",
        source: "Overview",
        status: "Done",
        but1: "Success",
        but2: "Emphasized",
        but3: "Emphasized",
        level:100,
        status_level:"Success"
    },{
        imageSrc: "https://gtmdemosystem.neptune-software.cloud/media/root/Luuk%20W%C3%B6sten/people/Screenshot 2023-04-26 at 15.05.50.png",
        imageHeight: "4rem",
        imageWidth: "4rem",
        type: "Employee",
        title: "Eric A. Himmelberg",
        description: "Product",
        source: "Overview",
        status: "Submited",
        but1: "Success",
        but2: "Neutral",
        but3: "Neutral",
        level:5,
        status_level:"None"
    }]);
});

ButtonAll.firePress();
