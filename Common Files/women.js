// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
    {image_url :'https://bit.ly/3wMvK2N'},
    {image_url :'https://bit.ly/3wY0TA6'},
    {image_url :'https://bit.ly/3IWRXxk'},
    {image_url :'https://bit.ly/36I2HCP'},
    {image_url :'https://bit.ly/3LtKeIK'},
    {image_url :'https://bit.ly/3uEEhC2'},
]
categoryBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('categoryBag_women').append(box)
})

// <!-- BRAND DISPLAY 2 -->
var brandsBag = [
    {image_url :'https://bit.ly/3qOmNSH'},
    {image_url :'https://bit.ly/3Dx4Lth'},
    {image_url :'https://bit.ly/3uGBVTh'},
    {image_url :'https://bit.ly/3DxPVCY'},
    {image_url :'https://bit.ly/3iQbIfq'},
]
brandsBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('explore_more_women').append(box)
})


