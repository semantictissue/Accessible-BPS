// reset focus on popover trigger link js, two versions, use one or the other
// will replace global var in next build

// modern browsers, no IE support
$(document).on('blur', '.close-popover', function(){
	var currentPopId = $(this).closest('.popover').attr('id');
	$('button[aria-describedby="' + currentPopId + '"]').focus();
	// console.log('focused',currentPopId);
});

// IE supported, based on popover events
// Focus on content when popup triggered, after popover is "shown" event is fired
$('.popover-markup > .trigger').on('shown.bs.popover', function() {
	currentPopId = $(this).next('.popover').attr('id');
		// console.log(currentPopId, 'shown');
	$('.popover-content').focus();
});

// Focus back on trigger element, after popover "hide" even is fired
$('.popover-markup > .trigger').on('hide.bs.popover', function() {
		// console.log(currentPopId, 'hidden');
	$('button[aria-describedby="' + currentPopId + '"]').focus();
});
