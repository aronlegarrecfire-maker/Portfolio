function openProjectModal1() {
    document.getElementById('projectModal1').classList.add('is-active');
}

function closeProjectModal1() {
    document.getElementById('projectModal1').classList.remove('is-active');
}

function openProjectModal2() {
    document.getElementById('projectModal2').classList.add('is-active');
}

function closeProjectModal2() {
    document.getElementById('projectModal2').classList.remove('is-active');
}

function openProjectModal3() {
    document.getElementById('projectModal3').classList.add('is-active');
}

function closeProjectModal3() {
    document.getElementById('projectModal3').classList.remove('is-active');
}

document.getElementById("copyEmail").addEventListener("click", function () {
    navigator.clipboard.writeText("aron.legarrecfire@gmail.com");
    alert("Email copié !");
});
