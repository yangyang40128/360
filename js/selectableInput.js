var App = App || {};
(function(){
	var selectableInput = function (){

		$("[data-id='selectableItem']").each(function(i,el){
			var length = $(el).find("a").length;
			var $input = $(el).siblings("[data-id='selectableInput']");
			$(el).find("a").each(function(i,elem){
				if ( length - 1 == i ) {
					$(elem).click(function(){
						$input.val("").focus();
					});
				}
				else {
					$(elem).click(function(e){
						var text = $(elem).text();
						$input.val(text);
					});
				}
			});
			
		});
	}
			
	App.selectableInput = selectableInput;
})($);
$(document).ready(function(){
	App.selectableInput();
});