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
    }
];

// DOM Elements
const animalsGrid = document.getElementById('animalsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('animalModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderAnimals(animals);
    setupEventListeners();
});

// Render Function
function renderAnimals(data) {
    animalsGrid.innerHTML = '';

    // Animation stagger delay
    let delay = 0;

    data.forEach(animal => {
        const card = document.createElement('article');
        card.className = 'animal-card';
        card.style.animation = `fadeInUp 0.6s ease forwards ${delay}s`;
        card.style.opacity = '0'; // Initial state for animation

        // Map type to display name and class
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
        animalsGrid.appendChild(card);

        delay += 0.1;
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
