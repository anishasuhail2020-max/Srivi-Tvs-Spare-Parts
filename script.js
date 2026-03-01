let allParts = [];

function showParts() {
    const model = document.getElementById("bikeModel").value;
    const partsDiv = document.getElementById("partsList");

    const data = {
        apache: [
            "Brake Pad – ₹450",
            "Clutch Plate – ₹950",
            "Oil Filter – ₹180"
        ],
        jupiter: [
            "Drive Belt – ₹1200",
            "Air Filter – ₹220",
            "Brake Shoe – ₹350"
        ],
        ntorq: [
            "Disc Pad – ₹480",
            "CVT Belt – ₹1400",
            "Spark Plug – ₹120"
        ],
        starcity: [
            "Chain Kit – ₹1600",
            "Brake Cable – ₹90",
            "Headlight Bulb – ₹150"
        ],
        sport: [
            "Rear Sprocket – ₹380",
            "Front Brake Cable – ₹110",
            "Clutch Wire – ₹130"
        ],
        raider: [
            "Fuel Filter – ₹240",
            "Disc Pad – ₹520",
            "Oil Filter – ₹190"
        ],
        xl100: [
            "Air Filter – ₹200",
            "Spark Plug – ₹110",
            "Brake Shoe – ₹300"
        ]
    };

    allParts = data[model] || [];
    displayParts(allParts);
}

function displayParts(parts) {
    const partsDiv = document.getElementById("partsList");
    partsDiv.innerHTML = "";

    parts.forEach(p => {
        partsDiv.innerHTML += `<div class=\"part\">${p}</div>`;
    });
}

function searchParts() {
    const q = document.getElementById("searchBox").value.toLowerCase();
    const filtered = allParts.filter(p => p.toLowerCase().includes(q));
    displayParts(filtered);
}