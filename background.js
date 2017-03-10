chrome.tabs.onCreated.addListener(function (tab) {
    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        if(tablink == 'chrome://newtab/') {
            chrome.tabs.update({url: "http://google.com/"});
        }
    });
});
//chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    //alert(message);
//});