
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "https://bit.ly/3qJmvfK"},
    {img_url : "https://bit.ly/3uFdtl6"},
    {img_url : "https://bit.ly/3NqqqYR"},
    {img_url : "https://bit.ly/3NxptOo"},
    ],

    //FOR MOBILE VIEW
    [{img_url : "https://bit.ly/35p0UBR"},
    {img_url: "https://bit.ly/38hbVX5"},
    {img_url: "https://bit.ly/3iOZ3t9"},
    {img_url: "https://bit.ly/3tTroEZ"},
    ]
  ]

  var z = null; 

    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }

  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })


