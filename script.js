function validateHeight(height){
    if(height && height < 150){
        alert("⚠️ الطول لا يجب أن يقل عن 150 سم");
        return false;
    }
    return true;
}

function validateWeight(weight){
    if(weight && weight > 80){
        alert("⚠️ الوزن لا يجب أن يزيد عن 80 كجم");
        return false;
    }
    return true;
}

function validatePassportExpiry(date){
    if(!date) return true;

    const expiry = new Date(date);
    const today = new Date();
    today.setMonth(today.getMonth() + 6);

    if(expiry <= today){
        alert("⚠️ يجب أن يكون الجواز صالح لأكثر من 6 أشهر");
        return false;
    }
    return true;
}

function updatePreview(){

    const name = fullName.value;
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const expiry = document.getElementById("expiryDate").value;
    const period = document.getElementById("period").value;

    if(!validateHeight(height)) return;
    if(!validateWeight(weight)) return;
    if(!validatePassportExpiry(expiry)) return;

    document.getElementById("previewName").innerText = name;
    document.getElementById("previewSalary").innerText = salary.value;
    document.getElementById("previewContract").innerText = "مدة العقد: سنتان";

    document.getElementById("previewPhysical").innerHTML =
        "الطول: " + height + " سم | الوزن: " + weight + " كجم";

    document.getElementById("previewExperience").innerHTML =
        "المدة: " + (period ? period + " سنة" : "-");

    const photo = document.getElementById("photo").files[0];
    if(photo){
        const reader = new FileReader();
        reader.onload = e => previewPhoto.src = e.target.result;
        reader.readAsDataURL(photo);
    }

    const passportScan = document.getElementById("passportScan").files[0];
    if(passportScan){
        const reader = new FileReader();
        reader.onload = e => previewPassportScan.src = e.target.result;
        reader.readAsDataURL(passportScan);
    }

    preview.scrollIntoView({behavior:'smooth'});
}
