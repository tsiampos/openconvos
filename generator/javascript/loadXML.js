function reply_click(clicked_id) {
    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xml/conversations.xml",
		dataType: "xml",
		success: function(xml){

			var random = Math.floor(Math.random() * 7);

			var sConversation = $(xml).find('text').eq(random).text();
			var sInterlocutors = $(xml).find('interlocutors').eq(random).text();
			var sSource = $(xml).find('source').eq(random).text();
			$('#text').val(sConversation);
			$('#interlocutors').val(sInterlocutors);
			$('#source').val(sSource);
		},
		error: function() {
		alert("An error occurred while processing XML file.");
            }
        });
    });
}