var work = {
  "jobs": [
    {
      "employer": "Alibaba",
      "title": "Developer",
      "location": "Hangzhou",
      "dates": "2008 - 2010",
      "description": "my first job"
    },
    {
      "employer": "Baidu",
      "title": "Developer",
      "location": "Beijing",
      "dates": "2010 - 2011",
      "description": "my second job"
    },
    {
      "employer": "Huawei",
      "title": "Engineer",
      "location": "Ningbo",
      "dates": "2011 - Now",
      "description": "it's my job now."
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates":  "2015",
      "description": "this project is a sample project for test.",
      "images": [
        "http://lorempixel.com/320/240/business/1",
        "http://lorempixel.com/320/240/business/2"
      ]
    }
  ],
  "display": function() {
    projects.projects.forEach(function(item) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
      var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);

      $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

      if (item.images.length > 0) {
        item.images.forEach(function(img) {
          var formattedImage = HTMLprojectImage.replace("%data%", img);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};

var bio = {
  "name": "Lion Messi",
  "role": "Web Developer",
  "welcomeMessage": "welcome to my resume.",
  "biopic": "images/fry.jpg",
  "contacts": {
    "mobile": "0574-87533703",
    "email": "messi@gmail.com",
    "github": "messi",
    "twitter": "@messi",
    "location": "Ningbo"
  },
  "skills": [
    "football", "programming", "sleeping", "drawing"
  ],
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Zhejiang University",
      "location": "Hangzhou",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": "2011",
      "url": "http://www.udacity.com"
      },
    {
      "name": "Ningbo University",
      "location": "Ningbo",
      "degree": "BA",
      "majors": ["CS"],
      "dates": "2008",
      "url": "http://www.udacity.com"
      }
  ],
  "onlineCourses": [
    {
      "title": "JaveScript Crash Course",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com/course/ud804"
    }
  ],
  "display": function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedNameDegree = formattedName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

      $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedTitleSchool = formattedTitle + formattedSchool;
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

      $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedUrl);
    });
  }
};

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name [1];
}

$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
