var App = App || {};
(function(){
	var checkInputNumber = function() {
		$("[data-check='checkNumber']").each(function(i,el){
			$(el).change(function(){
				var val = $(el).val();
				if (!$.isNumeric(val)) {
					$(el).addClass("error");
				}
				else {
					$(el).removeClass("error");
				}
			});
		});
	}
	App.checkInputNumber = checkInputNumber;
})();
$(document).ready(function(){
	App.checkInputNumber();
})