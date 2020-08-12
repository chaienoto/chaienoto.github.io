 function calcHeight(iframeElement) {
     var the_height = iframeElement.contentWindow.document.body.scrollHeight;
     iframeElement.height = the_height;
 }

 