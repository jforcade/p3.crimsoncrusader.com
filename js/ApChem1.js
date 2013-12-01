/**
 * @author JOE
 */

var uranswer;

/** This allows radio button to be selected by label */

$('input[name=answer]').click(function() {

	var label = $(this).prev();
	uranswer = label.html();
	
	//console.log("You clicked on " + uranswer);
	//alert("You selected " + uranswer);
	
});

$('input[id=check-btn]').click(function() {

	console.log("the answertype html = " + $('#answertype').html());
	var type=$('#answertype').html();
	console.log("the var type = " + type);

	switch(type)	
	{
	case 1:
		console.log("case 1 called");
		singleAnswer();
		break;
		
	case 2:
		checkAnswer();
		break;
		
	case 3:
		checkAnswers();
		break;
		
	default:
		singleAnswer();
		break;
	}
		
});

function singleAnswer() {

	console.log("singleAnswer was called");

	if (uranswer==$('#theanswer').html()) {
	
		$('#update').html("Your answer is correct!");
		
	} else {
		
		if (uranswer==undefined) {
		
			$('#update').html("Please select an answer.");
			
		} else {
			
			$('#update').html("Try again! ");
		}	
	}
	
}

