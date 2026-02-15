document.addEventListener('DOMContentLoaded', () => {
    // Theme logic is handled by about-script.js
    renderComparison();
});

// Mocking getTypeInfo from script.js (since it's not exported)
function getTypeInfo(type) {
    switch (type) {
        case 'land': return { label: 'สัตว์บก', className: 'badge-land' };
        case 'water': return { label: 'สัตว์น้ำ', className: 'badge-water' };
        case 'poultry': return { label: 'สัตว์ปีก', className: 'badge-poultry' };
        default: return { label: 'ทั่วไป', className: '' };
    }
}

function renderComparison() {
    const content = document.getElementById('compareContent');
    const savedData = localStorage.getItem('compareList');

    if (!savedData || JSON.parse(savedData).length === 0) {
        content.innerHTML = `
            <div style="grid-column: span 2; text-align: center; padding: 100px;">
                <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; color: var(--accent);"></i>
                <h2 style="margin-top: 20px;">ไม่พบข้อมูลการเปรียบเทียบ</h2>
                <p>กรุณากลับไปเลือกสัตว์ที่หน้าหลักก่อนครับ</p>
                <a href="index.html" class="btn-primary" style="display: inline-block; margin-top: 20px; text-decoration: none;">กลับไปหน้าหลัก</a>
            </div>
        `;
        return;
    }

    const compareList = JSON.parse(savedData);

    content.innerHTML = compareList.map(animal => {
        const typeInfo = getTypeInfo(animal.type);
        return `
            <div class="compare-item">
                <img src="${animal.image}" alt="${animal.name}">
                <span class="card-badge ${typeInfo.className}" style="display: inline-block; margin-bottom: 20px;">${typeInfo.label}</span>
                <h2>${animal.name}</h2>
                <div class="compare-stats">
                    <div class="stat-box">
                        <span class="label"><i class="fa-solid fa-tree"></i> ถิ่นที่อยู่</span>
                        <span class="value">${animal.habitat}</span>
                    </div>
                    <div class="stat-box">
                        <span class="label"><i class="fa-solid fa-utensils"></i> อาหาร</span>
                        <span class="value">${animal.diet}</span>
                    </div>
                    <div class="stat-box" style="border: none;">
                        <span class="label"><i class="fa-solid fa-info-circle"></i> รายละเอียด</span>
                        <p class="value" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">${animal.description}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
