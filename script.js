// Animal Data
const animals = [
    {
        id: 1,
        name: "สิงโต (Lion)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "สิงโตเป็นสัตว์ตระกูลแมวที่มีขนาดใหญ่ที่สุดในแอฟริกา มีฉายาว่า 'เจ้าป่า' ตัวผู้มีแผงคอที่สง่างาม สิงโตมักอยู่รวมกันเป็นฝูง",
        image: "picAnimal/สัตว์บก/สิงโต (Lion).jpg",
        foodChain: { eats: ["ม้าลาย", "กวาง", "ควายป่า"], eatenBy: ["ไม่มี (Apex Predator)"] }
    },
    {
        id: 2,
        name: "ฉลามขาว (Great White Shark)",
        type: "water",
        habitat: "มหาสมุทรทั่วโลก (Oceans)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "ฉลามขาวเป็นปลานักล่าขนาดใหญ่ที่สุดในโลก มีฟันที่แหลมคมและประสาทสัมผัสในการดมกลิ่นเลือดที่ยอดเยี่ยม",
        image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=1000",
        foodChain: { eats: ["แมวน้ำ", "ปลาใหญ่", "โลมา"], eatenBy: ["วาฬเพชฌฆาต"] }
    },
    {
        id: 3,
        name: "นกอินทรีหัวขาว (Bald Eagle)",
        type: "poultry",
        habitat: "ป่าและพื้นที่ใกล้แหล่งน้ำ (Forests & Lakes)",
        diet: "สัตว์กินเนื้อ/ปลา (Carnivore/Piscivore)",
        description: "นกอินทรีหัวขาวเป็นสัญลักษณ์ของความอิสระและความแข็งแกร่ง มีสายตาที่เฉียบคมและกรงเล็บที่ทรงพลัง",
        image: "picAnimal/สัตว์ปีก/นกอินทรีหัวขาว (Bald Eagle).jpg",
        foodChain: { eats: ["ปลา", "กระต่าย", "นกขนาดเล็ก"], eatenBy: ["ไม่มี (Apex Predator)"] }
    },
    {
        id: 4,
        name: "ช้างแอฟริกา (African Elephant)",
        type: "land",
        habitat: "ป่าและทุ่งหญ้า (Forests & Savannahs)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ช้างแอฟริกาเป็นสัตว์บกที่มีขนาดใหญ่ที่สุดในโลก มีงวงที่ยาวและใบหูขนาดใหญ่เพื่อระบายความร้อน",
        image: "picAnimal/สัตว์บก/ช้างแอฟริกา (African Elephant).jpg",
        foodChain: { eats: ["หญ้า", "เปลือกไม้", "ผลไม้"], eatenBy: ["สิงโต (เฉพาะตัวอ่อน)"] }
    },
    {
        id: 5,
        name: "โลมา (Dolphin)",
        type: "water",
        habitat: "ทะเลและมหาสมุทร (Seas & Oceans)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "โลมาเป็นสัตว์เลี้ยงลูกด้วยนมที่ฉลาดและขี้เล่น ชอบอยู่รวมกันเป็นฝูงและสามารถสื่อสารกันได้ด้วยเสียง",
        image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&q=80&w=1000",
        foodChain: { eats: ["ปลา", "หมึก"], eatenBy: ["ฉลาม", "วาฬเพชฌฆาต"] }
    },
    {
        id: 6,
        name: "นกยูง (Peacock)",
        type: "poultry",
        habitat: "ป่าโปร่ง (Open Forests)",
        diet: "สัตว์กินพืชและแมลง (Omnivore)",
        description: "นกยูงตัวผู้มีขนหางที่สวยงามและสามารถรำแพนเพื่อเกี้ยวพาราสีตัวเมีย เป็นสัญลักษณ์ของความงดงาม",
        image: "picAnimal/สัตว์ปีก/นกยูง (Peacock).jpg",
        foodChain: { eats: ["เมล็ดพืช", "แมลง", "สัตว์เลื้อยคลานขนาดเล็ก"], eatenBy: ["เสือ", "เสือดาว"] }
    },
    {
        id: 7,
        name: "ยีราฟ (Giraffe)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ยีราฟเป็นสัตว์บกที่สูงที่สุดในโลก มีคอที่ยาวมากเพื่อช่วยในการกินใบไม้จากยอดไม้สูง",
        image: "picAnimal/สัตว์บก/ยีราฟ (Giraffe).jpg",
        foodChain: { eats: ["ใบอะเคเซีย", "ยอดไม้"], eatenBy: ["สิงโต", "ไฮยีน่า"] }
    },
    {
        id: 8,
        name: "เสือโคร่ง (Tiger)",
        type: "land",
        habitat: "ป่าทึบและทุ่งหญ้า (Forests & Grasslands)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "เสือโคร่งเป็นสัตว์ตระกูลแมวที่มีขนาดใหญ่ที่สุด มีลายพาดกลอนที่เป็นเอกลักษณ์เฉพาะตัวในแต่ละตัว",
        image: "picAnimal/สัตว์บก/เสือโคร่ง (Tiger).jpg",
        foodChain: { eats: ["กวาง", "หมูป่า", "พุ่งป่า"], eatenBy: ["ไม่มี (Apex Predator)"] }
    },
    {
        id: 9,
        name: "จิงโจ้ (Kangaroo)",
        type: "land",
        habitat: "ทุ่งหญ้าในออสเตรเลีย (Australian Outback)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "จิงโจ้เป็นสัตว์ที่มีกระเป๋าหน้าท้องสำหรับเลี้ยงลูก และใช้การกระโดดเป็นวิธีการเคลื่อนที่หลัก",
        image: "picAnimal/สัตว์บก/จิงโจ้ (Kangaroo).jpg",
        foodChain: { eats: ["หญ้า", "พุ่มไม้"], eatenBy: ["หมาป่าดิงโก", "มนุษย์"] }
    },
    {
        id: 10,
        name: "แพนด้าแดง (Red Panda)",
        type: "land",
        habitat: "ป่าสนบนภูเขาสูง (High-altitude Forests)",
        diet: "สัตว์กินพืช/ไผ่ (Herbivore/Bamboo)",
        description: "แพนด้าแดงมีขนหนานุ่มสีน้ำตาลแดงและหางเป็นพวง ชอบอาศัยอยู่บนต้นไม้เป็นส่วนใหญ่",
        image: "picAnimal/สัตว์บก/แพนด้าแดง (Red Panda).jpg",
        foodChain: { eats: ["ลูกไผ่", "ผลไม้", "แมลง"], eatenBy: ["เสือดาวหิมะ", "มาร์เทน"] }
    },
    {
        id: 11,
        name: "ม้าลาย (Zebra)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ม้าลายเป็นสัตว์ที่มีลายสีขาวดำพาดขวางทั้งตัว ซึ่งช่วยในการอำพรางตัวจากนักล่า",
        image: "picAnimal/สัตว์บก/ม้าลาย (Zebra).jpg",
        foodChain: { eats: ["หญ้า"], eatenBy: ["สิงโต", "เสือดาว", "ไฮยีน่า"] }
    },
    {
        id: 12,
        name: "วาฬสีน้ำเงิน (Blue Whale)",
        type: "water",
        habitat: "มหาสมุทรทั่วโลก (Oceans)",
        diet: "สัตว์กินเนื้อ/แพลงก์ตอน (Carnivore/Krill)",
        description: "วาฬสีน้ำเงินเป็นสัตว์ที่มีขนาดใหญ่ที่สุดที่เคยอาศัยอยู่บนโลกใบนี้ หัวใจของมันมีขนาดเท่ากับรถยนต์หนึ่งคัน",
        image: "picAnimal/สัตว์น้ำ/วาฬสีน้ำเงิน (Blue Whale).jpg",
        foodChain: { eats: ["คริลล์ (กุ้งฝอย)", "แพลงก์ตอน"], eatenBy: ["ไม่มี (Apex Predator)"] }
    },
    {
        id: 13,
        name: "หมึกยักษ์ (Octopus)",
        type: "water",
        habitat: "แนวปะการังและพื้นหิน (Reefs & Rocks)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "หมึกยักษ์เป็นสัตว์ไม่มีกระดูกสันหลังที่ฉลาดมาก สามารถเปลี่ยนสีและสัมผัสผิวหนังเพื่ออำพรางตัวได้",
        image: "picAnimal/สัตว์น้ำ/หมึกยักษ์ (Octopus).jpg",
        foodChain: { eats: ["ปู", "กุ้ง", "หอย"], eatenBy: ["ฉลาม", "ปลาไหลมอเรย์"] }
    },
    {
        id: 14,
        name: "เต่าทะเล (Sea Turtle)",
        type: "water",
        habitat: "ทะเลเขตร้อนและอบอุ่น (Tropical Seas)",
        diet: "สัตว์กินพืชและสัตว์ (Omnivore)",
        description: "เต่าทะเลใช้ชีวิตส่วนใหญ่อยู่ในน้ำ และจะขึ้นมาบนบกเพียงเพื่อวางไข่บนชายหาดเท่านั้น",
        image: "picAnimal/สัตว์น้ำ/เต่าทะเล (Sea Turtle).jpg",
        foodChain: { eats: ["แมงกะพรุน", "สาหร่าย", "ฟองน้ำ"], eatenBy: ["ฉลาม (ตัวเต็มวัย)", "นก/ปู (ตัวอ่อน)"] }
    },
    {
        id: 15,
        name: "ม้าน้ำ (Seahorse)",
        type: "water",
        habitat: "พื้นทะเลที่มีสาหร่ายและหญ้าทะเล (Seagrass beds)",
        diet: "สัตว์กินเนื้อขนาดเล็ก (Carnivore)",
        description: "ม้าน้ำเป็นปลาที่มีหัวคล้ายม้า และเป็นหนึ่งในสัตว์ไม่กี่ชนิดที่ตัวผู้เป็นฝ่ายอุ้มท้องและคลอดลูก",
        image: "picAnimal/สัตว์น้ำ/ม้าน้ำ (Seahorse).jpg",
        foodChain: { eats: ["แพลงก์ตอนสัตว์", "กุ้งขนาดเล็ก"], eatenBy: ["ปลาใหญ่", "ปู", "เพนกวิน"] }
    },
    {
        id: 16,
        name: "แมงกะพรุน (Jellyfish)",
        type: "water",
        habitat: "มหาสมุทร (Oceans)",
        diet: "สัตว์กินเนื้อขนาดเล็ก (Carnivore)",
        description: "แมงกะพรุนเป็นสัตว์โปร่งแสงที่ไม่มีสมอง หัวใจ หรือกระดูก มีเข็มพิษอยู่ที่หนวดเพื่อป้องกันตัว",
        image: "picAnimal/สัตว์น้ำ/แมงกะพรุน (Jellyfish).jpg",
        foodChain: { eats: ["แพลงก์ตอน", "ไข่ปลา"], eatenBy: ["เต่าทะเล", "ปลาแสงอาทิตย์"] }
    },
    {
        id: 17,
        name: "นกเค้าแมว (Owl)",
        type: "poultry",
        habitat: "ป่าไม้และพื้นที่เกษตร (Forests & Farmlands)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "นกเค้าแมวเป็นนักล่าในเวลากลางคืนที่มีสายตาดีเยี่ยมและสามารถบินได้เงียบกริบเพื่อไม่ให้เหยื่อรู้ตัว",
        image: "picAnimal/สัตว์ปีก/นกเค้าแมว (Owl).jpg",
        foodChain: { eats: ["หนู", "แมลง", "นกขนาดเล็ก"], eatenBy: ["นกเหยี่ยวขนาดใหญ่", "งู (กินลูกนก)"] }
    },
    {
        id: 18,
        name: "นกแก้วมาคอว์ (Macaw)",
        type: "poultry",
        habitat: "ป่าฝนเขตร้อน (Tropical Rainforests)",
        diet: "สัตว์กินพืช/ผลไม้ (Herbivore/Fruit)",
        description: "นกแก้วมาคอว์ขึ้นชื่อเรื่องขนที่มีสีสันสดใสและความฉลาด สามารถเลียนเสียงพูดของมนุษย์ได้",
        image: "picAnimal/สัตว์ปีก/นกแก้วมาคอว์ (Macaw).jpg",
        foodChain: { eats: ["เมล็ดพืช", "ผลไม้", "ถั่ว"], eatenBy: ["งูเหลือม", "นกอินทรี", "เสือจาการ์"] }
    },
    {
        id: 19,
        name: "นกฟลามิงโก (Flamingo)",
        type: "poultry",
        habitat: "ทะเลสาบน้ำเค็มและชายฝั่ง (Saline Lakes & Coasts)",
        diet: "สัตว์กินเนื้อ/แพลงก์ตอน (Carnivore/Plankton)",
        description: "นกฟลามิงโกมีขนสีชมพูที่เกิดจากการกินกุ้งและสาหร่ายที่มีสารคาร์โรทีนอยด์",
        image: "picAnimal/สัตว์ปีก/นกฟลามิงโก (Flamingo).jpg",
        foodChain: { eats: ["กุ้งจิ๋ว", "สาหร่ายสีน้ำเงินแกมเขียว"], eatenBy: ["ไฮยีน่า", "เสือจาการ์", "ปลาไหล"] }
    },
    {
        id: 20,
        name: "หงส์ขาว (Mute Swan)",
        type: "poultry",
        habitat: "แม่น้ำและทะเลสาบ (Rivers & Lakes)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "หงส์ขาวเป็นสัญลักษณ์ของความสง่างามและความซื่อสัตย์ มักอาศัยอยู่ในแหล่งน้ำจืดที่เงียบสงบ",
        image: "picAnimal/สัตว์ปีก/หงส์ขาว (Mute Swan).jpg",
        foodChain: { eats: ["พืชน้ำ", "รากไม้"], eatenBy: ["สุนัขจิ้งจอก", "แรคคูน (กินไข่)"] }
    },
    {
        id: 21,
        name: "นกทูแคน (Toucan)",
        type: "poultry",
        habitat: "ป่าฝนเขตร้อน (Tropical Rainforests)",
        diet: "สัตว์กินพืช/ผลไม้ (Herbivore/Fruit)",
        description: "นกทูแคนมีจะงอยปากขนาดใหญ่ที่มีสีสันสวยงาม ซึ่งช่วยในการเอื้อมเก็บผลไม้ที่อยู่ห่างไกล",
        image: "picAnimal/สัตว์ปีก/นกทูแคน (Toucan).jpg",
        foodChain: { eats: ["ผลไม้", "แมลง", "ไข่นกเล็ก"], eatenBy: ["เสือจาการ์", "งู", "เหยี่ยว"] }
    },
    {
        id: 22,
        name: "อ้น (Bamboo Rat)",
        type: "land",
        habitat: "ป่าไผ่และพื้นดิน (Bamboo Forests)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "อ้นเป็นสัตว์ฟันแทะที่มีรูปร่างอ้วนกลม มีฟันหน้าขนาดใหญ่ที่แข็งแรงมาก อาศัยอยู่ในโพรงดินและกินหน่อไม้หรือรากไผ่เป็นอาหารหลัก",
        image: "picAnimal/สัตว์บก/อ้น.jpg",
        foodChain: {
            eats: ["หน่อไม้ (Bamboo Shoots)", "รากไผ่ (Bamboo Roots)", "อ้อย (Sugar Cane)"],
            eatenBy: ["งู (Snake)", "เสือไฟ (Asiatic Golden Cat)", "มนุษย์ (Human)"]
        }
    }
];

