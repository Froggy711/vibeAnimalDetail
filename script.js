// Animal Data
const animals = [
    {
        id: 1,
        name: "สิงโต (Lion)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "สิงโตเป็นสัตว์ตระกูลแมวที่มีขนาดใหญ่ที่สุดในแอฟริกา มีฉายาว่า 'เจ้าป่า' ตัวผู้มีแผงคอที่สง่างาม สิงโตมักอยู่รวมกันเป็นฝูง",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        name: "ฉลามขาว (Great White Shark)",
        type: "water",
        habitat: "มหาสมุทรทั่วโลก (Oceans)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "ฉลามขาวเป็นปลานักล่าขนาดใหญ่ที่สุดในโลก มีฟันที่แหลมคมและประสาทสัมผัสในการดมกลิ่นเลือดที่ยอดเยี่ยม",
        image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        name: "นกอินทรีหัวขาว (Bald Eagle)",
        type: "poultry",
        habitat: "ป่าและพื้นที่ใกล้แหล่งน้ำ (Forests & Lakes)",
        diet: "สัตว์กินเนื้อ/ปลา (Carnivore/Piscivore)",
        description: "นกอินทรีหัวขาวเป็นสัญลักษณ์ของความอิสระและความแข็งแกร่ง มีสายตาที่เฉียบคมและกรงเล็บที่ทรงพลัง",
        image: "https://images.unsplash.com/photo-1611080277334-0d922974b62f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        name: "ช้างแอฟริกา (African Elephant)",
        type: "land",
        habitat: "ป่าและทุ่งหญ้า (Forests & Savannahs)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ช้างแอฟริกาเป็นสัตว์บกที่มีขนาดใหญ่ที่สุดในโลก มีงวงที่ยาวและใบหูขนาดใหญ่เพื่อระบายความร้อน",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e64185f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5,
        name: "โลมา (Dolphin)",
        type: "water",
        habitat: "ทะเลและมหาสมุทร (Seas & Oceans)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "โลมาเป็นสัตว์เลี้ยงลูกด้วยนมที่ฉลาดและขี้เล่น ชอบอยู่รวมกันเป็นฝูงและสามารถสื่อสารกันได้ด้วยเสียง",
        image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 6,
        name: "นกยูง (Peacock)",
        type: "poultry",
        habitat: "ป่าโปร่ง (Open Forests)",
        diet: "สัตว์กินพืชและแมลง (Omnivore)",
        description: "นกยูงตัวผู้มีขนหางที่สวยงามและสามารถรำแพนเพื่อเกี้ยวพาราสีตัวเมีย เป็นสัญลักษณ์ของความงดงาม",
        image: "https://images.unsplash.com/photo-1502086307993-490352be572e?auto=format&fit=crop&q=80&w=1000"
    },
    // New Land Animals
    {
        id: 7,
        name: "ยีราฟ (Giraffe)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ยีราฟเป็นสัตว์บกที่สูงที่สุดในโลก มีคอที่ยาวมากเพื่อช่วยในการกินใบไม้จากยอดไม้สูง",
        image: "https://images.unsplash.com/photo-1547721064-3620263321f5?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 8,
        name: "เสือโคร่ง (Tiger)",
        type: "land",
        habitat: "ป่าทึบและทุ่งหญ้า (Forests & Grasslands)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "เสือโคร่งเป็นสัตว์ตระกูลแมวที่มีขนาดใหญ่ที่สุด มีลายพาดกลอนที่เป็นเอกลักษณ์เฉพาะตัวในแต่ละตัว",
        image: "https://images.unsplash.com/photo-1508249038222-3837813a3780?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 9,
        name: "จิงโจ้ (Kangaroo)",
        type: "land",
        habitat: "ทุ่งหญ้าในออสเตรเลีย (Australian Outback)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "จิงโจ้เป็นสัตว์ที่มีกระเป๋าหน้าท้องสำหรับเลี้ยงลูก และใช้การกระโดดเป็นวิธีการเคลื่อนที่หลัก",
        image: "https://images.unsplash.com/photo-1525010640431-7589d7010491?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 10,
        name: "แพนด้าแดง (Red Panda)",
        type: "land",
        habitat: "ป่าสนบนภูเขาสูง (High-altitude Forests)",
        diet: "สัตว์กินพืช/ไผ่ (Herbivore/Bamboo)",
        description: "แพนด้าแดงมีขนหนานุ่มสีน้ำตาลแดงและหางเป็นพวง ชอบอาศัยอยู่บนต้นไม้เป็นส่วนใหญ่",
        image: "https://images.unsplash.com/photo-1541014741259-df549fa9ba6f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 11,
        name: "ม้าลาย (Zebra)",
        type: "land",
        habitat: "ทุ่งหญ้าสะวันนา (Savannah)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "ม้าลายเป็นสัตว์ที่มีลายสีขาวดำพาดขวางทั้งตัว ซึ่งช่วยในการอำพรางตัวจากนักล่า",
        image: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=80&w=1000"
    },
    // New Water Animals
    {
        id: 12,
        name: "วาฬสีน้ำเงิน (Blue Whale)",
        type: "water",
        habitat: "มหาสมุทรทั่วโลก (Oceans)",
        diet: "สัตว์กินเนื้อ/แพลงก์ตอน (Carnivore/Krill)",
        description: "วาฬสีน้ำเงินเป็นสัตว์ที่มีขนาดใหญ่ที่สุดที่เคยอาศัยอยู่บนโลกใบนี้ หัวใจของมันมีขนาดเท่ากับรถยนต์หนึ่งคัน",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 13,
        name: "หมึกยักษ์ (Octopus)",
        type: "water",
        habitat: "แนวปะการังและพื้นหิน (Reefs & Rocks)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "หมึกยักษ์เป็นสัตว์ไม่มีกระดูกสันหลังที่ฉลาดมาก สามารถเปลี่ยนสีและสัมผัสผิวหนังเพื่ออำพรางตัวได้",
        image: "https://images.unsplash.com/photo-1545671913-b89a0417658c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 14,
        name: "เต่าทะเล (Sea Turtle)",
        type: "water",
        habitat: "ทะเลเขตร้อนและอบอุ่น (Tropical Seas)",
        diet: "สัตว์กินพืชและสัตว์ (Omnivore)",
        description: "เต่าทะเลใช้ชีวิตส่วนใหญ่อยู่ในน้ำ และจะขึ้นมาบนบกเพียงเพื่อวางไข่บนชายหาดเท่านั้น",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 15,
        name: "ม้าน้ำ (Seahorse)",
        type: "water",
        habitat: "พื้นทะเลที่มีสาหร่ายและหญ้าทะเล (Seagrass beds)",
        diet: "สัตว์กินเนื้อขนาดเล็ก (Carnivore)",
        description: "ม้าน้ำเป็นปลาที่มีหัวคล้ายม้า และเป็นหนึ่งในสัตว์ไม่กี่ชนิดที่ตัวผู้เป็นฝ่ายอุ้มท้องและคลอดลูก",
        image: "https://images.unsplash.com/photo-1534073133331-c4b62a557083?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 16,
        name: "แมงกะพรุน (Jellyfish)",
        type: "water",
        habitat: "มหาสมุทร (Oceans)",
        diet: "สัตว์กินเนื้อขนาดเล็ก (Carnivore)",
        description: "แมงกะพรุนเป็นสัตว์โปร่งแสงที่ไม่มีสมอง หัวใจ หรือกระดูก มีเข็มพิษอยู่ที่หนวดเพื่อป้องกันตัว",
        image: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=1000"
    },
    // New Poultry Animals
    {
        id: 17,
        name: "นกเค้าแมว (Owl)",
        type: "poultry",
        habitat: "ป่าไม้และพื้นที่เกษตร (Forests & Farmlands)",
        diet: "สัตว์กินเนื้อ (Carnivore)",
        description: "นกเค้าแมวเป็นนักล่าในเวลากลางคืนที่มีสายตาดีเยี่ยมและสามารถบินได้เงียบกริบเพื่อไม่ให้เหยื่อรู้ตัว",
        image: "https://images.unsplash.com/photo-1543549710-230ee51812f3?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 18,
        name: "นกแก้วมาคอว์ (Macaw)",
        type: "poultry",
        habitat: "ป่าฝนเขตร้อน (Tropical Rainforests)",
        diet: "สัตว์กินพืช/ผลไม้ (Herbivore/Fruit)",
        description: "นกแก้วมาคอว์ขึ้นชื่อเรื่องขนที่มีสีสันสดใสและความฉลาด สามารถเลียนเสียงพูดของมนุษย์ได้",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 19,
        name: "นกฟลามิงโก (Flamingo)",
        type: "poultry",
        habitat: "ทะเลสาบน้ำเค็มและชายฝั่ง (Saline Lakes & Coasts)",
        diet: "สัตว์กินเนื้อ/แพลงก์ตอน (Carnivore/Plankton)",
        description: "นกฟลามิงโกมีขนสีชมพูที่เกิดจากการกินกุ้งและสาหร่ายที่มีสารคาร์โรทีนอยด์",
        image: "https://images.unsplash.com/photo-1551065842-70b1ec189c44?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 20,
        name: "หงส์ขาว (Mute Swan)",
        type: "poultry",
        habitat: "แม่น้ำและทะเลสาบ (Rivers & Lakes)",
        diet: "สัตว์กินพืช (Herbivore)",
        description: "หงส์ขาวเป็นสัญลักษณ์ของความสง่างามและความซื่อสัตย์ มักอาศัยอยู่ในแหล่งน้ำจืดที่เงียบสงบ",
        image: "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 21,
        name: "นกทูแคน (Toucan)",
        type: "poultry",
        habitat: "ป่าฝนเขตร้อน (Tropical Rainforests)",
        diet: "สัตว์กินพืช/ผลไม้ (Herbivore/Fruit)",
        description: "นกทูแคนมีจะงอยปากขนาดใหญ่ที่มีสีสันสวยงาม ซึ่งช่วยในการเอื้อมเก็บผลไม้ที่อยู่ห่างไกล",
        image: "https://images.unsplash.com/photo-1494220556113-f8234399b362?auto=format&fit=crop&q=80&w=1000"
    }
];

