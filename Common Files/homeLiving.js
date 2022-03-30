
//<---------- HOME & LIVING SCRIPT CODES --------->//

var anchors_para = [
    [
        {h4 : 'Furnishings & Bed Linen'},
        {p : 'Bed Sheets'},
        {p : 'Bedding Sets & Bed Covers'},
        {p : 'Blankets, Quilts & Dohars'},
        {p : 'Pillows & Pillow Covers'},
        {p : 'Cushions & Cushion Covers'},
        {p : 'Curtains'},
        {p : 'Mats & Dhurries'},
        {p : 'Carpets'},
    ],
    [
        {h4 : 'Bath & Bed Linen'},
        {p : 'Towels & Towel Sets'},
        {p : 'Bath Robes'},
        {p : 'Bathroom Accessories'},
        {p : 'Bath Robes'},
        {p : 'Shower Curtains'},
        {p : 'Bath Rugs'},
    ],
    [
        {h4 : 'Home Décor'},
        {p : 'Plants & Planters'},
        {p : 'Aromas, Candles & Candle Holders'},
        {p : 'Clocks'},
        {p : 'Mirrors'},
        {p : 'Wall Décor'},
        {p : 'Wall Shelves'},
        {p : 'Fountains'},
        {p : 'Showpieces & Vases'},
    ],
    [
        {h4 : 'Lamps & Lighting'},
        {p : 'Floor & Wall Lamps'},
        {p : 'Table Lamps'},
    ],
    [
        {h4 : 'Kitchen & Table'},
        {p : 'Tableware & Serveware'},
        {p : 'Bar & Drinkware'},
        {p : 'Cookware & Kitchen Tools'},
        {p : 'Kitchen Storage'},
        {p : 'Table Covers & Furnishings'},
    ],
    [
        {h4 : 'Storage & Organisers'},
        {p : 'Organisers'},
        {p : 'Hooks & Holders'},
    ],

    ]
    
    for(let i=0; i<anchors_para.length; i++){
        var asideDiv = document.createElement('div'); //container div for each part 
        asideDiv.setAttribute('class', 'aside_content'); 
    
        anchors_para[i].map(function(element){
            if(element.h4 != undefined){
                var heading = document.createElement('h4')
                heading.setAttribute = ('class', 'heading')
                heading.innerText = element.h4
                asideDiv.append(heading)
    
            }
            if(element.p != undefined){    
                var para = document.createElement('p');
                para.setAttribute = ('class', 'text')
                para.innerText = element.p
                asideDiv.append(para)
            }
        })

        document.querySelector('aside').append(asideDiv)

    }