var screen=document.querySelector('#screen');

function sin(){
	document.calcul.result.value=Math.sin(document.calcul.result.value);
	}

	function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
	}

	function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
	}

	function AC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function cubic(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
	}

	function sqrt2(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
	}

	function sqrt3(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
	}

	function num(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
	}

	function log()
    {
        document.calcul.result.value=Math.log(document.calcul.result.value);
    }

    function pi()
    {
        document.calcul.result.value= 3.14159265359;
    }

    function e()
    {
        document.calcul.result.value=2.71828182846;
    }
	function fact()
    {
        var i, num, f;
        f=1
        num=document.calcul.result.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        document.calcul.result.value=f;
    }