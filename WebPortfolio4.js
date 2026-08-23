var canvasAI = document.getElementById("myCanvasAI");
var ctxAI = canvasAI.getContext("2d");

// --- NEURONY ---

function aiDraw1() {
    ctxAI.beginPath();
    ctxAI.arc(60, 60, 8, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(0,120,255)";
    ctxAI.stroke();
}

function aiDraw2() {
    ctxAI.beginPath();
    ctxAI.arc(60, 100, 8, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(0,120,255)";
    ctxAI.stroke();
}

function aiDraw3() {
    ctxAI.beginPath();
    ctxAI.arc(60, 140, 8, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(0,120,255)";
    ctxAI.stroke();
}

function aiDraw4() {
    ctxAI.beginPath();
    ctxAI.arc(140, 80, 10, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(0,200,155)";
    ctxAI.stroke();
}

function aiDraw5() {
    ctxAI.beginPath();
    ctxAI.arc(140, 120, 10, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(0,200,155)";
    ctxAI.stroke();
}

function aiDraw6() {
    ctxAI.beginPath();
    ctxAI.arc(220, 100, 12, 0, Math.PI * 2);
    ctxAI.strokeStyle = "RGB(255,150,0)";
    ctxAI.stroke();
}

// --- POŁĄCZENIA ---

function aiDraw7() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 60);
    ctxAI.lineTo(140, 80);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw8() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 100);
    ctxAI.lineTo(140, 80);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw9() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 140);
    ctxAI.lineTo(140, 80);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw10() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 60);
    ctxAI.lineTo(140, 120);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw11() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 100);
    ctxAI.lineTo(140, 120);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw12() {
    ctxAI.beginPath();
    ctxAI.moveTo(60, 140);
    ctxAI.lineTo(140, 120);
    ctxAI.strokeStyle = "RGB(200,100,55)";
    ctxAI.stroke();
}

function aiDraw13() {
    ctxAI.beginPath();
    ctxAI.moveTo(140, 80);
    ctxAI.lineTo(220, 100);
    ctxAI.strokeStyle = "RGB(255,150,0)";
    ctxAI.stroke();
}

function aiDraw14() {
    ctxAI.beginPath();
    ctxAI.moveTo(140, 120);
    ctxAI.lineTo(220, 100);
    ctxAI.strokeStyle = "RGB(255,150,0)";
    ctxAI.stroke();
}

// --- ANIMACJA ---

function aiInterval() {

    setTimeout(aiDraw1, 500);
    setTimeout(aiDraw2, 700);
    setTimeout(aiDraw3, 900);

    setTimeout(aiDraw4, 1200);
    setTimeout(aiDraw5, 1400);
    setTimeout(aiDraw6, 1600);

    setTimeout(aiDraw7, 1800);
    setTimeout(aiDraw8, 2000);
    setTimeout(aiDraw9, 2200);

    setTimeout(aiDraw10, 2400);
    setTimeout(aiDraw11, 2600);
    setTimeout(aiDraw12, 2800);

    setTimeout(aiDraw13, 3000);
    setTimeout(aiDraw14, 3200);

    ctxAI.clearRect(0, 0, canvasAI.width, canvasAI.height);
}

aiInterval();
// setInterval(aiInterval, 7000);
