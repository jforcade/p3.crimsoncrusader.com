/**
 * @author JOSE FORCADE
 */

var theAnswers = new Array();
var uranswer;
var urtextboxes = new Array();
var thisQuestionNo;

/** This allows radio button to be selected by label */

$('input[name=answer]').click(function() {

	var label = $(this).prev();
	uranswer = label.html();
	
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
		uranswer = uranswer.split('').sort().join('');
	}
	
	// console.log("You clicked on " + uranswer);
	
});

$('input[name=txt-box]').change(function() {
	var label = $(this).prev();
	var type=$('#answertype').html();
    var	start = this.selectionStart;
    var end = this.selectionEnd;
	
	//alert("type = " + type);
	//alert("$THIS.VAL = "+ $(this).val());

	// Test for A B C as only acceptable input.

	if (type=='3') {
		if (($(this).val()=='A') || ($(this).val()=='B') || ($(this).val()=='C')) {
			urtextboxes[label.html()] = $(this).val();
		} else {
			$('#status-left').html("Answer MUST be A, B or C");
		    this.setSelectionRange(start, end);
			//alert("Answer MUST be A, B or C");
		}	
	}
		
	// Test for non-aphanumerics and letter m in calculations dealing with molars
		
	if (type=='4') {
		var thisVal = $(this).val();

		if(thisVal.match(/[\0123456789]/) || thisVal.match(/[\m]/)) {              
			urtextboxes[label.html()] = $(this).val();

			//alert("label.html = "+ label.html());
			//alert("UR txtbox @ label.html = "+ urtextboxes[label.html()]);

		} else {
			$('#status-left').html("Answer be numeric with letter m ONLY.");
		    this.setSelectionRange(start, end);

			//alert("Answer MUST be Alphanumeric");
		}	
	}

	// alert("You entered " + $(this).val() + " In field " + label.html());
	
});

// channel flow according to question type 

$('input[id=check-btn]').click(function() {

	thisQuestionNo = $('#questionNo').html();
	var type=$('#answertype').html();

	switch(type)	
	{
	case '1':
		//console.log("case 1 called");
		singleAnswer();
		break;
		
	case '2':
		//console.log("case 2 called");
		checkedAnswers();
		break;
		
	case '3':
		//console.log("case 3 called");
		textBoxes();
		break;
		
	case '4':
		//console.log("case 4 called");
		textBoxes();
		break;
		
	default:
		//console.log("default case called");
		singleAnswer();
		break;
	}
		
});

// Used to check answers for questions with radio buttons.

function singleAnswer() {

	// console.log("singleAnswer was called");

	if (uranswer==$('#theanswer').html()) {
	
		$('#status-left').html("Your answer is correct!");
		
	} else {
		
		if (uranswer==undefined) {
		
			$('#status-left').html("Please select an answer.");
			
		} else {
			
			$('#status-left').html("Try again! ");
		}	
	}
	
}

// used to verify answers for questions with checkboxes.

function checkedAnswers() {

	/** alert("checkedAnswers was called");
	alert("uranswer is " + uranswer);
	alert("the answer is " + $('#theanswer').html());
	**/

	if (uranswer==$('#theanswer').html()) {
	
		$('#status-left').html("Your answer is correct!");
		
	} else {
		
		if (uranswer==undefined) {
		
			$('#status-left').html("Please select an answer.");
			
		} else {
			
			$('#status-left').html("Try again! ");
		}	
	}
	
}

// used to check textboxes on questions 6 and 7

function textBoxes() {

	var allanswers = new Array();
	
	for (i=0;i<urtextboxes.length-1;i++) {
		
		// alert("i = " + i);

		j = i + 1;

		allanswers[i]=$('#theanswer' + j).html();

		if (allanswers[i]==urtextboxes[j]) {
			$('#status-left').html("Your answer is correct!");
		} else {
			if (allanswers[i]==undefined) {
				$('#status-left').html("Please enter ALL answers.");
				break;
			} else {
				$('#status-left').html("Try again! ");
				break;
				}
			}
		}
	}
	
// For future use 

function showAnswers() {

	alert("showAnswers was called");

	var myValue;

	myValue=$(text1);
	myValue.value = $('#answer1').html();
	myValue=$(text2);
	myValue.value = $('#answer2').html();
	myValue=$(text3);
	myValue.value = $('#answer3').html();
	
	}

