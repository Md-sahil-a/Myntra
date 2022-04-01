// var cartarr =
// [
//     {
//         image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17583708/2022/3/19/7f177aab-9715-4052-b88d-b14e5d27b9c51647683759688JAIPURFABRICUnisexGreenBedsheets1.jpg",
//                name:"JAIPUR FABRIC",
//                 offer:"(65% OFF)",
//                para:"Green & White Printed Bedsheet",
//                price:"Rs. 1199",
//             strikedoffprice:"Rs. 2599" 
//         },
//         {
//             image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
//                    name:"JAIPUR FABRIC",
//                     offer:"(65% OFF)",
//                    para:"Green & White Printed Bedsheet",
//                    price:"Rs. 1199",
//                 strikedoffprice:"Rs. 2599" 
//             },
//             {
//               image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
//                      name:"JAIPUR FABRIC",
//                       offer:"(65% OFF)",
//                      para:"Green & White Printed Bedsheet",
//                      price:"Rs. 1199",
//                   strikedoffprice:"Rs. 2599" 
//               },
//               {
//                 image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17583708/2022/3/19/7f177aab-9715-4052-b88d-b14e5d27b9c51647683759688JAIPURFABRICUnisexGreenBedsheets1.jpg",
//                        name:"JAIPUR FABRIC",
//                         offer:"(65% OFF)",
//                        para:"Green & White Printed Bedsheet",
//                        price:"Rs. 1199",
//                     strikedoffprice:"Rs. 2599" 
//                 },
//                 {
//                     image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
//                            name:"JAIPUR FABRIC",
//                             offer:"(65% OFF)",
//                            para:"Green & White Printed Bedsheet",
//                            price:"Rs. 1199",
//                         strikedoffprice:"Rs. 2599" 
//                     },
//                     {
//                       image_url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15565160/2021/9/29/30b3ec0b-e7f6-43b1-821f-a5c1afddd16b1632898392141-Louis-Philippe-Men-Shirts-1501632898391574-1.jpg",
//                              name:"JAIPUR FABRIC",
//                               offer:"(65% OFF)",
//                              para:"Green & White Printed Bedsheet",
//                              price:"Rs. 1199",
//                           strikedoffprice:"Rs. 2599" 
//                       },
           
//         ]

var cartarr =JSON.parse(localStorage.getItem("wishListObj"))||[];

        var itemcount = cartarr.length;
        document.querySelector(".wishcount").innerText =` ${itemcount} Items`

        cartarr.map(function(ele,ind){

            var box =document.createElement("div")
            
           
            var image =document.createElement("img")
            image.src =ele.image_url;

            var imgbox =document.createElement("div")
            box.className ="imgbox"
            imgbox.append(image)

            box.append(imgbox)

            var para =document.createElement("p");
            para.innerText=ele.para ;
            para.style.color="gray";
            box.append(para)

            var price = document.createElement("span");
            price.innerText = ele.price
            price.style.color ="black"

          var strikedprice = document.createElement("span");
          strikedprice.innerText = ele.strikedoffprice;
          strikedprice.style.textDecoration = "line-through";
          strikedprice.style.color ="gray";


          var offer = document.createElement("span");
          offer.innerText =ele.offer;
          offer.style.color="red";

          var pricepara =document.createElement("p");
          pricepara.className="pricepara"
          pricepara.append(price,strikedprice,offer)
          box.append(pricepara)

          var buttonrm =document.createElement("button")
          buttonrm.innerText ="Remove"
          
          buttonrm.addEventListener("click", function(){
              removefromwish(ind)
          })


          var buttonbag =document.createElement("button")
          buttonbag.innerText ="MOVE TO BAG";
          
          buttonbag.addEventListener("click", function(){
           sendtocart(ind)
        })



          var buttonholder = document.createElement("div");
          buttonholder.className ="buttonholder"
          buttonholder.append(buttonrm,buttonbag)
          box.append(buttonholder)

           
            document.querySelector(".container").append(box)
        })

        
        
        function removefromwish(ind){
       
       cartarr.splice(ind,1)
       localStorage.setItem("wishListObj",JSON.stringify(cartarr))
       window.location.href="wishlist.html"

        }

        function sendtocart(ind){

            console.log("clickeed the movetobag button")
            
            //bag arr.shift this index and update thelocal
            // storage of cart page thrn 
            //delete the item from arr and update the 
            // the local storage of wish list

            window.location.href="wishlist.html"

     
             }