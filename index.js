add=document.getElementById("add");
add.addEventListener("click", ()=>{
	console.log("Updating...")
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	phon = document.getElementById('phon').value;
    message = document.getElementById('message').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([name, email,phon, message]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([name, email,phon, message]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
})
	$(document).ready(function(){
		var bottom=$("header").outerHeight();
		var header=$("header").offset().top + bottom;
     $(window).scroll(function(){
          // header fixed only when window width greater than 991px
         if($(window).width()>991){
     	if($(window).scrollTop()>=header){
     		$("header").addClass("sticky")
     	}
     	else{
     	 $("header").removeClass("sticky")	
     	}
     }
     })

     // navbar active link

     $(".navbar ul li a").click(function(){
     	 $(".navbar ul li a").removeClass("active")
     	 $(this).addClass("active");
     })
  
    $(".ham-burger").click(function(){
    	$(this).toggleClass("active")
    	$(".navbar").toggleClass("open");
    })

	})