// Fun Facts Data
const funFacts = [
    "หัวใจของวาฬสีน้ำเงินมีขนาดใหญ่เท่ากับรถยนต์หนึ่งคัน!",
    "สิงโตตัวพู้นอนได้นานถึง 20 ชั่วโมงต่อวัน",
    "หมึกยักษ์มีหัวใจ 3 ดวง และเลือดของมันเป็นสีน้ำเงิน",
    "จิงโจ้ไม่สามารถกระโดดถอยหลังได้",
    "หงส์มีกระดูกคอมากกว่ายีราฟ",
    "เสือโคร่งมีลายบนผิวหนังไม่ใช่แค่บนขน และลายแต่ละตัวจะไม่ซ้ำกันเลย",
    "แพนด้ากินไผ่ได้วันละ 12-38 กิโลกรัม",
    "ม้าน้ำเป็นปลาชนิดเดียวที่มีคอ และตัวผู้เป็นตัวที่คลอดลูก",
    "นกฮูกสามารถหมุนหัวได้ถึง 270 องศา",
    "ช้างแอฟริกาเป็นสัตว์บกที่มีขนาดใหญ่ที่สุดในปัจจุบัน",
    "อ้นสามารถขุดอุโมงค์ใต้ดินได้ลึกและยาวมากเพื่อสร้างรัง"
];

