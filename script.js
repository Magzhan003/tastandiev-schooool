// --- NEWS MANAGEMENT ---

const defaultNews = [

    { title: "Мектептің ашылу салтанаты", desc: "Жаңа оқу жылының салтанатты ашылуы өтті.", img: "https://via.placeholder.com/400x200" },

    { title: "Робототехника жарысы", desc: "Біздің оқушылар қалалық жарыста бірінші орын алды.", img: "https://via.placeholder.com/400x200" }

];

function loadNews() {

    const newsGrid = document.getElementById('news-grid');

    if (!newsGrid) return;

    const savedNews = JSON.parse(localStorage.getItem('school_news')) || defaultNews;

|---|

        <div class="news-card">

            <img src="${item.img}" alt="${item.title}">

            <div class="news-card-content">

                <h3>${item.title}</h3>

                <p>${item.desc}</p>

            </div>

        </div>

    `).join('');

}

function saveNews() {

    const title = document.getElementById('news-title').value;

    const desc = document.getElementById('news-desc').value;

    const img = document.getElementById('news-img').value || "https://via.placeholder.com/400x200";

    const savedNews = JSON.parse(localStorage.getItem('school_news')) || defaultNews;

    savedNews.unshift({ title, desc, img });

    localStorage.setItem('school_news', JSON.stringify(savedNews));

    alert('Жаңалық сәтті сақталды!');

}

// --- DOCUMENT MANAGEMENT ---

const defaultDocs = [

    { name: "Мектеп Жарғысы", url: "charter.pdf" },

    { name: "Лицензия", url: "license.pdf" }

];

function loadDocuments() {

    const docGrid = document.getElementById('document-list');

    if (!docGrid) return;

    const savedDocs = JSON.parse(localStorage.getItem('school_docs')) || defaultDocs;

    docGrid.innerHTML = savedDocs.map(doc => `

        <div class="news-card">

            <div class="news-card-content">

                <h3>${doc.name}</h3>

                <button onclick="openViewer('${doc.url}')" class="btn secondary">Қарау</button>

            </div>

        </div>

    `).join('');

}

function saveDoc() {

    const name = document.getElementById('doc-name').value;

    const url = document.getElementById('doc-url').value;

    const savedDocs = JSON.parse(localStorage.getItem('school_docs')) || defaultDocs;

    savedDocs.push({ name, url });

    localStorage.setItem('school_docs', JSON.stringify(savedDocs));

    alert('Құжат сәтті қосылды!');

}

// --- VIEWER LOGIC ---

function openViewer(url) {

    const overlay = document.getElementById('doc-viewer-overlay');

    const iframe = document.getElementById('pdf-frame');

    // Using Google Docs viewer to embed PDFs easily and prevent direct download via basic UI

    iframe.src = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

    overlay.style.display = 'flex';

}

function closeViewer() {

    document.getElementById('doc-viewer-overlay').style.display = 'none';

}

// --- ADMIN TABS ---

function showTab(tabId) {

    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

    document.getElementById(tabId).style.display = 'block';

}

// --- INITIALIZATION ---

window.onload = () => {

    loadNews();

    loadDocuments();

    

    // Accordion Logic for info.html

    const acc = document.getElementsByClassName("accordion-header");

    for (let i = 0; i < acc.length; i++) {

        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");

            const body = this.nextElementSibling;

            body.style.display = body.style.display === "block" ? "none" : "block";

        });

    }

};

