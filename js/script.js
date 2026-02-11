const maps = {
    nat: { "Kenya": "كينيا", "Uganda": "أوغندا", "Ethiopia": "إثيوبيا" },
    rel: { "Muslim": "مسلمة", "Christian": "مسيحية" },
    mar: { "Single": "عزباء", "Married": "متزوجة" }
};

function updatePreview() {
    document.getElementById("previewOffice").innerText = document.getElementById("officeName").value;
    document.getElementById("previewName").innerText = document.getElementById("fullName").value.toUpperCase();
    document.getElementById("previewSalary").innerText = document.getElementById("salary").value + " ريال";
    
    // Maps
    const nat = document.getElementById("nationality").value;
    document.getElementById("previewNationality").innerText = maps.nat[nat] || nat;
    
    const rel = document.getElementById("religion").value;
    document.getElementById("previewReligion").innerText = maps.rel[rel] || rel;
    
    const mar = document.getElementById("maritalStatus").value;
    document.getElementById("previewMarital").innerText = maps.mar[mar] || mar;

    document.getElementById("previewProfession").innerText = document.getElementById("profession").value;

    // Age
    const dob = new Date(document.getElementById("dob").value);
    const age = new Date().getFullYear() - dob.getFullYear();
    document.getElementById("previewAge").innerText = isNaN(age) ? "---" : age;

    // Skills
    const skillsGrid = document.getElementById("previewSkillsGrid");
    skillsGrid.innerHTML = `
        <div class="skill-box">التنظيف: <b>${document.getElementById("cleaning").value}</b></div>
        <div class="skill-box">الطبخ: <b>${document.getElementById("cooking").value}</b></div>
    `;

    // Photos
    handleImage("photo", "previewPhoto");
    handleImage("passportScan", "previewPassportScan");
}

function handleImage(inputId, previewId) {
    const file = document.getElementById(inputId).files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById(previewId).src = e.target.result;
        reader.readAsDataURL(file);
    }
}
