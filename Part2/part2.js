function increaseVolume() {
    var volumeInput = document.getElementById('volume');
    var volume = parseInt(volumeInput.value);

    if (volume < 10) {
        volumeInput.value = volume + 1;
    }
}

function decreaseVolume() {
    var volumeInput = document.getElementById('volume');
    var volume = parseInt(volumeInput.value);

    if (volume > 1) {
        volumeInput.value = volume - 1;
    }
}