var userdata =JSON.parse(localStorage.getItem("userarr")) ||[];

document.querySelector("#signup_button").addEventListener("click",sigupfun);



function sigupfun(){
    console.log("inside fun")
    var name=document.querySelector("#name").value;
   
    var mob=document.querySelector("#mob").value;

    var mail=document.querySelector("#mail").value;

    var password=document.querySelector("#pass").value;

    if(name== "" || mob=="" || mail =="" || password ==""){
        alert("fill in the empty fields")
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


// HYPERLINK FOR PROFILE
document.getElementById('profile').addEventListener('click', function(){
    window.location.href = "profile.html"
  })
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "../Landingpage/index.html"
})

document.getElementById('logIn').addEventListener('click', function(){
    window.location.href = "../Profile/profile.html"
})