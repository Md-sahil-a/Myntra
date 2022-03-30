console.log('hello world')
  // <!-- COROUSEL SCRIPT -->
  var counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
      counter = 1;
  }
  }, 2500);



  // <!-- CATEGORIES DISPALY 1 -->
  var categoryBag = [
      {image_url :'https://bit.ly/3DnfTst'},
      {image_url :'https://bit.ly/3uB2WHQ'},
      {image_url :'https://bit.ly/3NvrZEB'},
      {image_url :'https://bit.ly/3JP1BmV'},
      {image_url :'https://bit.ly/3Nt0VG5'},
      {image_url :'https://bit.ly/3uEEhC2'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })


  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
      {image_url :'https://bit.ly/3wTrgam'},
      {image_url :'https://bit.ly/3Ln7fx1'},
      {image_url :'https://bit.ly/3wKizze'},
      {image_url :'https://bit.ly/3iLkgUQ'},
      {image_url :'https://bit.ly/3uzcDX3'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })

