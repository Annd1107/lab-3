var a,b,c
a=prompt("Ehnii too")
b=prompt(" + , - , / , * ")
c=prompt("suuliin too")
switch(b){
    case "+":
        alert(a/1+c/1);
        break;
    case "-":
        alert(a/1-c/1);
        break;
    case "/":
        alert(a/c);
        break;
    case "*":
        alert(a*c);
        break;
    default:
        alert("error")
}