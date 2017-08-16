/* global $, document*/

(function(w){
	function init(){
		var date = new Date(),
			currentYear = document.getElementById('currentYear');

		/*Init the current year in the footer*/
		date = date.getFullYear();
		currentYear.innerHTML = date;
		
		/* download Pdf and docx version of CV*/
		$('a#cv_docx').attr({
			target: '_blank',
			href: '/doc/OUARRICH_SAID.docx'
		});
		$('a#cv_pdf').attr({
			target: '_blank',
			href: '/doc/OUARRICH_Said.pdf'
		});
	}

	w.addEventListener('load', init);
})(this);
