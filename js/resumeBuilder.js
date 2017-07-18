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
  ]
};

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates":  "2015",
      "description": "this project is a sample project for test.",
      "images": [
        "https://",
        "https://"
      ]
    }
  ]
};

var bio = {
  "name": "Lion Messi",
  "role": "Web Developer",
  "welcomeMessage": "welcome to my resume.",
  "bioPic": "images/fry.jpg",
  "contacts": {
    "mobile": "0574-87533703",
    "email": "messi@gmail.com",
    "github": "messi",
    "twitter": "@messi",
    "location": "Ningbo"
  },
  "skills": [
    "football", "programming", "sleeping", "drawing"
  ]
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

work.jobs.forEach(function(item) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", item.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", item.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", item.dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
  $(".work-entry:last").append(formattedDescription);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name [1];
}

$("#main").append(internationalizeButton);
