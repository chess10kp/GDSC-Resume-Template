let forms = document.querySelectorAll(".form-control")
let submit = document.querySelector("#submit-btn")
let outputs = document.querySelectorAll(".output")
let form_links = document.querySelectorAll(".form-link")
let links = document.querySelectorAll(".link")
let form_div = document.querySelector(".form")
let page_div = document.querySelector(".page")
let code_dump = document.querySelector("#code-dump")


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

$("#submit-btn").click(function(){
    $(".page").toggle()
    $(".form").toggle()
    $("#edit").toggle()
    $("#code").toggle()

    for (let i = 0; i < forms.length; i++)
{
    console.log(forms[i].value)
    outputs[i].textContent = forms[i].value
}
    for (let i = 0; i < form_links.length; i++)
    {
        if (form_links[i].value.startsWith('https://'))
        links[i].href =form_links[i].value;
        else if (form_links[i].value.startsWith('http://'))
        links[i].href =form_links[i].value;
        else 
        links[i].href ="https://"+ form_links[i].value;

        console.log(links[i].href)
    }

})


$("#edit").click(function(){
    $(".page").toggle()
    $(".form").toggle()
    $("#edit").toggle()
    $("#code").toggle()
})


$("#code").click(function(){
    let code = '<!DOCTYPE html>\n<html lang="en"><head>\n<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Portfolio Page</title>'
    code+='<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>'
    code += "<style>\n"
    for (let i=0; i<document.styleSheets[0].cssRules.length; i++)
    code += document.styleSheets[0].cssRules[i].cssText+"\n"
    code+= "</style>\n</head>\n<body>\n"
    code += $(".page").html()
    code += '</body>\n</html>'
    $(".page").toggle()
    $("#edit").toggle()
    $("#code").toggle()
    code_dump.textContent = code;
    selectElementText(code_dump)
})