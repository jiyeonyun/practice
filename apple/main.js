$(document).ready(function(){

    $('.modal').addClass('hide');
    $('.buy').click(function(){
        $('.modal').removeClass('hide');
    });
    $.ajax({
        url: "./resources1/store.json",
        type: "GET"
    }).done(function(data){
        console.log(data);
        for(var i = 0; i<5; i++){
        var title = document.querySelectorAll('h4')[i];
        var brand = document.querySelectorAll('p')[i];
        var price = document.querySelectorAll('span')[i];
        var img = document.querySelectorAll('img')[i];
        $(title).html(data.products[i].product_name);
        $(brand).html(data.products[i].brand_name);
        $(price).html(data.products[i].price);
        var 장바구니상품 =  `<div class="dropafter">
        <div class="img">
            <img src="./resources1/pr1.JPG" alt="">
        </div>
        <div class="textall">
        <h4>${title}</h4>
         <p>${brand}</p>
         <a href=""><span>수량:</span>0</a>
         <span>${price}</span>
        </div>
    </div>`;
    $('.dragitem').draggable({
        revert : true
    }); 
    $('.here').droppable({
        drop: function(event, ui) {
        //   var item = $(ui.draggable);
        //   console.log(item);
        $('.cartwrap').append(장바구니상품);
        },
      });
    }
    }
);
   
    
    

});

