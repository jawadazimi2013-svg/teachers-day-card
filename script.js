const openMessage = document.getElementById("openMessage");
const closeMessage = document.getElementById("closeMessage");
const messageBox = document.getElementById("messageBox");

const musicButton = document.getElementById("musicButton");
const musicButtonText = document.getElementById("musicButtonText");
const teacherMusic = document.getElementById("teacherMusic");

const mainTitle = document.getElementById("mainTitle");
const teacherName = document.getElementById("teacherName");
const subtitle = document.getElementById("subtitle");

const openText = document.getElementById("openText");
const messageText = document.getElementById("messageText");
const musicTitle = document.getElementById("musicTitle");

const footerText = document.getElementById("footerText");
const bottomText = document.getElementById("bottomText");

const languageButtons = document.querySelectorAll(".language-btn");

/* =========================
   Open Message
========================= */

openMessage.addEventListener("click", function () {
  messageBox.classList.add("show");

  openMessage.style.display = "none";

  createHearts();
});

/* =========================
   Close Message
========================= */

closeMessage.addEventListener("click", function () {
  messageBox.classList.remove("show");

  openMessage.style.display = "inline-block";
});

/* =========================
   Music
========================= */

musicButton.addEventListener("click", function () {
  if (teacherMusic.paused) {
    teacherMusic.play();

    musicButton.innerHTML =
      '<i class="bi bi-pause-fill"></i> ' +
      '<span id="musicButtonText">توقف آهنگ</span>';
  } else {
    teacherMusic.pause();

    musicButton.innerHTML =
      '<i class="bi bi-play-fill"></i> ' +
      '<span id="musicButtonText">پخش آهنگ</span>';
  }
});

/* When music finishes */

teacherMusic.addEventListener("ended", function () {
  musicButton.innerHTML =
    '<i class="bi bi-play-fill"></i> ' +
    '<span id="musicButtonText">پخش آهنگ</span>';
});

/* =========================
   Language Data
========================= */

const translations = {
  fa: {
    direction: "rtl",

    mainTitle: "روز معلم مبارک",

    teacherName: "استاد فاطمه رحیمی",

    subtitle: "به پاس زحمات، محبت و دانش شما",

    openText: "برای دیدن پیام اینجا را فشار دهید",

    message: `
            استاد گرامی، فاطمه رحیمی!

            <br><br>

            روز معلم را از صمیم قلب به شما تبریک می‌گویم.
            دانش، صبر، مهربانی و تلاش‌های ارزشمند شما
            چراغ راه شاگردان و الهام‌بخش نسل آینده است.

            <br><br>

            از شما سپاسگزاریم که تنها درس نمی‌دهید،
            بلکه امید، انگیزه و باور به موفقیت را نیز
            به شاگردان خود هدیه می‌کنید.

            <br><br>

            برای شما سلامتی، موفقیت، شادی و سربلندی
            آرزو دارم.

            <br><br>

            <strong>
                روز معلم مبارک، استاد عزیز! ❤️
            </strong>
        `,

    close: "بستن پیام",

    musicTitle: "آهنگ تبریک روز معلم",

    play: "پخش آهنگ",

    footer: "با احترام و محبت تقدیم به استاد فاطمه رحیمی",

    bottom: "علم با یک معلم خوب، به یک چراغ روشن تبدیل می‌شود.",
  },

  ps: {
    direction: "rtl",

    mainTitle: "د ښوونکي ورځ مو مبارک شه",

    teacherName: "استاد فاطمه رحیمي",

    subtitle: "ستاسو د هڅو، مینې او پوهې په درناوي",

    openText: "د پیغام د لیدلو لپاره دلته کلیک وکړئ",

    message: `
            قدرمنې استادې فاطمه رحیمي!

            <br><br>

            د ښوونکي ورځ مو له زړه څخه مبارک شه.
            ستاسو پوهه، صبر، مهرباني او ارزښتناکې هڅې
            د زده کوونکو لپاره د لارښود رڼا ده.

            <br><br>

            له تاسو څخه مننه چې یوازې درس نه ورکوئ،
            بلکې خپلو زده کوونکو ته هیله، هڅونه
            او د بریا باور هم ورکوئ.

            <br><br>

            تاسو ته روغتیا، بریا، خوښۍ او
            تلپاتې سرلوړي غواړم.

            <br><br>

            <strong>
                د ښوونکي ورځ مو مبارک شه، ګرانه استادې! ❤️
            </strong>
        `,

    close: "پیغام بند کړئ",

    musicTitle: "د ښوونکي ورځې د مبارکۍ سندره",

    play: "سندرې غږول",

    footer: "په درناوي او مینه استادې فاطمه رحیمي ته",

    bottom: "ښه ښوونکی د علم لاره په رڼا بدلوي.",
  },

  en: {
    direction: "ltr",

    mainTitle: "Happy Teachers' Day",

    teacherName: "Teacher Fatima Rahimi",

    subtitle: "With gratitude for your kindness, knowledge and dedication",

    openText: "Click here to read the message",

    message: `
            Dear Teacher Fatima Rahimi!

            <br><br>

            Wishing you a very Happy Teachers' Day
            from the bottom of my heart.

            Your knowledge, patience, kindness and
            dedication are a beautiful light for your students
            and an inspiration for the future generation.

            <br><br>

            Thank you for giving your students not only
            knowledge, but also hope, motivation and
            confidence to succeed.

            <br><br>

            I wish you health, happiness, success
            and endless achievements.

            <br><br>

            <strong>
                Happy Teachers' Day, dear teacher! ❤️
            </strong>
        `,

    close: "Close Message",

    musicTitle: "Teachers' Day Celebration Music",

    play: "Play Music",

    footer: "With respect and love, dedicated to Teacher Fatima Rahimi",

    bottom: "A great teacher turns knowledge into a light.",
  },
};

/* =========================
   Change Language
========================= */

languageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const language = button.getAttribute("data-lang");

    const data = translations[language];

    document.documentElement.lang = language;

    document.documentElement.dir = data.direction;

    mainTitle.innerHTML = data.mainTitle;

    teacherName.innerHTML = data.teacherName;

    subtitle.innerHTML = data.subtitle;

    openText.innerHTML = data.openText;

    messageText.innerHTML = data.message;

    closeMessage.innerHTML = `<i class="bi bi-x-circle"></i> ${data.close}`;

    musicTitle.innerHTML = `<i class="bi bi-music-note-beamed"></i> ${data.musicTitle}`;

    musicButtonText.innerHTML = data.play;

    footerText.innerHTML = data.footer;

    bottomText.innerHTML = data.bottom;

    /* Active Button */

    languageButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

/* =========================
   Hearts Effect
========================= */

function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "70vh";

    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition = "all 2s ease";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.style.top = Math.random() * 40 + "vh";

      heart.style.opacity = "0";

      heart.style.transform = "rotate(30deg)";
    }, 100);

    setTimeout(function () {
      heart.remove();
    }, 2200);
  }
}
