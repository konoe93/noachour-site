function scrollToMessage() {
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}


function openGift() {

    const gift = document.getElementById("gift-message");

    gift.classList.toggle("show");

}


/*
    Vous vous êtes connus le 7 mai.

    Si c'est le 7 mai 2026 :
    mois = 4 car JavaScript commence à 0.

    4 = mai
*/

const relationshipDate = new Date(2026, 4, 7, 0, 0, 0);


function updateCounter() {

    const now = new Date();

    let difference = now - relationshipDate;

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCounter();

setInterval(updateCounter, 1000);