// DOM Elements
const navbar = document.querySelector('.navbar');
const animalsGrid = document.getElementById('animalsGrid');
const recommendedGrid = document.getElementById('recommendedGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('animalModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const dietFilter = document.getElementById('dietFilter');
const funFactEl = document.getElementById('funFact');

// State Manager
const state = {
    category: 'all',
    search: '',
    diet: 'all',
    compareList: []
};

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a page where these elements exist
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Initialize components only if elements exist
    if (filterBtns.length > 0 || searchInput || dietFilter) {
        setupEventListeners();
    }

    if (document.getElementById('startCompareBtn')) {
        setupComparisonListeners();
    }

    initScrollAnimations();

    if (animalsGrid) {
        renderAnimals(animals);
    }

    if (recommendedGrid) {
        renderRecommended();
    }

    // Theme initialization
    initTheme();

    if (funFactEl) {
        renderFunFact();
    }
});

// Theme Logic
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeToggle, savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeToggle, newTheme);
    });
}

function updateThemeIcon(btn, theme) {
    const icon = btn.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Fun Fact Logic
function renderFunFact() {
    if (!funFactEl) return;
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    funFactEl.innerHTML = `<span><strong>รู้หรือไม่:</strong> ${randomFact}</span>`;
}

function applyFilters() {
    const filtered = animals.filter(animal => {
        const matchesCategory = state.category === 'all' || animal.type === state.category;
        const matchesSearch = animal.name.toLowerCase().includes(state.search.toLowerCase());

        // Clean diet string for matching
        const dietSlug = getDietSlug(animal.diet);
        const matchesDiet = state.diet === 'all' || dietSlug === state.diet;

        return matchesCategory && matchesSearch && matchesDiet;
    });

    renderAnimals(filtered);
}

function getDietSlug(dietStr) {
    if (dietStr.includes('สัตว์กินเนื้อ')) return 'carnivore';
    if (dietStr.includes('สัตว์กินพืช')) return 'herbivore';
    return 'omnivore'; // covers 'สัตว์กินพืชและแมลง' or others
}

// Render Recommended Function
function renderRecommended() {
    if (!recommendedGrid) return;

    // Pick 6 random unique animals
    const shuffled = [...animals].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);

    recommendedGrid.innerHTML = '';

    selected.forEach((animal, index) => {
        const card = createAnimalCard(animal, index * 0.1);
        recommendedGrid.appendChild(card);
    });
}

