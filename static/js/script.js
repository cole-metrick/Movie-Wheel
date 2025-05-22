let currentRotation = 0;

function rotateFunction() {
    segmentsArray = document.querySelectorAll('.segment');
    segments = segmentsArray.length;
    console.log(segments);
    degreePerSegment = 360 / segments;

    winnerSeg = document.getElementById('winner');
    winnerSeg.innerText = '';
    var min = 1024;
    var max = 9999;
    var spinDegrees = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+spinDegrees+"deg)";

    currentRotation += spinDegrees;

    const box = document.getElementById("box");
    box.style.transition = "transform 5s ease-out";
    box.style.transform = `rotate(${currentRotation}deg)`;

    // Calculate landing segment after spin completes
    const normalizedRotation = currentRotation % 360;
    const landedSegmentIndex = ((Math.floor(((360 - normalizedRotation + degreePerSegment / 2) % 360) / degreePerSegment) + 1) % segments);
    console.log(landedSegmentIndex);

    segment = document.getElementById(landedSegmentIndex);
    segName = segment.innerText;
    console.log(segName);

    setTimeout(() => {
        winnerSeg.innerText = segName;
    }, 5500);
}