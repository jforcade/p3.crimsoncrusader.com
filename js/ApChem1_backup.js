/**
 * @author JOE
 */


/** This allows radio button to be selected by label */

$('input[name=answer]').click(function() {

	console.log("You clicked an answer");

});

$('input[id=next-btn]').click(function() {

	console.log("You clicked the next button");
	var next_html = "<h3 class='Qh2'>Question 2</h3><div>Which branches of chemistry would you classify a person if they were to study the chemical composition of the venom of a black widow spider?</div><div><br><input type='button' id='next-btn' value='Next'></div>";

				var page2html = "<h1>Quiz One</h1><div id='questions'><h3 class='Qh2'>Question 1</h3><div>Which branch of chemistry would you classify a person if they were to study the chemical composition of the venom of a black widow spider?</div><div><br><input type='button' id='next-btn' value='Next'></div></div>";
		            page2html = page2html + "<div id='answers'><h3 class='Qh2'>Pick 1 answer</h3>";
				    page2html = page2html + "<div id='answer1'><label for='radio1'>Organic chemistry</label><input type='radio' id='radio1' name = 'answer'/><br></div>";
		            page2html = page2html + "<div id='answer2'><label for='radio2'>Inorganic chemistry</label><input type='radio' id='radio2' name = 'answer'/><br></div>";
		            page2html = page2html + "<div id='answer3'><label for='radio3'>Biochemistry</label><input type='radio' id='radio3' name = 'answer'/><br></div>";
		            page2html = page2html + "<div id='answer4'><label for='radio4'>Analytical chemistry</label><input type='radio' id='radio4' name = 'answer'/><br></div></div>";
	$('#questions').html(page2html);
	
});

$('.colors').click(function() {
        
        var color_that_was_clicked = $(this).css('background-color');
        
        $('#canvas').css('background-color', color_that_was_clicked);
        
});



$('.textures').click(function() {
              
        var texture_that_was_clicked = $(this).css('background-image');
        console.log(texture_that_was_clicked);
        $('#canvas').css('background-image', texture_that_was_clicked);
        
});


$('input[name=message]').click(function() {

        // Get the label element that comes immediately after this radio button
        var label = $(this).next();

        // From the label element extract the inner HTML - i.e what is the message.
        var message = label.html();

        // Place the message in the card
        $('#message-output').html(message);

});


$('#recipient').keyup(function() {

        // Find out what is in the field
        var value = $(this).val();

        var how_many_characters = value.length;

        var how_many_left = 14 - how_many_characters;

        if(how_many_left == 0) {
                $('#recipient-error').css('color','red');
        }
        else if(how_many_left < 5) {
                $('#recipient-error').css('color','orange');
        }


        $('#recipient-error').html('You have ' + how_many_left + ' characters left.');

        /*
        if(how_many_characters == 14) {
                $('#recipient-error').html('You\'ve reached the max amount of characters');
        }
        else {
                $('#recipient-error').html('');
        }
        */

        // Place the message in the card
        $('#recipient-output').html(value);

});



$('.stickers').click(function() {

        //var new_image = "<img src='"++"'></img>";
        //$('#canvas').html(new_image);

        // Clone whatever sticker was clicked
        var new_image = $(this).clone();

        new_image.addClass('stickers_on_card');

        // Place the clone in the canvas
        $('#canvas').prepend(new_image);

        $('.stickers_on_card').draggable({containment: "#canvas"});

});
