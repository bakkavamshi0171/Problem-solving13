rows =5;
for(i=1;i<=2*rows-1;i++){
    stars = (i<=rows) ? i : 2*rows-i;
    spaces = (i<=rows)? 2*rows - 2*i - 1 : (2*i)-(2*rows)-1;
    spaces = (spaces<0)?0:spaces
    res =""
    for(j=1;j<=stars;j++){
        res =res+"*"
    }
    if(i==rows)
        console.log(res+ res.slice(0,res.length-1))
    else
        console.log(res + " ".repeat(spaces)+ res)
}

let rows =+prompt("enter a no of rows : ")
for(i=1;i<=2*rows-1;i++){
    stars = (i<=rows) ? i : 2*rows-i;
    spaces = (i<=rows) ? 2*rows -2*i-1 : (2*i)-(2*rows)-1;
    spaces = (spaces<0) ? 0 : spaces
    res =""
    for(j=1;j<=stars;j++){
        if(j%2==0)
            res =res+"0";
        else
            res = res + "1"
    }
    if(i==rows)
        console.log(res + res.slice(1, rows.length));
    else
        console.log(res+" ".repeat(spaces) + res)
   
}