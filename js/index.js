let forms = document.querySelectorAll(".form-control")
let submit = document.querySelector("#submit-btn")
let outputs = document.querySelectorAll(".output")

$("#submit-btn").click(function(){
    for (let i = 0; i < forms.length; i++)
{
    console.log(forms[i].value)
    outputs[i].textContent = forms[i].value
}
})

$(".code").click(function(){
    console.log()
})
