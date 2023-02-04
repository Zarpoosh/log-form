let uname=document.querySelector('name');
let password=document.querySelector('password');
let form=document.querySelector('form');
let errorElement=document.querySelector('error');

form.addEventListener('submit',(e) => {
    let massages=[]
    if(uname.value='' ||uname.value==null){
        massages.push('نام کاربری وارد نشده')
    }

    if(password.value.length<=5){
        massages.push('رمز عبور باید بیشتر از 6 کاراکتر باشد.')
    }
    if(password.value.length>=8){
        massages.push('رمز عبور باید کمتر از 8 کاراکتر باشد.')
    }
    if(massages.length>0){
        e.preventDefault()
        errorElement.inneText=massages.join(',')
    }
})