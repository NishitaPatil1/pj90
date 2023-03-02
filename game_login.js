function addUser(){
    player1name=document.getElementById("p1name").value;
    player2name=document.getElementById("p2name").value;
    localStorage.setItem("p1name",player1name);
    localStorage.setItem("p2name",player2name);
    window.location.replace("game_page.html");
}