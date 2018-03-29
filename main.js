// Ajax call(XMLHttpRequest) initiation
function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState === 4 && xhr.status =="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
// function calling
loadjson("data.json",function(text)
{
let data=JSON.parse(text);
console.log(data);
basics(data.left);
education(data.Education);
skill(data.skills);
})
// for main div calling
// var main=document.queryselector('.main');
//  for main div calling
var main=document.getElementById('main');
// element creation
var left=document.createElement('div');
// add class name to element
left.classList.add("left");
// add id to element
// left.setAttribute("id","left");
// appending to main div
left.textContent="Profile Details:";
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
function basics(leftside)
{
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
left.appendChild(email);
var mobile=document.createElement("h3");
mobile.textContent=leftside.mobile;
left.appendChild(mobile);
console.log(left);
}
var right=document.createElement("div");
right.classList.add("right");
left.setAttribute("id","right");
main.appendChild(right);
var edu=document.createElement("div");
edu.classList.add("edu1")
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(Educa)
{
for(i in Educa)
{
  var e1=document.createElement("div");
  e1.classList.add("edu2");
  e1.textContent=Educa[i].course;
  var ul=document.createElement("ul");
  for(j in Educa[i].college)
  {
    var li=document.createElement("li");
li.textContent=Educa[i].college[j];
ul.appendChild(li);
e1.appendChild(ul);
edu.appendChild(e1);
console.log(right);
}
}
}
function skill(skills)
{
  var skill_tittle=document.createElement("div");
  skill_tittle.classList.add("teach_skills");
  skill_tittle.textContent="Techniqual Skills:";
  skill_tittle.appendChild(document.createElement("HR"));
  right.appendChild(skill_tittle);

// table operation
var table=document.createElement("table");
var row="";
for(var i=0; i<skills.length;i++)
{
  row=row+"<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>"
}
table.innerHTML=row;
skill_tittle.appendChild(table);
}