// Helper to create card element
function createAnimalCard(animal, delay, showCompare = true) {
    const card = document.createElement('article');
    card.className = 'animal-card';

    // Instead of inline animation, we let CSS + IntersectionObserver handle it
    // But we can still keep the delay if we want them to cascade on initial load
    card.style.transitionDelay = `${delay}s`;

    const typeInfo = getTypeInfo(animal.type);

    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${animal.image}" alt="${animal.name}" class="card-image">
        </div>
        <div class="card-actions">
            <button class="action-btn favorite-btn ${isFavorite(animal.name) ? 'active' : ''}" title="เพิ่มในรายการโปรด"><i class="fa-solid fa-heart"></i></button>
            ${showCompare ? `<button class="action-btn compare-btn ${state.compareList.some(a => a.id === animal.id) ? 'active' : ''}" title="เปรียบเทียบ"><i class="fa-solid fa-right-left"></i></button>` : ''}
        </div>
        <div class="card-info">
            <span class="card-badge ${typeInfo.className}">${typeInfo.label}</span>
            <h3>${animal.name}</h3>
            <p><i class="fa-solid fa-location-dot"></i> ${animal.habitat}</p>
        </div>
    `;

    // Internal actions
    const favoriteBtn = card.querySelector('.favorite-btn');
    const compareBtn = card.querySelector('.compare-btn');

    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isFav = toggleFavorite(animal.name);
        favoriteBtn.classList.toggle('active', isFav);

        // Add animation
        favoriteBtn.style.transform = 'scale(1.3)';
        setTimeout(() => {
            favoriteBtn.style.transform = 'scale(1)';
        }, 200);
    });

    if (compareBtn) {
        compareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCompare(animal);
        });
    }

    card.addEventListener('click', () => openModal(animal));

    // If explorer exists, observe it
    if (window.animalObserver) {
        window.animalObserver.observe(card);
    }

    return card;
}

// Render Function
function renderAnimals(data) {
    if (!animalsGrid) return;
    animalsGrid.innerHTML = '';

    data.forEach((animal, index) => {
        const card = createAnimalCard(animal, index * 0.05);
        animalsGrid.appendChild(card);
    });
}

// Helper: Get Type Info
function getTypeInfo(type) {
    switch (type) {
        case 'land': return { label: 'สัตว์บก', className: 'badge-land' };
        case 'water': return { label: 'สัตว์น้ำ', className: 'badge-water' };
        case 'poultry': return { label: 'สัตว์ปีก', className: 'badge-poultry' };
        default: return { label: 'ทั่วไป', className: '' };
    }
}

// Filter Logic
function setupEventListeners() {
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.category = btn.dataset.filter;
                applyFilters();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.search = e.target.value;
            applyFilters();
        });
    }

    if (dietFilter) {
        dietFilter.addEventListener('change', (e) => {
            state.diet = e.target.value;
            applyFilters();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Unlock scroll
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Unlock scroll
        }
    });
}

// Check if animal is favorited
// This function is assumed to be defined in favorites.js or globally available
// function isFavorite(animalName) {
//     const favorites = getUserFavorites();
//     const normalizedTarget = normalizeAnimalName(animalName);

//     const result = favorites.some(fav =>
//         normalizeAnimalName(fav) === normalizedTarget || fav === animalName
//     );
//     return result;
// }

// Modal Logic
function openModal(animal) {
    if (!modal || !modalBody) return;

    const typeInfo = getTypeInfo(animal.type);

    modalBody.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" class="modal-img">
        <div class="modal-details">
            <span class="card-badge ${typeInfo.className}" style="align-self: flex-start; margin-bottom: 20px;">${typeInfo.label}</span>
            <h2>${animal.name}</h2>
            
            <div class="detail-row">
                <span class="label"><i class="fa-solid fa-tree"></i> ถิ่นที่อยู่ (Habitat)</span>
                <span class="value">${animal.habitat}</span>
            </div>
            
            <div class="detail-row">
                <span class="label"><i class="fa-solid fa-utensils"></i> อาหาร (Diet)</span>
                <span class="value">${animal.diet}</span>
            </div>
            
            <div class="detail-row" style="border: none; padding-bottom: 0;">
                <span class="label"><i class="fa-solid fa-info-circle"></i> ข้อมูลทั่วไป (Description)</span>
                <p class="value" style="margin-top: 5px; line-height: 1.6;">${animal.description}</p>
            </div>

            <!-- Educational Expert Features -->
            <div class="modal-educational-grid" style="grid-template-columns: 1fr;">
                <!-- Food Chain -->
                <div class="food-chain-container">
                    <div class="food-chain-title"><i class="fa-solid fa-link"></i> ห่วงโซ่อาหาร (Food Chain)</div>
                    <div class="chain-visual">
                        <div class="chain-node eats">
                            <span class="node-label">กิน:</span>
                            <span class="node-value">${animal.foodChain.eats.join(', ')}</span>
                        </div>
                        <div class="chain-node eaten-by">
                            <span class="node-label">ถูกกินโดย:</span>
                            <span class="node-value">${animal.foodChain.eatenBy.join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

// Comparison Logic
function toggleCompare(animal) {
    const index = state.compareList.findIndex(a => a.id === animal.id);
    if (index > -1) {
        state.compareList.splice(index, 1);
    } else {
        if (state.compareList.length >= 2) {
            alert('เปรียบเทียบได้สูงสุด 2 ชนิดครับ');
            return;
        }
        state.compareList.push(animal);
    }

    updateComparisonUI();
}

function updateComparisonUI() {
    const dock = document.getElementById('compareDock');
    const count = document.getElementById('compareCount');
    const slots = document.getElementById('compareSlots');
    const startBtn = document.getElementById('startCompareBtn');

    count.textContent = state.compareList.length;
    slots.innerHTML = '';

    state.compareList.forEach(animal => {
        const slot = document.createElement('div');
        slot.className = 'compare-slot';
        slot.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <button class="remove-slot" onclick="event.stopPropagation(); removeCompare(${animal.id})">&times;</button>
        `;
        slots.appendChild(slot);
    });

    // Sync to localStorage for the new tab
    localStorage.setItem('compareList', JSON.stringify(state.compareList));

    startBtn.disabled = state.compareList.length < 2;

    if (state.compareList.length > 0) {
        dock.classList.add('show');
    } else {
        dock.classList.remove('show');
    }

    // Update active state on all visible cards
    document.querySelectorAll('.animal-card').forEach(card => {
        // This is a bit expensive but keeps it in sync
        // A better way would be using animal id in dataset
    });

    // For simplicity, we'll re-render the grid if needed or just toggle classes manually
    // But re-rendering might lose scroll positions. Let's try class toggling
    applyCompareClasses();
}

