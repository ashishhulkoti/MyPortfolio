// //index.js

// const hamburger = document.getElementById('hamburger'); 
// const menu = document.querySelector('.menu'); 

// hamburger.addEventListener('click', function () { 
//     const hamIcon = this.querySelector('.hamburger-icon'); 
//     const crossIcon = this.querySelector('.cross-icon'); 
//     if (hamIcon.style.display === "none") { 
//         hamIcon.style.display = "inline-block"
//         menu.style.display = "none"
//         crossIcon.style.display = "none"
//     } 
//     else { 
//         crossIcon.style.display = "inline-block"
//         hamIcon.style.display = "none"
//         menu.style.display = "block"
//     } 
// });



// index.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("resume.json")
        .then(response => response.json())
        .then(data => {
            // Basic Info
            document.getElementById("name").textContent = data.name;
            document.getElementById("location").textContent = data.location;
            document.getElementById("email").textContent = data.email;
            document.getElementById("email").href = `mailto:${data.email}`;
            document.getElementById("linkedin").href = data.linkedin;
            document.getElementById("phone").textContent = data.phone;

            // Education
            const educationList = document.getElementById("education-list");
            data.education.forEach(edu => {
                let li = document.createElement("li");
                li.innerHTML = `<strong>${edu.degree}</strong> - ${edu.university} (GPA: ${edu.gpa}, ${edu.year})`;
                educationList.appendChild(li);
            });

            // Skills
            const skillsList = document.getElementById("skills-list");
            data.skills.forEach(skill => {
                let li = document.createElement("li");
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            // Projects
            const projectsList = document.getElementById("projects-list");
            data.projects.forEach(proj => {
                let li = document.createElement("li");
                li.innerHTML = `<strong>${proj.title}</strong>: ${proj.description}`;
                projectsList.appendChild(li);
            });

            // Experience
            const experienceList = document.getElementById("experience-list");
            data.experience.forEach(exp => {
                let li = document.createElement("li");
                li.innerHTML = `<strong>${exp.role}</strong> at ${exp.company} (${exp.duration})<br><ul>` + 
                    exp.responsibilities.map(resp => `<li>${resp}</li>`).join("") + `</ul>`;
                experienceList.appendChild(li);
            });

            // Certifications
            const certificationsList = document.getElementById("certifications-list");
            data.certifications.forEach(cert => {
                let li = document.createElement("li");
                li.textContent = cert;
                certificationsList.appendChild(li);
            });

        })
        .catch(error => console.error("Error fetching resume data:", error));
});
