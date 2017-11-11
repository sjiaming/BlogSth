function HTMLtoPDF(){
var pdf = new jsPDF('p', 'pt', 'letter');
source = $('#HTMLtoPDF')[0];
specialElementHandlers = {
	'#bypassme': function(element, renderer){
		return true
	}
}
margins = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
  };

pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
    , margins.bottom
    , margins.right
  	, {
  		 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        pdf.save('title.pdf');
      }
  )		
}