function removeCompare(id) {
    state.compareList = state.compareList.filter(a => a.id !== id);
    updateComparisonUI();
}

// Make globally accessible for onclick
window.removeCompare = removeCompare;

function applyCompareClasses() {
    // This is optional if we don't want to re-render everything
}

function setupComparisonListeners() {
    const startBtn = document.getElementById('startCompareBtn');
    const clearBtn = document.getElementById('clearCompareBtn');

    startBtn.addEventListener('click', () => {
        window.open('compare.html', '_blank');
    });

    clearBtn.addEventListener('click', () => {
        state.compareList = [];
        updateComparisonUI();
    });
}

function openComparison() {
    if (state.compareList.length < 2) return;

    const modal = document.getElementById('compareModal');
    const content = document.getElementById('compareContent');

    content.innerHTML = state.compareList.map(animal => `
        <div class="compare-item">
            <img src="${animal.image}" alt="${animal.name}">
            <h2>${animal.name}</h2>
            <div class="compare-stats">
                <div class="stat-box"><span class="label">ประเภท</span><span class="value">${getTypeInfo(animal.type).label}</span></div>
                <div class="stat-box"><span class="label">ถิ่นที่อยู่</span><span class="value">${animal.habitat}</span></div>
                <div class="stat-box"><span class="label">อาหาร</span><span class="value">${animal.diet}</span></div>
            </div>
            <p style="margin-top: 20px; color: var(--text-muted); font-size: 0.9rem;">${animal.description}</p>
        </div>
    `).join('');

    modal.classList.add('show');
}

function initScrollAnimations() {
    window.animalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll('.section-title, .filters, .recommended-section, .animal-card');
    elementsToAnimate.forEach(el => window.animalObserver.observe(el));
}
