/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Yisu guan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "18932229318",
        "email": "gys2zj@gmail.com",
        "github": "https://github.com/scholarg",
        "twitter": "https://twitter.com/Scholar_g",
        "location": "Nantong Jiangsu China"
    },
    "welcomeMessage": "Welcome to accept and see my resume",
    "age": "37",
    "skills": ["Awesomeness", "Python", "Database", "HTML", "JS", "CSS"],
    "biopic": "images/fry.jpg",
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName, formattedRole);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedLocation, formattedGithub);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBiopic, formattedwelcomeMsg, HTMLskillsStart);
        bio.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        })
    }
};


var education = {
    "schools": [
        {
            "name": "Nanchang University",
            "location": "Nanchang Jiangxi China",
            "degree": "Bachelor Degree",
            "dates": "2014-2017",
            "majors": ["Database", "HTML"],
            "url": "http://gscholar.cn"
        },
        {
            "name": "Nanjing University",
            "location": "Nanjing Jiangsu China",
            "degree": "Bachelor",
            "dates": "1998-2002",
            "majors": ["Database"],
            "url": "http://gscholar.cn"
        },
    ],
    "onlineCourses":[
        {
            "title": "Front end Course",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://gscholar.cn"
        },
        {
            "title": "Python Full Stack Developer",
            "school": "NetEase",
            "dates": "2016",
            "url": "http://www.163.com"
        }
    ],
}

var work = {
    "jobs": [
        {
            "employer": "tsqd",
            "location": "Nantong Jiangsu China",
            "title": "Database Engineer",
            "dates": "January 2002 - Future",
            "description": "loshghjhgjgkghkjgjkhuygcfdrdd fyfytfyt gjhhbybvtvrtec ibbbyby"
        }
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDates = HTMLworkDescription.replace("%data%",job.description);
            $(".work-entry:last").append(formattedDates);
        })
    }
}

var project = {
    "projects": [
        {
            "title": "www",
            "dates": "2012",
            "description": "sdffds99876asdf",
            "images": [
                "https://picsum.photos/200/200/?image=1037",
                "https://unsplash.it/200"
            ]
        },
        {
            "title": "wechat",
            "dates": "2017",
            "description": "sdffd121sasdf",
            "images": [
                "http://placebeard.it/200/200",
                "http://placebeard.it/200/200",
                "https://picsum.photos/200/200/?image=1037"
            ]
        }
    ],
    display: function() {
        project.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                })
            }
        })
    }
}

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


education.display = function() {
    education.schools.forEach(function(cv, index, array) {

        // console.log(currentValue.type + " donuts cost $" + currentValue.cost + " each");
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", cv.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", cv.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        var formattedNameurl = formattedNameDegree.replace("#", cv.url);
        $(".education-entry:last").append(formattedNameurl);
        var formattedDates = HTMLschoolDates.replace("%data%", cv.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", cv.location);
        $(".education-entry:last").append(formattedLocation);
        cv.majors.forEach(function(major) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedMajor);
        });
        var formattedUrl = HTMLschoolUrl.replace("%data%", cv.url);
        var formattedUrlend = formattedUrl.replace("#", cv.url);
        $(".education-entry:last").append(formattedUrlend);

    });

    education.onlineCourses.forEach(function(cv, index, array) {
        // console.log(currentValue.type + " donuts cost $" + currentValue.cost + " each");
        $("#onlinecourses").append(HTMLonlineStart);
        var formattedonLineTitle = HTMLonlineTitle.replace("%data%", cv.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", cv.school);
        var formattedonlineTitleSchool = formattedonLineTitle + formattedonlineSchool
        var formattedonlineTitleSchoolurl = formattedonlineTitleSchool.replace("#", cv.url);
        $(".onlineCourse-entry:last").append(formattedonlineTitleSchoolurl);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", cv.dates);
        $(".onlineCourse-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", cv.url);
        var formattedonlineURLend = formattedonlineURL.replace("#", cv.url);
        $(".onlineCourse-entry:last").append(formattedonlineURLend)
    });
}


bio.display();
education.display();
work.display();
project.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
