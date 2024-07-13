document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const resumeText = document.getElementById('resume-text').value;
    
    const skills = extractSkills(resumeText);
    const experience = extractExperience(resumeText);
    
    displayResults(skills, experience);
});

function extractSkills(text) {
    const skillsPattern = /Skills\s*:\s*([\s\S]+?)(?:\n\n|\nExperience|$)/i;
    const match = skillsPattern.exec(text);
    if (match) {
        const skills = match[1].split(/[\n,]/).map(skill => skill.trim());
        return skills.filter(skill => skill.length > 0);
    }
    return [];
}

function extractExperience(text) {
    const experiencePattern = /(\d+\+?)\s*years?\s*of\s*experience/gi;
    const matches = [];
    let match;
    while ((match = experiencePattern.exec(text)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}

function displayResults(skills, experience) {
    const skillsList = document.getElementById('skills-list');
    const experienceList = document.getElementById('experience-list');
    
    skillsList.innerHTML = '';
    experienceList.innerHTML = '';
    
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    
    experience.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = `${exp} years`;
        experienceList.appendChild(li);
    });
}

// TESTING CODE 

/*
Laiba Aslam
Email: laiba.aslam@gmail.com
Phone: 030020202020

Skills: Python, Java, SQL, Machine Learning

Experience:
- Software Developer at ABC Corp: 3 years of experience in software development
- Data Analyst at XYZ Inc: 2 years of experience in data analysis
- Senior Developer at DEF Ltd: 5+ years of experience in software engineering
*/
