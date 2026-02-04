
//old code, works good still
 $(document).ready(function(){
				
 	$("#order").click(function(){
					
 		var additonalNotes = $("#notes").val();
 		//if statement to check for any vegan text in notes box, if there is a alert is shown
 		//if not the form section is hidden and a thank you message displayed
 		if(additonalNotes.includes("vegan")) {
 			alert("Cheescake has diary in it buddy!!!")
						
 		}
 		else {
 			$("h2").hide();
 			document.getElementById("confirmMessage").style.display = "block";
 		}
					
 	});
 });

// eventHandler = function() {
//     var additonalNotes = $("#notes").val();
// 	//if statement to check for any vegan text in notes box, if there is a alert is shown
// 	//if not the form section is hidden and a thank you message displayed
// 	if(additonalNotes.includes("vegan")) {
// 		alert("Cheescake has diary in it buddy!!!")
						
// 	}
// 	else {
// 		$("h2").hide();
// 		document.getElementById("confirmMessage").style.display = "block";
// 	}
// }


// $(document).ready(function(){
//     $(function() {
//         $("#order").click(eventHandler);
//     });
// });

