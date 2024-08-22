// ---------------------------------------------------------------------FOR LOOPS----------------------------------------------------------------------------------
for(var i=1; i<=5;i++){
    console.log(i);
}


for(var i =1; i<=5;i++){
    for(var j=1;j<=5; j++){
        console.log("i,j ",i,j);
    }
}


for(var i =1; i<=5;i++){
    for(var j=1;j<=i; j++){
        for(var k=1;k<=j;k++){
         console.log("i,j,k ",i,j,k);
        }
    }
}


// for(var i =1; i<=5;i++){
//     for(var j=1;; j++){
//         console.log("i,j ",i,j);             [Infinite loop example]
//     }
// }


for(var i=1; i<=5;i++){
    let string = ''
    for(var j=1; j<=i; j++){
        string=string+j;
    }console.log(string);
}


for(var i=1; i<=5;i++){
    let string = ''
    for(var j=1; j<=i; j++){
        string=string+i;
    }console.log(string);
}


for(var i=1; i<=5;i++){
    let string = ''
     for(var j=1; j<=i; j++){         // [To print # in a form of a pyramid.]
        string=string+"#";
    }console.log(string);
}


for(var i=1; i<=4;i++){
    let string=''
    for(var j=1;j<=i;j++){
        string=string+String.fromCharCode(64+i);        //[To print A,BB,CCC,DDDD etc in a form of pyramid.]
    }console.log(string);
}


for(var i=1; i<=4;i++){
    let string=''
    for(var j=1;j<=i;j++){
        string=string+String.fromCharCode(64+j);       //[To print A,AB,ABC,ABCD in the form of pyramid.]
    }console.log(string);
}


for(var i=1; i<=4;i++){
    let string=''
    for(var j=1;j<=i;j++){
        string=string+String.fromCharCode(69-j);      //[To print the upper type of question but starting from D and in inverse.]
    }console.log(string);
}


for(var i=1; i<=4;i++){
    let string=''
    for(var j=1;j<=i;j++){
        string=string+String.fromCharCode(69-i);      //[To print D,CC,BBB,AAAA in the form of pyramid.]
    }console.log(string);
}


for(var i=1; i<=4;i++){
    let string=''
    for(var j=i;j>=1;j--){
        string=string+String.fromCharCode(64+j);       //[To print A,BA,CBA,DCBA in the form of pyramid.]
    }console.log(string);
}