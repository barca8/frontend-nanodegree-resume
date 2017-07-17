var work = {
  "jobs": [
    {
      "employer": "Alibaba",
      "title": "Developer",
      "location": "Hangzhou",
      "dates": "2008 - 2010",
      "descripion": "my first job"
    },
    {
      "employer": "Baidu",
      "title": "Developer",
      "location": "Beijing",
      "dates": "2010 - 2011",
      "descripion": "my second job"
    },
    {
      "employer": "Huawei",
      "title": "Engineer",
      "location": "Ningbo",
      "dates": "2011 - Now",
      "descripion": "it's my job now."
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
      "city": "Hangzhou",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": "2011",
      "url": "http://example.com"
      },
    {
      "name": "Ningbo University",
      "city": "Ningbo",
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
});

