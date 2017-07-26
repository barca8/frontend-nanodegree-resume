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

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
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
        "images/img1.JPG",
        "images/img2.JPG"
      ]
    }
  ]
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
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
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
      "url": "http://example.com"
      },
    {
      "name": "Ningbo University",
      "location": "Ningbo",
      "degree": "BA",
      "majors": ["CS"],
      "dates": "2008",
      "url": "http://example.com"
      }
  ],
  "onlineCourses": [
    {
      "title": "JaveScript Crash Course",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};




function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name [1];
}

$("#main").append(internationalizeButton);

projects.display = function () {
  projects.projects.forEach(function(item) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
    $(".project-entry:last").append(formattedTitle);
  
    var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
    $(".project-entry:last").append(formattedDescription);

    if (item.images.length > 0) {
      item.images.forEach(function(img) {
        var formattedImage = HTMLprojectImage.replace("%data%", img);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};

projects.display();
bio.display();
work.display();

$("#mapDiv").append(googleMap);
