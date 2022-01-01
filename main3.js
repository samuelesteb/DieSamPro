
var passw = document.getElementById('passw'),
    privado = document.getElementById('privado'),
    candado=0;

    function cambio()
    {   if(candado==0)
        {
            privado.classList.add('most')   
            candado=1;
        }
        else{privado.classList.remove('most');
        candado=0}
    }

    passw.addEventListener('click',cambio,true)