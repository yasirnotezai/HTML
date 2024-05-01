function openURL() {
    var url = document.getElementById('urlInput').value.trim();
    if (url !== '') {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url; // adding http:// if not provided
        }
        window.open(url, '_blank');
    }
}