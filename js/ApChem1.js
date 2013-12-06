/**
 * @author JOE FORCADE
 */

var theAnswers = new Array();
var uranswer;
var urtextboxes = new Array();
var thisQuestionNo;
/* Each question that has been answered adds to the tally
 *  and can only be answered once.  Tally keeps track of this
 *  zero means not answered, one means the question has been 
 *  answered.
 */
var urtally = new Array();
urtally[0]=0;
urtally[1]=0;
urtally[2]=0;
urtally[3]=0;
urtally[4]=0;
urtally[5]=0;
urtally[6]=0;

var urscore = 0;

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

	thisQuestionNo = $('#questionNo').html();
	var type=$('#answertype').html();

	if (urtally[thisQuestionNo]=='1') {
		//type = '4';
	} else {
		//urtally[thisQuestionNo]='1';
	} 

	// alert("the question number = " + thisQuestionNo);
	// alert("the tally value = " + urtally[thisQuestionNo]);
	
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

$('input[id=show-btn]').click(function() {

	thisQuestionNo = $('#questionNo').html();
	var type=$('#answertype').html();

	if (urtally[thisQuestionNo]=='1') {
		//type = '4';
	} else {
		//urtally[thisQuestionNo]='1';
	} 

	switch(type)	
	{
	case '1':
		break;
		
	case '2':
		break;
		
	case '3':
		console.log("case 3 called");
		showAnswers();
		break;
		
	default:
		break;
	}
		
});

function singleAnswer() {

	console.log("singleAnswer was called");

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

function checkedAnswers() {

	/** console.log("checkedAnswers was called");
	alert("checkedAnswers was called");
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

function textBoxes() {

	var allanswers = new Array();
	
	//alert("UR Answer length is equal to" + urtextboxes.length);
	//alert("UR Answer 0 is equal to" + urtextboxes[0]);

	for (i=0;i<urtextboxes.length-1;i++) {
		
		alert("i = " + i);
		j = i + 1;
		allanswers[i]=$('#theanswer' + j).html();
		//alert("Answer" + i + "is equal to" + allanswers[i]);
		//alert("UR Answer" + i + "is equal to" + urtextboxes[j]);
		

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
	
function showAnswers() {

	alert("showAnswers was called");

	var myValue;

	//for (i=1;i<4-1;i++) {
	//	alert("the answer is " + $('#theanswer' + i).html());
	//	myValue=$('text' + i);
	//	myValue.value = $('#answer' + i).html();
	//	}
		
	myValue=$(text1);
	myValue.value = $('#answer1').html();
	myValue=$(text2);
	myValue.value = $('#answer2').html();
	myValue=$(text3);
	myValue.value = $('#answer3').html();
	
	}

