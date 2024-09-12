chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("youtube.com")) {
        toggle();
    }
});

function getUrl(tab) {
    return tab.url.includes("embed") ? tab.url.replace("/embed/", "/watch?v=") : tab.url.replace("/watch?v=", "/embed/");
}

function toggle() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let tab = tabs[0];
        chrome.tabs.update(tab.id, {url: getUrl(tab)});
    });
}