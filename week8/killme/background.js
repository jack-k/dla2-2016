// Subscribe to onVisited event, so that injectSite() is called once at every pageload.
chrome.history.onVisited.addListener(injectSite);
var scrambled = 0;
function injectSite(data) {
    // get custom configuration for this URL in the background page.
        chrome.tabs.executeScript({ code: 'PARAMS = ' + JSON.stringify({x : scrambled}) + ';' });
        chrome.tabs.executeScript({ file: 'inject.js' });
    }
}