// DOM Elements
const animalsGrid = document.getElementById('animalsGrid');
const recommendedGrid = document.getElementById('recommendedGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('animalModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderRecommended();
    renderAnimals(animals);
    setupEventListeners();
});

// Render Recommended Function
function renderRecommended() {
    if (!recommendedGrid) return;

    // Pick 4 random unique animals
    const shuffled = [...animals].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    recommendedGrid.innerHTML = '';

    selected.forEach((animal, index) => {
        const card = createAnimalCard(animal, index * 0.1);
        recommendedGrid.appendChild(card);
    });
}

// Helper to create card element
function createAnimalCard(animal, delay) {
    const card = document.createElement('article');
    card.className = 'animal-card';
    card.style.animation = `fadeInUp 0.6s ease forwards ${delay}s`;
    card.style.opacity = '0';

    const typeInfo = getTypeInfo(animal.type);

    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${animal.image}" alt="${animal.name}" class="card-image">
        </div>
        <div class="card-info">
            <span class="card-badge ${typeInfo.className}">${typeInfo.label}</span>
            <h3>${animal.name}</h3>
            <p><i class="fa-solid fa-location-dot"></i> ${animal.habitat}</p>
        </div>
    `;

    card.addEventListener('click', () => openModal(animal));
    return card;
}

// Render Function
function renderAnimals(data) {
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
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            if (filter === 'all') {
                renderAnimals(animals);
            } else {
                const filtered = animals.filter(a => a.type === filter);
                renderAnimals(filtered);
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Modal Logic
function openModal(animal) {
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
            
            <div class="detail-row" style="border: none;">
                <span class="label"><i class="fa-solid fa-info-circle"></i> ข้อมูลทั่วไป (Description)</span>
                <p class="value" style="margin-top: 5px; line-height: 1.6;">${animal.description}</p>
            </div>
        </div>
    `;

    modal.classList.add('show');
}

// Add animation keyframes via JS (optional, or keep in CSS)
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);
