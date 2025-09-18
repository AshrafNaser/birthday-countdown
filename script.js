const totalDays = 30;
const targetDate = new Date(2025, 10, 18); // 🎂 birthday date
const today = new Date(2025, 10, 1);

// Days until birthday
const diffTime = targetDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// Days unlocked (Day 1 starts 30 days before birthday)
const unlockedDays = totalDays - diffDays + 1;

const countdownEl = document.getElementById("countdown");
countdownEl.textContent = diffDays > 0 
  ? `${diffDays} days to 40!` 
  : "Happy 40th Birthday! 🎉";

// --- 30 Days Content ---
const daysContent = [
  { day: 1,  title: "Shark Day",     content: "Sharks symbolize strength!",   icon: "🦈", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg" },
  { day: 2,  title: "Whale Song",    content: "Gigantic dreams await you!",   icon: "🐋", image: "https://files.worldwildlife.org/wwfcmsprod/images/Humpback_Whale_and_Calf_WW2131047/story_full_width/8q90217t58_Humpback_Whale_and_Calf_WW2131047.jpg" },
  { day: 3,  title: "Turtle Wisdom", content: "Slow and steady wins the race.", icon: "🐢", image: "https://files.worldwildlife.org/wwfcmsprod/images/Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958/story_full_width/11e3bxo822_Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958.jpg" },
  { day: 4,  title: "Starfish Surprise", content: "Resilient and unique, like you!", icon: "⭐", image: "https://www.thoughtco.com/thmb/PHXqLrrhvo1wVZGne0ddMCef9E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg" },
  { day: 5,  title: "Jellyfish Glow", content: "Stay light and go with the flow.", icon: "🪼", image: "https://images.theconversation.com/files/513157/original/file-20230302-28-r91z9l.jpg?ixlib=rb-4.1.0&rect=10%2C0%2C6699%2C4466&q=45&auto=format&w=926&fit=clip" },
  { day: 6,  title: "Dolphin Fun",   content: "Playful energy keeps you young!", icon: "🐬", image: "https://i.guim.co.uk/img/media/04770af676c27704bb329626c79fea80be5ec225/0_304_5175_3105/master/5175.jpg?width=620&dpr=1&s=none&crop=none" },
  { day: 7,  title: "Octopus Day",   content: "Flexible and clever in every challenge.", icon: "🐙", image: "https://images.squarespace-cdn.com/content/v1/5bc75d83e4afe931ade4f0d8/a6c5e4c1-7492-447e-b313-5d6ef7c4fbc7/octopus+2.png" },
  { day: 8,  title: "Seahorse Charm", content: "Graceful uniqueness.", icon: "🐠", image: "https://t4.ftcdn.net/jpg/01/65/03/97/360_F_165039757_BtfpUzoBoclxAd1GD8tIkZM0ZpQnOpHQ.jpg" },
  { day: 9,  title: "Crab Courage",  content: "Tough outside, soft inside.", icon: "🦀", image: "https://t4.ftcdn.net/jpg/02/21/29/01/360_F_221290156_nRmQC0NqaFcqqMG6XpAXxWsNXPivO392.jpg" },
  { day: 10, title: "Coral Beauty",  content: "Life is colorful!", icon: "🪸", image: "https://www.coralguardian.org/app/uploads/2021/10/800-pc.png" },
  { day: 11, title: "Penguin Chill", content: "Cool under pressure.", icon: "🐧", image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/-1x-1.webp" },
  { day: 12, title: "Seal Hugs",     content: "Warm hugs in cold waters.", icon: "🦭", image: "https://i.ytimg.com/vi/kYeHcFvXvho/sddefault.jpg" },
  { day: 13, title: "Swordfish Speed", content: "Swift and sharp!", icon: "🐟", image: "https://www.thoughtco.com/thmb/JgiyFwaipkR9JwARdfvMPhMert4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swordfish-jeff-rotman-getty-56a5f8eb5f9b58b7d0df532f.jpg" },
  { day: 14, title: "Clownfish Joy", content: "Bring laughter everywhere.", icon: "🐠", image: "https://www.scubadiving.com/sites/default/files/styles/655_1x_/public/scuba/images/2022/12/raj06_am-1036edit.jpg?itok=8CeziTNp" },
  { day: 15, title: "Lobster Feast", content: "Celebrate with abundance.", icon: "🦞", image: "https://media.istockphoto.com/id/462147185/photo/red-lobster-during-night-dive.jpg?s=612x612&w=0&k=20&c=PjZzOCTO7I668tr3GMS90G4nxht874gGMphUlzbSstA=" },
  { day: 16, title: "Manta Grace",   content: "Glide through life beautifully.", icon: "🛸", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Manta_birostris-Thailand.jpg" },
  { day: 17, title: "Sea Lion Play", content: "Have fun, stay curious.", icon: "🦭", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sea_lion.jpg" },
  { day: 18, title: "Pufferfish Pop", content: "Stay cute, but protect yourself.", icon: "🐡", image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Pufferfish.jpg" },
  { day: 19, title: "Stingray Calm", content: "Stay calm and glide on.", icon: "🌊", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Stingray.jpg" },
  { day: 20, title: "Squid Ink",     content: "Sometimes mystery is power.", icon: "🦑", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bigfin_reef_squid.jpg" },
  { day: 21, title: "Otter Joy",     content: "Happiness is playful.", icon: "🦦", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Sea_otter_cropped.jpg" },
  { day: 22, title: "Sea Urchin Spikes", content: "Tough yet beautiful.", icon: "🔮", image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sea_urchin.jpg" },
  { day: 23, title: "Anchovy Unity", content: "Stronger together.", icon: "🐟", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Anchovy2.jpg" },
  { day: 24, title: "Barracuda Bold", content: "Be fearless.", icon: "⚡", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Barracuda.jpg" },
  { day: 25, title: "Shrimp Dance",  content: "Tiny but mighty.", icon: "🦐", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shrimp3.jpg" },
  { day: 26, title: "Pelican Dive",  content: "Take the leap!", icon: "🦩", image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Pelican_in_flight.jpg" },
  { day: 27, title: "Sea Snake Twist", content: "Stay flexible.", icon: "🐍", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Sea_snake.jpg" },
  { day: 28, title: "Walrus Wisdom", content: "Big presence, gentle soul.", icon: "🦭", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Walrus2.jpg" },
  { day: 29, title: "Hermit Crab Home", content: "Make comfort wherever you go.", icon: "🐚", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Hermit_crab.jpg" },
  { day: 30, title: "Birthday Splash!", content: "The big 4️⃣0️⃣ is here! 🎉", icon: "🎂", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Birthday_cake.jpg" },
];

// --- Grid Rendering (Day 1 → Day 30) ---
const grid = document.getElementById("grid");
for (let i = 1; i <= totalDays; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  const dayUnlocked = i <= unlockedDays;

  if (!dayUnlocked) {
    box.classList.add("locked");
  } else {
    box.classList.add("unlocked");
    box.addEventListener("click", () => openModal(i));
  }

  const content = daysContent.find(d => d.day === i);
  const iconHtml = content?.icon ? `<div class="icon">${content.icon}</div>` : "";
  box.innerHTML = `${iconHtml}<div>Day ${i}</div>`;
  grid.appendChild(box);
}

// --- Modal ---
function openModal(day) {
  const content = daysContent.find(d => d.day === day);
  if (!content) return;

  document.getElementById("modalTitle").textContent = content.title;
  document.getElementById("modalText").textContent = content.content;
  const mediaDiv = document.getElementById("modalMedia");
  mediaDiv.innerHTML = "";
  if (content.image) {
    const img = document.createElement("img");
    img.src = content.image;
    mediaDiv.appendChild(img);
  }
  if (content.video) {
    const vid = document.createElement("video");
    vid.src = content.video;
    vid.controls = true;
    mediaDiv.appendChild(vid);
  }

  document.getElementById("modal").style.display = "block";
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};
window.onclick = (event) => {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};
document.addEventListener("click", () => {
  const ocean = document.getElementById("oceanSound");
  if (ocean.paused) {
    ocean.play();
  }
});
