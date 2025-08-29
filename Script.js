let hearts = 0;
let coins = 100;
let copies = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyBox = document.getElementById("historyList");
const clearBtn = document.getElementById("clearBtn");


function getTime() {
    const current = new Date();
    return current.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
}
function updateCounters() {
    heartCountEl.innerText = hearts;
    coinCountEl.innerText = coins;
    copyCountEl.innerText = copies;

    heartCountMobile.innerText = hearts;
    coinCountMobile.innerText = coins;
    copyCountMobile.innerText = copies;
}
function addHistory(name, number) {
    const div = document.createElement("div");
    div.className = "flex justify-between bg-gray-100 shadow py-4 rounded-xl px-4 hover:bg-gray-200";
    div.innerHTML = `
        <div>
            <span class="font-bold text-[16px]">${name}</span><br>
            <span class="text-gray-500">${number}</span>
        </div>
        <span class="text-gray-500 whitespace-nowrap sm:whitespace-nowrap">${getTime()}</span>
    `;
    historyBox.append(div);
}

const cards = document.querySelectorAll(".bg-white.rounded-xl");

for (let card of cards) {
    const name = card.querySelector("h3").innerText;
    const number = card.querySelector("p.text-2xl").innerText;

    const heartBtn = card.querySelector(".heartBtn");
    const callBtn = card.querySelector(".callBtn");
    const copyBtn = card.querySelector(".copyBtn");
    


    if (heartBtn) {
        heartBtn.addEventListener("click", () => {
            hearts++;
            heartCountEl.innerText = hearts;
            updateCounters();
            heartBtn.classList.toggle("text-red-500");
        });
    }
    if (callBtn) {
        callBtn.addEventListener("click", () => {
            if (coins < 20) {
                alert("You need at least 20 coins to make a call");
                return;
            }
            coins -= 20;
            coinCountEl.innerText = coins;
            updateCounters();
            alert(`Calling ${name} at ${number}`);
            addHistory(name, number);
        });
    }
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(number).then(() => {
                copies++;
                copyCountEl.innerText = copies;
                updateCounters();
                alert(`Copied ${number} to clipboard`);
            });
        });
    }
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        historyBox.innerHTML = "";
    });
}


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
