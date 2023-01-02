let forms = document.querySelectorAll(".form-control")
let submit = document.querySelector("#submit-btn")
let links = document.querySelectorAll(".link")
let form_div = document.querySelector(".form")
let page_div = document.querySelector(".page")
let code_dump = document.querySelector("#code-dump")
let outputs = document.querySelectorAll(".output")
let form_links = document.querySelectorAll(".form-link")
let colors = document.querySelector(":root")
let mode_icon = document.querySelector("#darkmode")

let dark_mode_state = false;

function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

let workcount = 1;
$("#add-experience").click(function(){
    let d = document.createElement("div");
    d.className = "workitem";
    d.innerHTML = '<input type="text" class="form-control" placeholder="Title of project"><textarea class="form-control" rows="3" placeholder="Describe the project"></textarea><input type="text" class="form-link"  placeholder="Link">'
    document.getElementById("workitems").appendChild(d)
    workcount+=1
})

$("#remove-experience").click(function(){
    document.getElementById("workitems").removeChild(document.getElementById("workitems").lastElementChild)
    workcount-=1
})

$("#submit-btn").click(function(){
    $(".page").toggle()
    $(".form").toggle()
    $("#edit").toggle()
    $("#code").toggle()
    if (dark_mode_state)
    {
        modeToggleLight()
    }

for (let i = 0; i < 2; i++)
{
    outputs[i].textContent = forms[i].value
}

let contactlink = document.querySelectorAll(".icontact-link")

if (forms[2] != "")
contactlink[0].href = "mailto:"+ forms[2].value

if (forms[3]!= "")
contactlink[1].href ="https://github.com/"+ forms[3].value;

if (forms[4]!="")
contactlink[2].href ="https://instagram.com/"+ forms[4].value;
    else 
    $(contactlink[2]).remove();

if (forms[5].value !=""){
document.querySelector(".about-p").textContent =forms[5].value 
document.querySelector("#about h2").textContent ="About "+ forms[0].value
}
else
$("#about").remove();   

if (workcount!=document.getElementsByClassName("card").length){
    for (let i = 0; i<workcount; i++)
    {
        d = document.createElement('div')
        d.innerHTML = '<div class="col-lg-12 mt-12"><div class="card"><h4 class="card-title output">Title</h4><p class="card-text output"></p><div class="text-center"><a href="#" class="btn btn-dark link">Link</a></div></div></div>'
        document.getElementById("workdiv").appendChild(d)
    }
}

forms = document.querySelectorAll(".form-control")
outputs = document.querySelectorAll(".output")
form_links = document.querySelectorAll(".form-link") //refreshing list of divs and forms
links = document.querySelectorAll(".link")

for (let i = 6; i < forms.length; i++)
{
    outputs[i-4].textContent = forms[i].value
}


    for (let i = 0; i < form_links.length; i++)
    {
        if (form_links[i].value.startsWith('https://'))
        links[i].href =form_links[i].value;
        else if (form_links[i].value.startsWith('http://'))
        links[i].href =form_links[i].value;
        else 
        links[i].href ="https://"+ form_links[i].value;        
    }

})


$("#edit").click(function(){
    $(".page").toggle()
    $(".form").toggle()
    $("#edit").toggle()
    $("#code").toggle()
})


$("#code").click(function(){ //scraping my own site
    let code = '<!DOCTYPE html>\n<html lang="en"><head>\n<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Portfolio Page</title>'+'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>'+ "<style>\n"
    for (let i=0; i<document.styleSheets[0].cssRules.length; i++)
    code += document.styleSheets[0].cssRules[i].cssText+"\n"
    code+= "</style>\n</head>\n<body>\n" + $(".page").html() + '</body>\n</html>'
    $(".page").toggle()
    $("#edit").toggle()
    $("#code").toggle()
    code_dump.textContent = code;
    selectElementText(code_dump)
})

function modeToggleDark()
{
    console.log(colors)
    colors.style.setProperty("--main", "#1D2A35")
    colors.style.setProperty("--text", "white")
}

function modeToggleLight()
{
    colors.style.setProperty("--main", "white")
    colors.style.setProperty("--text", "black")
    mode_icon.style.background = "white";
    mode_icon.style.color = "#1D2A35";
}
$("#darkmode").click( function(){
    if (!dark_mode_state)
    {
    modeToggleDark();
    dark_mode_state = true;
    mode_icon.style.background = "#1D2A35";
    mode_icon.style.color = "white";
    }
    else 
    {
        modeToggleLight();
        dark_mode_state = false;
    
    }
})


// TODO: fix dark mode look for web page