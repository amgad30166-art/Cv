function validateHeight(h){
if(h < 150){ alert("⚠️ الطول لا يجب أن يقل عن 150 سم"); return false;}
return true;
}

function validateWeight(w){
if(w > 80){ alert("⚠️ الوزن لا يجب أن يزيد عن 80 كجم"); return false;}
return true;
}

function validatePassportExpiry(date){
const expiry = new Date(date);
const today = new Date();
today.setMonth(today.getMonth()+6);
if(expiry <= today){ alert("⚠️ يجب أن يكون الجواز صالح لأكثر من 6 أشهر"); return false;}
return true;
}

function updatePreview(){

const height = parseInt(height.value);
const weight = parseInt(weight.value);
const expiry = expiryDate.value;

if(!validateHeight(height)) return;
if(!validateWeight(weight)) return;
if(!validatePassportExpiry(expiry)) return;

pName.innerText = fullName.value;
pNationality.innerText = nationality.value;
pReligion.innerText = religion.value + " – " + (religion.value==="Muslim"?"مسلمة":"مسيحية");
pMarital.innerText = maritalStatus.value + " – " + (maritalStatus.value==="Single"?"أعزب":"متزوج");
pChildren.innerText = children.value;
pHeight.innerText = height + " سم";
pWeight.innerText = weight + " كجم";

pCountry.innerText = country.value;
pPeriod.innerText = period.value + " سنة";
pPosition.innerText = position.value;

pPassport.innerText = passportNumber.value;
pExpiry.innerText = expiryDate.value;

pSalary.innerText = "SAR " + salary.value;

const photo = document.getElementById("photo").files[0];
if(photo){
const reader = new FileReader();
reader.onload = e=> previewPhoto.src=e.target.result;
reader.readAsDataURL(photo);
}

const pass = document.getElementById("passportScan").files[0];
if(pass){
const reader = new FileReader();
reader.onload = e=> previewPassportScan.src=e.target.result;
reader.readAsDataURL(pass);
}

preview.scrollIntoView({behavior:'smooth'});
}
