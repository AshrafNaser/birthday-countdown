const totalDays = 30;
const targetDate = new Date(2025, 10, 18); // 🎂 birthday date
const today = new Date(2025, 10, 18);

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
  { day: 1, title: "Descent into the Deep", content: "A lone diver slips beneath the waves, her hair floating like dark silk in the golden sunlight.\nThe ocean welcomes her with a soft, whispering current, as if greeting an old friend.\nTiny bubbles trail behind her, sparkling like scattered pearls.\nAbove, shafts of light pierce the deep, revealing the shimmer of unseen creatures.\nShe feels the pulse of the sea, ancient and alive, pulling her forward.", icon: "🦈", image: "imgs/1.JPG" },

  { day: 2, title: "The Silver Path", content: "A glimmering path of silver fish twists and turns through a coral archway.\nThe stones around her seem carved by hands long forgotten, etched with strange symbols.\nShe reaches out, fingers brushing against the cool surface, feeling the heartbeat of history.\nAbove, a flock of dolphins arcs through the sunbeams, leading her toward the unknown.\nHer heart quickens; every moment feels like stepping into a dream.", icon: "🐋", image: "imgs/2.JPG" },

  { day: 3, title: "The Ancient Turtle", content: "From the shadows, a giant turtle emerges, gliding with an elegance that commands reverence.\nIts eyes are wise, as if guarding secrets buried since the age of kings and explorers.\nShe follows it into a canyon of glowing jellyfish, their pulses like lanterns lighting a hidden street.\nThe water hums with magic, and she feels herself becoming part of the ocean’s story.\nEvery flicker of light, every ripple, tells her she is meant to be here.", icon: "🐢", image: "imgs/3.JPG" },

  { day: 4, title: "The Sunken Temple", content: "A ruined temple rises from the sand, columns entwined with kelp and coral, echoing lost grandeur.\nThe water feels heavy with the weight of stories from kingdoms swallowed by time.\nShe touches a carved trident lying on the floor, pearls encrusted along its length, humming softly.\nA current wraps around her like a cloak, lifting her toward the palace that seems to grow from the sea itself.\nIn the distance, shadows of ancient guardians shift silently, watching, waiting.", icon: "⭐", image: "imgs/4.JPG" },

  { day: 5, title: "The Palace of Fish", content: "Within the palace, courts of fish bow and twirl, orchestrated like a royal dance.\nDolphins leap gracefully, their laughter sparkling in the water, celebrating her arrival.\nA mermaid appears, her eyes reflecting moonlight even in the deepest waters.\nShe gestures toward a spiral staircase of shells, each step glowing faintly.\nThe diver ascends, heart racing with discovery and quiet awe.", icon: "🪼", image: "imgs/5.JPG" },

  { day: 6, title: "Hall of Mirrors", content: "The staircase leads to a hall of mirrors, obsidian glass reflecting every flicker of light.\nAncient murals shimmer, telling tales of lovers and warriors lost to the waves.\nShe touches a mirror and sees glimpses of a world forgotten by time.\nSoft currents carry whispers of laughter, courage, and love that echoes across centuries.\nThe diver feels herself part of a timeless story unfolding.", icon: "🐬", image: "imgs/6.JPG" },

  { day: 7, title: "The Hidden Garden", content: "A secret garden appears, hidden in a dome of coral and bioluminescent flowers.\nSeahorses float gently, and jellyfish pulse in rhythm like lanterns in a silent night.\nEvery creature seems to recognize her, bowing or gliding with purpose.\nA glowing path winds through the garden, leading toward a mysterious chamber.\nShe follows, heart swelling with anticipation.", icon: "🐙", image: "imgs/7.JPG" },

  { day: 8, title: "The Throne of Coral", content: "The chamber opens to reveal a throne carved from coral and gemstones.\nSoft light glints across the floor, revealing treasures forgotten by sailors and kings.\nA gentle hum resonates through the water, echoing like a song of old magic.\nThe mermaid gestures to the throne, inviting her closer.\nThe diver hesitates, awed by the beauty and the weight of history.", icon: "🐠", image: "imgs/8.JPG" },

  { day: 9, title: "Floating Scrolls", content: "Scrolls float in midwater, inscribed with stories of heroism, love, and epic underwater battles.\nShe reads them carefully, feeling the pulse of generations long gone.\nOutside, a school of rainbow fish twirls, forming shapes that seem almost like letters.\nShe senses a message hidden in every current, every glimmer of light.\nThe ocean seems alive, guiding her toward something extraordinary.", icon: "🦀", image: "imgs/9.JPG" },

  { day: 10, title: "The Glowing Chalice", content: "A glowing chalice hovers above a pedestal, radiating warmth and soft light.\nShe reaches out, feeling the magic hum through her fingertips.\nVisions appear in the water: star-crossed lovers meeting secretly beneath the waves.\nEach vision is fleeting yet powerful, whispering stories of devotion and courage.\nShe steps back, letting the images linger in her heart.", icon: "🪸", image: "imgs/10.JPG" },

  { day: 11, title: "Statues of the Sea", content: "The palace hums with energy, statues of sea gods moving slightly as if observing her.\nA gentle current swirls, lifting sand and tiny shells into intricate patterns.\nShe feels the pulse of ancient power and understands that this place remembers everything.\nA corridor opens before her, lined with arches carved from shells and coral.\nShe steps forward, curiosity and wonder guiding her way.", icon: "🐧", image: "imgs/11.JPG" },

  { day: 12, title: "The Bioluminescent Tunnel", content: "A tunnel glows with bioluminescent plants, their light forming constellations in the water.\nShe swims carefully, feeling the soft pull of the ocean guiding her.\nAbove her, shadows of sea serpents glide silently, guardians of treasures unseen.\nThe water is alive with whispers of past explorers, their courage lingering in the depths.\nEvery step feels like a dance with history.", icon: "🦭", image: "imgs/12.JPG" },

  { day: 13, title: "Chamber of Pearls", content: "She reaches a vast chamber where pearls float in midwater like stars suspended in night.\nEach pearl pulses gently, illuminating ancient murals of undersea battles and romances.\nA school of dolphins leaps around her, their movements synchronized and elegant.\nShe feels a connection, as if the ocean itself is welcoming her into its eternal story.\nHer heartbeat matches the rhythm of the water.", icon: "🐟", image: "imgs/13.JPG" },

  { day: 14, title: "Spiral Staircase of Light", content: "A spiral staircase rises from the chamber floor, formed entirely from glowing coral.\nShe climbs carefully, each step revealing murals of heroes and lovers entwined in destiny.\nThe staircase leads to an open hall where sunlight filters through the waves above.\nShe sees a throne inlaid with gemstones, each glimmering with a hidden story.\nHer excitement grows, anticipation coursing through her like electricity.", icon: "🐠", image: "imgs/14.JPG" },

  { day: 15, title: "The Treasure Chest", content: "In the throne room, mermaids and mystical creatures gather silently, observing her every move.\nGolden light streams through cracks in the coral ceiling, illuminating ancient artifacts.\nA treasure chest sits in the center, engraved with symbols she cannot decipher.\nShe approaches, feeling a strange blend of reverence and exhilaration.\nHer fingers brush the chest, and a soft vibration hums through the water.", icon: "🦞", image: "imgs/15.JPG" },

  { day: 16, title: "Visions of the Lost City", content: "The chest opens slowly, revealing scrolls of gold and silver, detailing legendary underwater voyages.\nA vision of a lost city forms in the water: towers, bridges, and streets of coral and pearl.\nShe drifts closer, eyes wide with awe, imagining the lives of those who once thrived here.\nCurrents carry whispers of romance, adventure, and magic from centuries past.\nShe feels a part of the story, as if chosen by the ocean itself.", icon: "🛸", image: "imgs/16.JPG" },

  { day: 17, title: "The Golden Pearl", content: "A glowing pearl rises from the chest, hovering in front of her, radiating warmth.\nVisions swirl inside: explorers discovering secret kingdoms, lovers reunited beneath the waves.\nShe reaches for it, and the pearl hums with recognition, acknowledging her courage.\nA school of fish forms a circle around her, their movements elegant and purposeful.\nThe ocean feels alive, protective, and full of wonder.", icon: "🦭", image: "imgs/17.JPG" },

  { day: 18, title: "Library of the Deep", content: "The diver follows a narrow passage leading to an ancient library of coral and shells.\nScrolls and tablets float freely, glowing softly in the water.\nEach holds stories of heroism, passion, and the delicate balance of the deep.\nShe reads carefully, absorbing the lessons of the ages and the poetry of the waves.\nHer heart beats in sync with the rhythm of the ocean.", icon: "🐡", image: "imgs/18.JPG" },

  { day: 19, title: "Crystal Corridor", content: "From the library, a hidden tunnel opens, lined with crystals that pulse with soft blue light.\nShe drifts through, guided by an invisible hand, feeling the magic grow stronger.\nShadows of mythical creatures dance along the walls, ancient guardians of wisdom.\nShe senses a presence watching, curious and benevolent.\nEach step brings her closer to the heart of the sunken kingdom.", icon: "🌊", image: "imgs/19.JPG" },

  { day: 20, title: "Hall of Relics", content: "A grand hall opens before her, filled with relics of ancient civilizations.\nArmor glints softly, decorated with motifs of sea creatures and legendary heroes.\nShe drifts among them, imagining the stories behind each artifact.\nThe water hums gently, and she feels herself becoming part of the kingdom’s history.\nHer sense of wonder deepens with every movement.", icon: "🦑", image: "imgs/20.JPG" },

  { day: 21, title: "The Glowing Orb", content: "In the center of the hall, a pedestal holds a glowing orb, radiating soft golden light.\nShe reaches out, and memories of past explorers flash before her eyes.\nThe orb shows visions of love, bravery, and discovery, intertwining like ribbons of light.\nShe realizes that the ocean remembers everything and honors those who cherish it.\nHer heart swells with connection and awe.", icon: "🦦", image: "imgs/21.JPG" },

  { day: 22, title: "Corridor of Whispers", content: "A corridor of arches, carved with intricate patterns, opens before her.\nBioluminescent plants line the path, pulsing with gentle life.\nShe drifts forward, sensing whispers of romance and adventure around each bend.\nShadows of mystical creatures flicker at the edge of her vision.\nEvery sound, every flicker of light feels like part of a secret story.", icon: "🔮", image: "imgs/22.JPG" },

  { day: 23, title: "Chamber of Floating Treasures", content: "At the end of the corridor, a vast chamber appears, filled with floating treasures.\nChests, pearls, and artifacts glimmer, each holding a story of love or bravery.\nShe moves among them carefully, feeling the history pulse beneath the waves.\nA golden scroll floats toward her, shimmering with an inner light.\nShe reaches out, curiosity sparkling in her eyes.", icon: "🐟", image: "imgs/23.JPG" },

  { day: 24, title: "The Scroll of Wisdom", content: "The scroll unrolls, revealing words of wisdom from ancient sea kings and queens.\nIt speaks of courage, love, and the bonds between the ocean and those who respect it.\nShe reads slowly, savoring each line, feeling the connection deepen.\nOutside, creatures gather as if drawn by the magic of the scroll.\nThe chamber hums softly, alive with the stories it holds.", icon: "⚡", image: "imgs/24.JPG" },

  { day: 25, title: "The Path to the Surface", content: "A passage opens to the surface, light streaming down like a divine invitation.\nCurrents swirl around her, carrying whispers of adventures yet to come.\nShe drifts upward, guided by the golden glow of the sun above the waves.\nHer heart races with anticipation, ready to discover the final secret of the kingdom.\nEvery bubble, every shimmer feels like a clue left by the ocean itself.", icon: "🦐", image: "imgs/25.JPG" },

  { day: 26, title: "The Sunken City Revealed", content: "Breaking through a curtain of light, she sees a sunken city stretching across the sand.\nTowers of coral and bridges of pearl shimmer with the history of countless generations.\nFish dart through streets, dolphins leap across sunlit plazas, and whales sing in the distance.\nShe drifts over the city, marveling at the beauty and stories preserved beneath the waves.\nThe magic of the ocean surrounds her, both ancient and eternal.", icon: "🦩", image: "imgs/26.JPG" },

  { day: 27, title: "The Majestic Palace", content: "A palace rises from the heart of the city, more magnificent than anything she has seen.\nIts towers glow softly, adorned with gemstones that catch the light in endless rainbows.\nMystical creatures glide past, guiding her to the central hall.\nShe feels her pulse quicken as she approaches, sensing the culmination of her journey.\nThe ocean seems to hold its breath, waiting.", icon: "🐍", image: "imgs/27.JPG" },

  { day: 28, title: "Hall of Eternal Magic", content: "Inside the hall, the treasures of the kingdom are arranged like a grand mosaic.\nPearls float like stars, artifacts glimmer, and the water hums with magic.\nShe moves carefully, absorbing every detail, every story held in the currents.\nA sense of reverence fills her, as if she has become part of the kingdom herself.\nEvery heartbeat echoes through the palace, connecting her to history and mystery alike.", icon: "🦭", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Walrus2.jpg" },

  { day: 29, title: "The Final Chamber", content: "A final chamber appears, bathed in golden light filtering from the surface.\nAt its center, a treasure chest rests, glowing softly as if alive.\nShe drifts closer, hands trembling with anticipation.\nThe water around her pulses gently, echoing the magic of the ocean.\nShe knows that what lies within will complete her journey.", icon: "🐚", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Hermit_crab.jpg" },

  { day: 30, title: "The Birthday Reveal", content: "The chest opens slowly, revealing a radiant pearl and a golden scroll.\nThe scroll unfurls in the water, letters glowing softly, spelling a message of love, adventure, and triumph.\nShe reads it, heart soaring: “Happy Birthday, Leila! May your 40th year be magical and full of adventure.”\nThe pearl rises, casting light across the chamber, illuminating every treasure and every secret.\nThe ocean hums, wrapping her in warmth, magic, and timeless wonder.", icon: "🎂", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Birthday_cake.jpg" }
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
