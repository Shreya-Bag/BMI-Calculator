let button = document.querySelector("button");
button.addEventListener('click',()=>{
    //read the data
    const height1 =  document.getElementById('first1');
    let h1 = Number(height1.value);
    const height2 =  document.getElementById('first2');
    let h2 = Number(height2.value)
    const weight =  document.getElementById('second');
    let w = Number(weight.value);
    let h1tom = h1*0.3048;
    let h2tom = h2*0.0254;
    let meter = h1tom+h2tom;
    let ans =  (w/(meter*meter)).toFixed(2);
   
    //output the result
    const result = document.getElementById('result');
    if(ans<18.5){
        result.innerHTML="Result : "+ans+" kg/m<sup>2</sup> (Underweight)";
        result.style.color="yellow";
    }
    else if(ans>=18.5 && ans<= 24.9){
        result.innerHTML="Result : "+ans+" kg/m<sup>2</sup> (Healthy Weight)";
        result.style.color="green";
    }
    else if(ans>=25.0 && ans<= 29.9){
        result.innerHTML="Result : "+ans+" kg/m<sup>2</sup> (Over Weight)";
        result.style.color="orange";
    }
    else{
        result.innerHTML="Result : "+ans+" kg/m<sup>2</sup> (Obesity)";
        result.style.color="red";
    }

    
})