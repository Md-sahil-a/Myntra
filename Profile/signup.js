var userdata =JSON.parse(localStorage.getItem("userarr")) ||[];

document.querySelector("button").addEventListener("click",sigupfun);

function sigupfun(){
    var name=document.querySelector("#name").value;
   
    var mob=document.querySelector("#mob").value;

    var mail=document.querySelector("#mail").value;

    var password=document.querySelector("#pass").value;

    if(name== "" || mob=="" || mail =="" || password ==""){
        alert("fill in the empty field")
    }

else {
       var userobj ={
                  name:name,
                  mob:mob,
                  mail:mail,
                  password:password
                 };

        userdata.push(userobj);
        
        localStorage.setItem("userarr",JSON.stringify(userdata));


        alert("signed up successfully");

        document.querySelector("#mob").value="";
        document.querySelector("#mail").value="";
        document.querySelector("#pass").value="";
        document.querySelector("#name").value="";

     window.location.href="profile.html"
     }
    
    
}
