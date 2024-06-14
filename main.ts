//1
/// call back function

/// The Function which  passed as an argument to another function is called Callback Function  
function func1(){

    console.log("Hello World!");
}

function func2(callback:any){
    callback();
}

func2(func1); // here func1 is pass as an argument to func2 so func1 is a callback Function,...so as the callback function which is func1 is pass
            // as an argument to func2 so it assign to the parameter of the func2 (callback) now the whole call back function (func1) is inside the
            // callback paramter of func2 so now what ever we do with the paramter (callback)  it effects the func1 in our case we call it.




//2
// We can also return the values. how?
// return key word return the value to the caller of it function
function func3(){

    return("Hello World!"); // return keyword returns the value to one who calls his function 

}


function func4(callback:any){

   let returnValue = callback();
   console.log(returnValue);
}

func4(func3);
// as we pass func3 as an argument to func4 so our whole func3 is assign the the parameter of func4 (callBack), so as we call the
// callback() paramter the func3 return the value to it 


//3
// lets do sum with callback function

function func5(a:number, b:number){

   console.log(a+b);
}

function func6(a:number,b:number,callback:any){

    callback(a,b);
}
func6(3,4,func5); // as we call the block of code exceute inside the block of code we have call the call back function (func5) as pass a and b



//4
function greetings2(){
    console.log("How are you");
}

function greetings(name:string , callBack:any){
    console.log("Hello " + name);
    callBack();
}

greetings("Azan",greetings2)