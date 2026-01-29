const translations = {
    en: {
        aboutTab: "About Me",
        socialTab: "Social Media",
        aboutTitle: "About",
        socialTitle: "Social Media",
        greeting: "<span>Hello, World!</span> My name is <span>Wendel Alves</span>, Welcome!",
        description: "I am a <span>software developer.</span> Welcome to my profile! 🚀 <span>Feel free to explore and test my projects</span>. If you have any questions or want to get in touch, I'm available! 📧👨‍💻"
    },
    pt: {
        aboutTab: "Sobre Mim",
        socialTab: "Redes Sociais",
        aboutTitle: "Sobre",
        socialTitle: "Redes Sociais",
        greeting: "<span>Olá, Mundo!</span> Meu nome é <span>Wendel Alves</span>, Seja bem-vindo(a)!",
        description: "Eu sou <span>desenvolvedor de software.</span> Bem-vindo ao link do meu perfil! 🚀 <span>Fique à vontade para explorar e testar meus projetos</span>. Se tiver alguma dúvida ou quiser entrar em contato, estou à disposição! 📧👨‍💻"
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("selected")) {
            return;
        }
        selectTab(tab);
        showTab(tab);
    });
});

function selectTab(tab) {
    const selectedTab = document.querySelector(".tab.selected");

    if (selectedTab) {
        selectedTab.classList.remove("selected");
    }

    tab.classList.add("selected");
}

function showTab(tab) {
    const selectedInformation = document.querySelector(".information.selected");

    if (selectedInformation) {
        selectedInformation.classList.remove("selected");
    }

    const informationId = `information-${tab.id}`;
    const information = document.getElementById(informationId);

    information.classList.add("selected");
}
