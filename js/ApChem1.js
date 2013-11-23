/**
 * @author JOE
 */

var uranswer;

/** This allows radio button to be selected by label */

$('input[name=answer]').click(function() {

	var label = $(this).prev();
	uranswer = label.html();
	
	console.log("You clicked on " + answer);
	alert("You selected " + answer);
	
});

$('input[id=check-btn]').click(function() {

	if (uranswer==$('#theanswer').html()) {
	
		$('#update').html("Your answer is correct!");
		
	} else {
		
		if (uranswer==undefined) {
		
			$('#update').html("Please select an answer.");
			
		} else {
			
			$('#update').html("Try again! ");
		
		}
	}
	
	/*
	 * You have to check if an answer has been selected and display "please choose an answer" 
	 * I have to check the choice against the right answer.
	 * 
	 console.log("You clicked the next button");
	$('#qhh').html = "Question 2";*/
 
});

