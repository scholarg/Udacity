/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var firstName = "james";
// var age = 32;
// console.log(firstName);
// console.log(age);
// var awesomeThought = "I am scholar and I am awesomethought";
// console.log(awesomeThought);
// var email = "abs@uu.com";
// var newEmail = email.replace("uu", "dd");
// console.log(email);
// console.log(newEmail);
// var funThoughts = awesomeThought.replace("awesome", "fun");
// console.log(funThoughts);
// $("#main").append(funThoughts);

// var name = "scholar";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var work = {};
// work.position = "Nantong Jiangsu China";
// work.employer = "Udacity";
// work.years = 16;

// var education = {};
// education["name"] = "Nanchang University";
// education["years"] = "1998-2002";
// education["city"] = "Nanjing Jangsu China";

// var role = "Web Developer";

var bio = {
    "name": "Yisu guan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "18932229318",
        "email": "gys2zj@gmail.com",
        "github": "http://www.github.com",
        "twitter": "http://www.twitter.com",
        "location": "Nantong Jiangsu China"
    },
    "welcomeMessage": "Welcome to accept and see my resume",
    "age": 37,
    "skills": ["Awesomeness", "Python", "Database", "HTML", "JS", "CSS"],
    "bioPic": "images/fry.jpg"
};
// console.log(bio.contacts.location);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
};
// console.log(bio.name);

var educations = {
    "schools": [
        {
            "name": "Nanchang University",
            "location": "Nanchang Jiangxi China",
            "degree": "Bachelor Degree",
            "dates": "2014-2017",
            "majors": "Database",
            "url": "http://gscholar.cn"
        },
    ],
    "onlineCourses":[
        {
            "title": "Front end Course",
            "school": "Udacity",
            "date": "2017",
            "url": "http://gscholar.cn"
        },
        {
            "title": "Python Full Stack Developer",
            "school": "NetEase",
            "date": "2016",
            "url": "http://gscholar.cn"
        }
    ],
}

var works = {
    "jobs": [
        {
            "employer": "tsqd",
            "location": "Nantong Jiangsu China",
            "title": "Database Engineer",
            "dates": "January 2002 - Future",
            "description": "loshghjhgjgkghkjgjkhuygcfdrdd fyfytfyt gjhhbybvtvrtec ibbbyby"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "www",
            "dates": "2012",
            "descriptions": "sdffdsasdf",
            "images": [
                "https://picsum.photos/200/200/?image=1037",
                "https://unsplash.it/200"
            ]
        },
        {
            "title": "wechat",
            "dates": "2017",
            "descriptions": "sdffd121sasdf",
            "images": [
                "http://placebeard.it/200/200",
                "http://placebeard.it/200/200",
                "https://picsum.photos/200/200/?image=1037"
            ]
        }
    ]
}

// for (job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);
//
//     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//     var formattedEmployerTitle = formattedEmployer + formattedTitle;
//     $(".work-entry:last").append(formattedEmployerTitle);
//
//     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//     $(".work-entry:last").append(formattedDates);
//     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriptions);
//     $(".work-entry:last").append(formattedDescription);
// }

// function displayWork() {
//     for (job in work.jobs) {
//         $("#workExperience").append(HTMLworkStart);
//
//         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//         var formattedEmployerTitle = formattedEmployer + formattedTitle;
//         $(".work-entry:last").append(formattedEmployerTitle);
//
//         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//         $(".work-entry:last").append(formattedDates);
//         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriptions);
//         $(".work-entry:last").append(formattedDescription);
//     }
// }



// 收集用户在页面的点击位置坐标
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// 名称国际化
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

function displayEducation() {
    educations.schools.forEach(function(cv, index, array) {

        // console.log(currentValue.type + " donuts cost $" + currentValue.cost + " each");
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", cv.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", cv.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", cv.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", cv.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", cv.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedUrl = HTMLschoolUrl.replace("%data%", cv.url);
        $(".education-entry:last").append(formattedUrl);
    });
}

function displayonlineCourses() {
    educations.onlineCourses.forEach(function(cv, index, array) {
        // console.log(currentValue.type + " donuts cost $" + currentValue.cost + " each");
        $("#onlinecourses").append(HTMLonlineStart);
        var formattedonLineTitle = HTMLonlineTitle.replace("%data%", cv.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", cv.school);
        var formattedonlineTitleSchool = formattedonLineTitle + formattedonlineSchool
        $(".onlineCourse-entry:last").append(formattedonlineTitleSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", cv.date);
        $(".onlineCourse-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", cv.url);
        $(".onlineCourse-entry:last").append(formattedonlineURL)
    });
}

function displayWork() {
    works.jobs.forEach(
        function(cv, index, array) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",cv.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",cv.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",cv.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDates = HTMLworkDescription.replace("%data%",cv.description);
            $(".work-entry:last").append(formattedDates);
        }
    )
}

function displayProject() {
    for (project in projects.projects) {
        // console.log(projects.projects[project]);
        $("#projects").append(HTMLprojectStart);
        var formattedTiltle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTiltle);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descriptions);
        $(".project-entry:last").append(formattedDescription);
        // console.log(projects.projects[project].images.length);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                console.log(projects.projects[project].images[image]);
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            };
        };
    };
    }

// function displayProject() {
//     projects.projects.forEach(function(cv, index, array) {
//         $("#projects").append(HTMLprojectStart);
//         var formattedTiltle = HTMLprojectTitle.replace("%data%", cv.title);
//         $(".project-entry:last").append(formattedTiltle);
//         var formattedDate = HTMLprojectDates.replace("%data%", cv.dates);
//         $(".project-entry:last").append(formattedDate);
//         var formattedDescription = HTMLprojectDescription.replace("%data%", cv.descriptions);
//         $(".project-entry:last").append(formattedDescription);
//         // console.log(projects.projects[0].images[0]);
//         for ((project, image) in projects.projects[project].images[image]) {
//             console.log(projects.projects[project].images[image]);
//         }
//         // if (projects.projects.images.length > 0) {
//         //
//         //
//         //
//         //     projects.projects.forEach(function(cv, index, array) {
//         //         var formattedImage = HTMLprojectImage.replace("%data%", cv.images);
//         //         $(".project-entry:last").append(formattedImage);
//         //     });
//         // }
//     });
// }

displayEducation(); //调用自己创建的函数的方法
displayonlineCourses();
displayWork();
displayProject();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// $("#main").append(work["position"]);
// $("#main").append(education.name);
