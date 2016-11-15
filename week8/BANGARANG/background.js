
//this is a background script, it runs consistently in the background,
//useful if you need to keep track of info between pages
//or have stuff you don't want to load on every page

var bangarang = new Audio("bangarang.mp3")
// Subscribe to onVisited event, so that injectSite() is called once at every pageload.


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var urltext = tab.url.toLowerCase();
	console.log(urltext);
    if(urltext.includes("bass") || urltext.includes("skrillex")) {
  		if(bangarang.currentTime > 0){
  			bangarang.currentTime = 0;
  		}
  		if(bangarang.currentTime == 0){
  			bangarang.play();
  		}
  	}
});

chrome.tabs.onCreated.addListener(function(tab) {         
   var urltext = tab.url.toLowerCase();
    if(urltext.includes("bass") || urltext.includes("skrillex")) {
  		if(bangarang.currentTime > 0){
  			bangarang.currentTime = 0;
  		}
  		if(bangarang.currentTime == 0){
  			bangarang.play();
  		}
  	}
});


/*    
chrome.extension.onMessage.addListener(
  function(message, sender, sendResponse) {
  	
  });
  */