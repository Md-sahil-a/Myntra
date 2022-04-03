

var cartarr = JSON.parse(localStorage.getItem("BagListObj"))||[];
       

        var itemcount =cartarr.length;
        localStorage.setItem("itemcount",itemcount)


        var MRP =  cartarr.reduce(function(sum,a,ind){
          return sum+ +(cartarr[ind].strikedoffprice.split(" ")[1])
        },0);
        localStorage.setItem("MRP",MRP)

       
       
        var amount = cartarr.reduce(function(sum,a,ind){
          return sum+ +(cartarr[ind].price.split(" ")[1])
        },0);
        localStorage.setItem("amount",amount)

        
       
        var discount = MRP - amount;
        localStorage.setItem("discount",discount)

        document.querySelector(".amount_pay").innerText= amount;
        document.querySelector(".filldiscount").innerText= "- "+discount;
        document.querySelector(".totalprice").innerText= MRP;
        document.querySelector(".pricedets").innerText= `PRICE DETAILS ( ${itemcount} Items)`;


        cartarr.map(function(ele,ind){
          // document.querySelector(".container").innerText = "" 
            var box = document.createElement("div");
            box.className ="main"
            

            var imgbox = document.createElement("div");
            
            var image =document.createElement("img");
            image.src = ele.image_url
           imgbox.append(image)

          var detailsbox = document.createElement("div");

          var name =document.createElement("p");
          name.innerText=ele.brand
          name.style.fontSize="20px";
          name.style.marginBottom ="-8px"


          var para =document.createElement("p");
          para.innerText=ele.para ;
          para.style.color="gray"

          var price = document.createElement("span");
          price.innerText = ele.price

          var strikedprice = document.createElement("span");
          strikedprice.innerText = ele.strikedoffprice;
          strikedprice.style.textDecoration = "line-through";
          strikedprice.style.color ="gray";


          var offer = document.createElement("span");
          offer.innerText =ele.offer;
          offer.style.color="red";


          var pricepara =document.createElement("p");
          pricepara.append(price,strikedprice)
          
          detailsbox.append(name,para,pricepara,offer)

          var buttonbox = document.createElement("div");
          
          var remove =document.createElement("button");

          remove.innerText ="REMOVE";
          remove.addEventListener("click",function(){
            removeitem(ind)
          })

          
          
          buttonbox.append (remove)
          
          
          
          box.append(imgbox,detailsbox,buttonbox)

        document.querySelector(".container").append(box)

        })

        document.querySelector(".wishlistlink").addEventListener("click",sendtowish)
        function sendtowish (){
          window.location.href ="wishlist.html"
        }


          function removeitem(ind){
          cartarr.splice(ind,1);
          localStorage.setItem("BagListObj",JSON.stringify(cartarr))
          window.location.href ="cart.html";
         
        }

        document.querySelector(".makeorder").addEventListener("click",profile)

        function profile(){
          window.location.href="../Profile/signup.html";
        }

        document.querySelector(".apply").addEventListener("click",discountfun);

        function discountfun(){

          var payable_amount = +(localStorage.getItem("amount"));
          var int_promo = document.querySelector("#promo").value;

          if( payable_amount>300 && int_promo=="MYNTRA300")
           {
          amount = amount-300;
          discount =discount+300;
          localStorage.setItem("amount",amount)  ;
          localStorage.setItem("discount",discount)
          document.querySelector(".amount_pay").innerText= amount;
          document.querySelector(".filldiscount").innerText= "- "+discount;

          document.querySelector(".apply").removeEventListener("click",discountfun);
           }
            // console.log( amount, discount)

        }

document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = "../Landingpage/index.html";

}) 

document.querySelector("#second").addEventListener("click",function(){
  window.location.href="../Profile/signup.html";
})



        

      

