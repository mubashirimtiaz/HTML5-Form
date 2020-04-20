const inputs = document.querySelectorAll('input[type="text"]');

let pattern = {
    userName : /^[a-z]{3,30}((\s[a-z]{3,30})+)?$/i,
    userEmail : /^[\w\d.]{3,30}@[\w\d]{3,20}\.[\w]{2,20}((\.[\w]{2,20})+)?$/
}

function validate(item,regex) {
    if(regex.test(item.value)){
        item.className = "valid";
    }else{
        item.className = "invalid";
    }
}

inputs.forEach(function(input) {
    input.addEventListener('keyup',function(e) {
        // e.target = pattern[e.target.Attribute.name.value];
        validate(e.target,pattern[e.target.attributes.name.value]);
    })
})