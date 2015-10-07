var role="Web Developer";
var name="Darren Sexton";
var bioPic="images/profile.jpg";
var welcome="Welcome to my online resume. Feel free to contact me with any questions you may have.";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcome);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 
$("#header").prepend(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

var skills=["HTML", "CSS", "Bootstraps", "Excel", "Word", "Javascript"];



var bio = {
            "name" : "Darren Sexton",
            "age" : "44",
            "location" : "1246 Thurnridge Dr. Cincinnati, Oh, 45215",
            "skills" : skills             
    
  };


var education = {
    "schools": [
        {
            "name" : "Udacity",
            "location" : "Reading, OH",
            "degree" : "Nanodegree",
            "major" : "Front end development",
            "link" : "http://www.udacity.com"
            
        },
        {
            "name" : "Sycamore Highschool",
            "location" : "Cincinnati, OH",
            "degree" : "Diploma",
            "major" : "N/A",
            "link" : "http://www.sycamoreschools.org/"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "Mane",
            "location" : "1093 Mane Way, Lebanon, OH 45036",
            "title" : "Lab Technician",
            "dates" : "2013-2014",
            "description" : "I compounded customer samples of flavors by following precise, complex formulas.I would pack and ship samples, including designated hazardous materials, to customers. I ran Spray Dry equipment to create powdered flavors ",
            "link" : "http://www.mane.com/"

            
        },
        {
            "employer" : "Kerry",
            "location" : "Woodlawn, OH",
            "title" : "Lab Technician",
            "dates" : "2010-2013",
            "description" : "I compounded customer samples of flavors by following precise, complex formulas. I performed flash point and specific gravity tests on new flavors.Pack and ship samples, including designated hazardous materials, to customers. I initiated chemical reactions that are used in formulas and as samples. ",
            "link" : "http://www.kerry.com/"

        },
        {
            "employer" : "Cargill",
            "location" : "Cincinnati, OH",
            "title" : "Compounder",
            "dates" : "2009-2010",
            "description" : "I had to maintain a food safe work area that exceeded all industry standards and government requirements. I managed detailed inventory of all products and ingredients. ",
            "link" : "http://www.cargill.com/"
        },
        {
            "employer" : "Wild Flavors",
            "location" : "1261 Pacific Ave, Erlanger, KY 41018",
            "title" : "Compounder",
            "dates" : "2008-2009",
            "description" : "I staged and packed customer orders for shipment; ensured shipments were accurate and properly packaged.  I also assisted with dry blend operations; precisely maintaining temperature and humidity levels and a clean environment.",
            "link" : "http://www.wildflavors.com/NA-EN/"
        }
    ]
};


var projects = {
    "projects": [
        {
            "title" : "Project 1 title",
            "dates" : "00/00/2015",
            "description" : "This is where I will provide a short description of what exactly this project is.",
            "image" :  "http://fillmurray.com/200/200",
            "alt" : "project 1 picture"
        },
        {
            "title" : "Project 2 title",
            "dates" : "00/00/2015",
            "description" : "This is where I will provide a short description of what exactly this project is.",
            "image" :  "http://fillmurray.com/200/200",
            "alt" : "project 2 picture"
        },
        {
            "title" : "Project 3 title",
            "dates" : "00/00/2015",
            "description" : "This is where I will provide a short description of what exactly this project is.",
            "image" : "http://fillmurray.com/200/200",
            "alt" : "project 3 picture"
        }
    ]
    
};

var email = "<a href='mailto:darrensexton01@gmail.com'>Darrensexton01@gmail.com</a>";
var mobile = "<a href='callto://15138840937'>513-884-0937</a>";
var address = "<a href='http://maps.google.com/?q=1246 thurnridge dr., cincinnati, oh, 45215' target='blank'>1246 Thurnridge Dr., Cincinnati, OH</a>";
var linked = "<a href='https://www.linkedin.com/profile/view?id=AAIAAAsOyp8B0oyL_vj-ChX8SEU8-VXIrN_TdB4&trk=nav_responsive_tab_profile' target='blank' >LinkedIn</a>";

var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedLocation = HTMLlocation.replace("%data%", address);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", linked);





 $("#header").append(HTMLskillsStart);

for(skill in skills) {
   
     
    var formattedSkill = HTMLskills.replace("%data%",skills[skill]);
    
    $("#skills").append(formattedSkill);
    
};



work.display = function(){

    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
    
        var formattedEmployers = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedEmployer = formattedEmployers.replace("#", work.jobs[job].link);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);  
    }
};

$("#workExperience").append(work.display);

projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        var formattedImage= formattedImages.replace("%datum%", projects.projects[project].alt);
       
       $(".project-entry:last").append(formattedTitle);
       $(".project-entry:last").append(formattedDates);
       $(".project-entry:last").append(formattedDescription);
       $(".project-entry:last").append(formattedImage);
       
        
    }
};
$("#projects").append(projects.display);

education.display = function() {
    for(school in education.schools) {
        
       $("#education").append(HTMLschoolStart);
       
       var formattedschoolNames = HTMLschoolName.replace("%data%", education.schools[school].name);
       var formattedschoolName = formattedschoolNames.replace("#", education.schools[school].link);
       var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
       var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
       var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
       
       $(".education-entry:last").append(formattedschoolName);
       $(".education-entry:last").append(formattedschoolDegree);
       $(".education-entry:last").append(formattedschoolLocation);
       $(".education-entry:last").append(formattedschoolMajor);
    }
}

$("#education").append(education.display);

$("#mapDiv").append(googleMap);

$("#footerContacts").append (formattedMobile);
$("#footerContacts").append (formattedEmail);
$("#footerContacts").append (formattedlinkedIn);
$("#footerContacts").append (formattedLocation);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});




