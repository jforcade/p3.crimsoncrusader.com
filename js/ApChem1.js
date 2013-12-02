/**
 * @author JOE FORCADE
 */

var theAnswers = new Array();
var uranswer;
var urtextboxes = new Array();


/** This allows radio button to be selected by label */

$('input[name=answer]').click(function() {

	var label = $(this).prev();
	uranswer = label.html();
	
	//console.log("You clicked on " + uranswer);
	//alert("You selected " + uranswer);
	
});

$('input[name=chk-box]').click(function() {

	var label = $(this).prev();
	if (uranswer==undefined) {
		uranswer = label.html(); 
	} else {
		uranswer = uranswer + label.html();
	}
	
	if (uranswer.length>1) {
		//alert("Your length is " + uranswer.length);
		uranswer = uranswer.split('').sort().join('');
	}
	
	// console.log("You clicked on " + uranswer);
	// alert("You selected " + uranswer);
	
});

$('input[name=txt-box]').change(function() {
	var label = $(this).prev();
	
	urtextboxes[label.html()] = $(this).val();
	
	// add input validation for data entry 
	// field requirements : must be A, B or C.	
	
	// alert("label html = " + label.innerHTML);
	// alert("this html = " + $(this).innerHTML);
	// alert("Hey You!");
	// alert("You entered " + $(this).val() + " In field " + label.html());
	
	//alert($(this).getElementByName('text1').html);
});

$('input[id=check-btn]').click(function() {

	//console.log("the answertype html = " + $('#answertype').html());
	var type=$('#answertype').html();
	//console.log("the var type = " + type);

	switch(type)	
	{
	case '1':
		console.log("case 1 called");
		singleAnswer();
		break;
		
	case '2':
		console.log("case 2 called");
		checkedAnswers();
		break;
		
	case '3':
		console.log("case 3 called");
		// alert("case 3 called");
		textBoxes();
		break;
		
	default:
		console.log("default case called");
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

function checkedAnswers() {

	/** console.log("checkedAnswers was called");
	alert("checkedAnswers was called");
	alert("uranswer is " + uranswer);
	alert("the answer is " + $('#theanswer').html());
	**/

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

function textBoxes() {

	var allanswers;

	allanswers = urtextboxes[1];
	for (i=2;i<urtextboxes.length;i++) {
		console.log("urtextbox # " + i + " : " + urtextboxes[i]);
		allanswers=allanswers + urtextboxes[i];
	}
	
	//console.log("textBoxes was called and uranswer was " + allanswers);
	//console.log("THE ANSWER IS  " + $('#theanswer').html());
	
	if (allanswers==$('#theanswer').html()) {
	
		$('#update').html("Your answer is correct!");
		
	} else {
		
		if (allanswers==undefined) {
		
			$('#update').html("Please select an answer.");
			
		} else {
			
			$('#update').html("Try again! ");
		}	
	}
	
}

