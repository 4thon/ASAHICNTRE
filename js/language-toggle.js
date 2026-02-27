(function () {
  var STORAGE_KEY = "asahi-language";
  var COOKIE_NAME = "googtrans";
  var DEFAULT_LANG = "en";

  var languageOptions = [
    ["en", "English"], ["ar", "العربية"], ["ru", "Русский"], ["fr", "Français"],
    ["es", "Español"], ["pt", "Português"], ["de", "Deutsch"], ["it", "Italiano"],
    ["ja", "日本語"], ["ko", "한국어"], ["nl", "Nederlands"], ["vi", "Tiếng Việt"],
    ["th", "ไทย"], ["pl", "Polski"], ["tr", "Türkçe"], ["ms", "Bahasa Melayu"],
    ["tl", "Filipino"], ["id", "Bahasa Indonesia"], ["hu", "Magyar"], ["ro", "Română"]
  ];

  var supported = languageOptions.map(function (item) { return item[0]; });

  function normalizeLang(lang) {
    return supported.indexOf(lang) > -1 ? lang : DEFAULT_LANG;
  }

  function getSavedLang() {
    return normalizeLang(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
  }

  function setCookie(name, value) {
    var host = window.location.hostname;
    document.cookie = name + "=" + value + "; path=/";
    if (host) {
      document.cookie = name + "=" + value + "; path=/; domain=" + host;
    }
  }

  function applyDirection(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function markActive(lang) {
    document.querySelectorAll(".language-option").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-code") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function findTranslateCombo() {
    return document.querySelector(".goog-te-combo");
  }

  function applyGoogleTranslate(lang) {
    var target = normalizeLang(lang);
    applyDirection(target);
    setCookie(COOKIE_NAME, "/auto/" + target);

    var attempts = 0;
    var timer = setInterval(function () {
      attempts += 1;
      var combo = findTranslateCombo();
      if (combo) {
        combo.value = target;
        combo.dispatchEvent(new Event("change"));
        clearInterval(timer);
      }
      if (attempts > 50) {
        clearInterval(timer);
      }
    }, 120);
  }

  function applyLanguage(lang) {
    var target = normalizeLang(lang);
    localStorage.setItem(STORAGE_KEY, target);
    markActive(target);
    applyGoogleTranslate(target);
  }

  function createLanguageSheet() {
    if (document.getElementById("languageSheet")) return;

    var sheet = document.createElement("div");
    sheet.id = "languageSheet";
    sheet.className = "language-sheet notranslate";
    sheet.setAttribute("translate", "no");
    sheet.innerHTML =
      '<div class="language-sheet-header">' +
      '<h3>Please Choose Your Language</h3>' +
      '<button class="language-sheet-close" type="button" id="languageSheetClose" aria-label="Close language panel">&times;</button>' +
      "</div>" +
      '<div class="language-grid" id="languageGrid"></div>';

    document.body.appendChild(sheet);

    var grid = document.getElementById("languageGrid");
    languageOptions.forEach(function (option) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "language-option notranslate";
      btn.setAttribute("translate", "no");
      btn.setAttribute("data-lang-code", option[0]);
      btn.textContent = option[1];
      btn.addEventListener("click", function () {
        applyLanguage(option[0]);
        sheet.classList.remove("open");
      });
      grid.appendChild(btn);
    });

    document.getElementById("languageSheetClose").addEventListener("click", function () {
      sheet.classList.remove("open");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") sheet.classList.remove("open");
    });
  }

  function bindToggleButtons() {
    var sheet = document.getElementById("languageSheet");
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.classList.add("notranslate");
      btn.setAttribute("translate", "no");
      btn.addEventListener("click", function () {
        sheet.classList.toggle("open");
      });
    });
  }

  function ensureTranslateContainer() {
    if (document.getElementById("google_translate_element")) return;
    var el = document.createElement("div");
    el.id = "google_translate_element";
    el.style.position = "fixed";
    el.style.left = "-9999px";
    el.style.top = "0";
    document.body.appendChild(el);
  }

  function loadGoogleScript() {
    if (window.google && window.google.translate) return;
    if (document.getElementById("google-translate-script")) return;
    var s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.head.appendChild(s);
  }

  function suppressGoogleBanner() {
    function cleanup() {
      document.documentElement.style.marginTop = "0px";
      document.body.style.top = "0px";
      document.body.style.marginTop = "0px";

      var frames = document.querySelectorAll("iframe.goog-te-banner-frame, iframe.skiptranslate");
      frames.forEach(function (frame) {
        frame.style.display = "none";
        frame.style.visibility = "hidden";
        frame.style.height = "0";
      });

      var tops = document.querySelectorAll("body > .skiptranslate, #goog-gt-tt");
      tops.forEach(function (el) {
        el.style.display = "none";
        el.style.visibility = "hidden";
      });
    }

    cleanup();
    var obs = new MutationObserver(cleanup);
    obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  }

  window.googleTranslateElementInit = function () {
    if (!(window.google && window.google.translate && window.google.translate.TranslateElement)) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: supported.join(","),
        autoDisplay: false
      },
      "google_translate_element"
    );

    // Muling ilapat ang naka-save na wika pagkatapos ma-initialize ang widget.
    applyLanguage(getSavedLang());
  };

  function init() {
    createLanguageSheet();
    bindToggleButtons();
    ensureTranslateContainer();
    loadGoogleScript();
    suppressGoogleBanner();
    markActive(getSavedLang());
    applyDirection(getSavedLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

