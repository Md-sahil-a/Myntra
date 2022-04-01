//   use wihlist data from local storage  (JSON.pa....)
//or else []

var cartarr =[
    {
        image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17583708/2022/3/19/7f177aab-9715-4052-b88d-b14e5d27b9c51647683759688JAIPURFABRICUnisexGreenBedsheets1.jpg",
               name:"JAIPUR FABRIC",
                offer:"(65% OFF)",
               para:"Green & White Printed Bedsheet",
               price:"Rs. 1199",
            strikedoffprice:"Rs. 2599" 
        },
        {
            image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
                   name:"JAIPUR FABRIC",
                    offer:"(65% OFF)",
                   para:"Green & White Printed Bedsheet",
                   price:"Rs. 1199",
                strikedoffprice:"Rs. 2599" 
            },
            {
              image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
                     name:"JAIPUR FABRIC",
                      offer:"(65% OFF)",
                     para:"Green & White Printed Bedsheet",
                     price:"Rs. 1199",
                  strikedoffprice:"Rs. 2599" 
              }
        ]
       
        var itemcount =cartarr.length;

        var MRP =  cartarr.reduce(function(sum,a,ind){
          return sum+ +(cartarr[ind].strikedoffprice.split(" ")[1])
        },0);

        var amount = cartarr.reduce(function(sum,a,ind){
          return sum+ +(cartarr[ind].price.split(" ")[1])
        },0);
        var initial_price =amount;
        var discount = MRP - amount;

        console.log(amount)
        console.log(MRP)
        console.log(discount);

        document.querySelector(".amount_pay").innerText= amount;
        document.querySelector(".filldiscount").innerText= "- "+discount;
        document.querySelector(".totalprice").innerText= MRP;
        document.querySelector(".pricedets").innerText= `PRICE DETAILS ( ${itemcount} Items)`;


        cartarr.map(function(ele,ind){
             
            var box = document.createElement("div");
            box.className ="main"
            

            var imgbox = document.createElement("div");
            
            var image =document.createElement("img");
            image.src = ele.image_url
           imgbox.append(image)

          var detailsbox = document.createElement("div");

          var name =document.createElement("p");
          name.innerText=ele.name
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
          // buttonbox.id ="removefromcart"
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
          window.location.href ="cart.html";
         
        }

        document.querySelector(".makeorder").addEventListener("click",paymentpage)

        function paymentpage(){
          window.location.href="wishlist.html";
        }

        document.querySelector(".apply").addEventListener("click",discountfun);

        function discountfun(){
          var in_promo =document.querySelector("#promo").value
          if(initial_price=amount && in_promo =="MYNTRA300"){
            document.querySelector(".amount_pay").innerText= amount-300;
            document.querySelector("#promo").value="";
           
          }
        }
       