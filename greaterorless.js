function comparenumbers(a,b){
    if (a>b){
        return a;
    }
    else if(a<b){
        return b;
    }
    else{
        return "equal";
    }
}
module.exports=comparenumbers;