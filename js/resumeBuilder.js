var role="Web Developer";
var name="Darren Sexton";
var bioPic="images/profile.jpg";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 
$("#header").prepend(formattedbioPic);

var skills=["HTML", "CSS", "Bootstraps", "Excel", "Word", "Javascript"];



var bio = {
            "name" : "Darren Sexton",
            "age" : "44",
            "location" : "Cincinnati, Oh",
            "skills" : skills             
    
  };


var education = {
    "schools": [
        {
            "name" : "Udacity",
            "location" : "Reading, OH",
            "degree" : "Nanodegree",
            "major" : "Front end development"
        },
        {
            "name" : "sycamore",
            "location" : "Cincinnati, OH",
            "degree" : "Diploma",
            "major" : "N/A"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "Mane",
            "location" : "Lebanon, OH",
            "title" : "Lab Technicaion",
            "dates" : "2013-2014",
            "description" : "I compounded customer samples of flavors by following precise, complex formulas.I would pack and ship samples, including designated hazardous materials, to customers. I ran Spray Dry equipment to create powdered flavors "

            
        },
        {
            "employer" : "Cargill",
            "location" : "Cincinnati, OH",
            "title" : "Lab Technician",
            "dates" : "2010-2013",
            "description" : "I compounded customer samples of flavors by following precise, complex formulas. I performed flash point and specific gravity tests on new flavors.Pack and ship samples, including designated hazardous materials, to customers. I initiated chemical reactions that are used in formulas and as samples. "

        },
        {
            "employer" : "Cargill",
            "location" : "Cincinnati, OH",
            "title" : "Compounder",
            "dates" : "2009-2010",
            "description" : "I had to maintain a food safe work area that exceeded all industry standards and government requirements. I Managed detailed inventory of all products and ingredients. "
        },
        {
            "employer" : "Wild Flavors",
            "location" : "Erlanger, KY",
            "title" : "Compounder",
            "dates" : "2008-2009",
            "description" : "I staged and packed customer orders for shipment; ensured shipments were accurate and properly packaged.  I also assisted with dry blend operations; precisely maintaining temperature and humidity levels and a clean environment."
        }
    ]
};


var projects = {
    "projects": [
        {
            "title" : "holder1",
            "dates" : "holder2",
            "description" : "holder3",
            "image" :  "http://fillmurray.com/200/200"
        },
        {
            "title" : "holder4",
            "dates" : "holder5",
            "description" : "holder6",
            "image" :  "http://fillmurray.com/200/200"
        },
        {
            "title" : "holder7",
            "dates" : "holder8",
            "description" : "holder9",
            "image" : "http://fillmurray.com/200/200"
        }
    ]
    
};

var email = "<a href='mailto:darrensexton01@gmail.com'>Darrensexton01@gmail.com</a>";
var mobile = "513-884-0937";
var address = "1246 Thurnridge Dr., Cincinnati, OH";

var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedLocation = HTMLlocation.replace("%data%", address);

$("#footerContacts").append (formattedMobile);
$("#footerContacts").append (formattedEmail);
$("#footerContacts").append (formattedLocation);

//if(bio.skills.length  > 0) {
 //   $("#header").append(HTMLskillsStart);
    
 //   var formattedSkill =  HTMLskills.replace("%data%", bio.skills[0]);
  //  $("#skills").append(formattedSkill);
    
  //  var formattedSkill =  HTMLskills.replace("%data%", bio.skills[1]);
  //  $("#skills").append(formattedSkill);
    
 //   var formattedSkill =  HTMLskills.replace("%data%", bio.skills[2]);
 //   $("#skills").append(formattedSkill);
    
 //   var formattedSkill =  HTMLskills.replace("%data%", bio.skills[3]);
 //   $("#skills").append(formattedSkill);
    
  //  var formattedSkill =  HTMLskills.replace("%data%", bio.skills[4]);
  //  $("#skills").append(formattedSkill);
//}
$("#header").append(HTMLskillsStart);


for(skill in skills) {
    
    
    var formattedSkill = HTMLskills.replace("%data%",skills[skill]);
    
    $("#skills").append(formattedSkill);
};



for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
    
    
};

projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
       
       $(".project-entry:last").append(formattedTitle);
       $(".project-entry:last").append(formattedDates);
       $(".project-entry:last").append(formattedDescription);
       $(".project-entry:last").append(formattedImage);
        
    }
};
$("#projects").append(projects.display);

$("#mapDiv").append(googleMap);



