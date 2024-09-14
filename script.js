var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // const username = (document.getElementById('username') as HTMLInputElement).value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var professionalSummary = document.getElementById('professional-summary').value;
    var proffession = document.getElementById('profession').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h1><strong><span contenteditable=\"true\">".concat(name, "</span></strong></h1>\n    <h3 contenteditable=\"true\">").concat(proffession, "</h3>\n    <h4><strong>Personal Info</strong></h4>\n    <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><strong>Address:</strong><span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><strong>LinkedIn URL:</strong><span contenteditable=\"true\">").concat(linkedin, "</span></p>\n    <h4>About Me</h4>\n    <p><strong>Professional Summary:</strong><span contenteditable=\"true\">").concat(professionalSummary, "</span></p>\n    <h4><strong>Education</strong></h4>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h4 >Work Experience</h4>\n    <p contenteditable=\"true\">").concat(workExperience, "</p>\n    <h4>Skills</h4>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // ${window.location.pathname}
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.log('The resume display is not working!');
    }
});
// downloadPdf.addEventListener('click', () => {
//     window.print();
// });
// Rest of your code for loading data
// 
