//for DVR auto category with price

function dvr(add) {
    selectedCategory = $('.dvr-dropdown').val();
    selectedBrand = 3;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.dvr-category');
    productDropdown.empty();
    productPrice = $('#dvr-price');
    productPrice.empty();
    
//CALLING
    selecttag(productDropdown, add);
    
    // $('.dvr-category').css("background-color","black");
    var qty = $('#dvr-quantity').val();
    var price = $('#dvr-price').val();
    var total = price * qty;
    $('#dvr-total').html(total);
    
}

//for smps auto category with price
function smps(add) {
    selectedCategory = $('.smps-dropdown').val();
    selectedBrand = 4;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.smps-category');
    productDropdown.empty();
    productPrice = $('#smps-price');
    productPrice.empty(); 

//CALLING
    selecttag(productDropdown, add);
    // $('.smps-category').css("background-color","black");
    var qty = $('#smps-quantity').val();
    var price = $('#smps-price').val();
    var total = price * qty;
    $('#smps-total').html(total);
}



//for auto quantity connector

function connector(add) {
   
    selectedCategory = $('.connector-dropdown').val();
    
    selectedBrand = 5;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
     
    productDropdown = $('.connector-category');
    productDropdown.empty();
    productPrice = $('#connector-price');
    productPrice.empty(); 

    var id = selectProducts[0].id;
    var category = selectProducts[0].category;
    var price = selectProducts[0].price;
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category)); 
    productPrice.val(price);

    // $('.connector-category').css("background-color","black");

    quantity = $('#connector-quantity');
    quantity.empty(); 
    quantity.val(add);

    var total = price * add;
    $('#connector-total').html(total);
}


function selecttag(productDropdown, add) {
    var k = 0;
    for (var i = 0; i < selectProducts.length; i++) {
    
      if (add <= selectProducts[i].category && add != 0) {
        var category = selectProducts[i].category;
        var id = selectProducts[i].id
        
        productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category + " CHANNEL")); 

        if (add <= selectProducts[i].category && k == 0) {
            var price = selectProducts[i].price;
            k++;
        }
      }
    } 
    productPrice.val(price);
}


// Grand Total all accessiories

function grandTotal(){
  var subtotal = 0;
    $('.total').each(function(i){
        var price = $(this).html();
        if (!isNaN(price)) subtotal += Number(price);
    });
    subtotal = subtotal.toFixed(2);
    $('.grandTotal').html(subtotal);
}


function selectArray() {
    loadArray = [];
    var productValues = [1,2,3,4,5,6,7,8];
    
    for (let i = 0; i < productValues.length; i++) {
        var categoryId = productValues[i];
        productDropdown = $('.1'+categoryId).val();
        
        loadArray[i] = $('.1'+categoryId).val();
    }
    
    sessionStorage.setItem("domedata",$('#dome').val());
    sessionStorage.setItem("bulletdata",$('#bullet').val());
    sessionStorage.setItem("arraydata", JSON.stringify(loadArray));
}


// for dropdown
function productValues(){
    

  var productValues = [1,2,3,4,5,6,7,8];
  
  for (var i = 0; i < productValues.length; ) {
    var categoryId = productValues[i];
    selectedCategory = $('.'+categoryId).val();
    selectedBrand = categoryId;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.1'+categoryId);
    s2 =[];
    s = [];
    sprice = [];

    for (let index = 0; index < selectProducts.length; index++) {
        s[index] = selectProducts[index].category;
        s2[index] = selectProducts[index].id;
            
    }

    ale = productDropdown.val();
    var chale = productDropdown;

    if (ale == "") {  
        
        chale.empty();
        chale.append($("<option></option>")
            .attr("value","")
            .text("Select category")); 
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const element1 = s2[i];
        
        chale.append($("<option></option>")
            .attr("value",element1)
            .text(element)); 
        }
    }
    
    else{ 
        // $.each(selectProducts, function(key, cctv) { 
        // chale.append($("<option></option>")
        //     .attr("value",s2)
        //     .text(s)); 
        // });
        chale.empty();
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            const element1 = s2[i];
            
            chale.append($("<option></option>")
                .attr("value",element1)
                .text(element)); 
            }
    }
    i++;


  }
  arr = [];
     arr = JSON.parse(sessionStorage.getItem('arraydata'));
    // alert(arr[1]);
  

      for (var i = 0; i < arr.length; i++) {
           var idd = arr[i];
         //  alert(idd);
           var categoryId = i+1;
       
       
        selectedCategory = $('.'+categoryId).val();
        selectedBrand = categoryId;
        selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
        productDropdown = $('.1'+categoryId);

        productDropdown.val(idd);

        for (let j = 0; j < selectProducts.length; j++) {
            
            var id = selectProducts[j].id;
            if (id == idd) {
                sprice[i] = selectProducts[j].price;
                alert('price :'+ sprice[i]);

            }
        }
            
      
  }

  var bulletdata = sessionStorage.getItem('bulletdata');
  var domedata = sessionStorage.getItem('domedata');
  $( "#dome" ).val(domedata);
  $( "#bullet" ).val(bulletdata);

  addition();


  sessionStorage.setItem("arraydata", '');
  sessionStorage.setItem("bulletdata", '');
  sessionStorage.setItem("domedata", '');

    
}

function alertDomeMsg() {
    alert('Fill the quantity above');
}


