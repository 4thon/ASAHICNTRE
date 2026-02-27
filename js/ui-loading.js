(function () {
  function createLoader() {
    if (document.getElementById("pageLoader")) return document.getElementById("pageLoader");
    var loader = document.createElement("div");
    loader.id = "pageLoader";
    loader.className = "page-loader";
    loader.innerHTML = '<div class="page-loader-spinner" aria-hidden="true"></div>';
    document.body.appendChild(loader);
    return loader;
  }

  function createClickLoader() {
    if (document.getElementById("clickLoader")) return document.getElementById("clickLoader");
    var loader = document.createElement("div");
    loader.id = "clickLoader";
    loader.className = "click-loader-overlay";
    loader.innerHTML = '<div class="click-loader-spinner" aria-hidden="true"></div>';
    document.body.appendChild(loader);
    return loader;
  }

  function hideLoader(loader) {
    loader.classList.add("is-hidden");
  }

  function shouldSkipClickLoading(el) {
    if (!el) return true;
    if (el.hasAttribute("data-no-loading")) return true;
    if (el.classList.contains("theme-toggle")) return true;
    if (el.classList.contains("lang-toggle")) return true;
    if (el.classList.contains("menu-toggle")) return true;
    if (el.classList.contains("modal-close")) return true;
    if (el.classList.contains("detail-close")) return true;
    if (el.classList.contains("hero-arrow")) return true;
    var href = el.getAttribute("href") || "";
    if (href === "#" || href.indexOf("javascript:") === 0) return true;
    return false;
  }

  function attachClickLoading(clickLoader) {
    document.addEventListener("click", function (e) {
      var target = e.target.closest("a,button");
      if (!target || shouldSkipClickLoading(target)) return;

      target.classList.add("click-loading");
      clickLoader.classList.add("is-visible");
      setTimeout(function () {
        target.classList.remove("click-loading");
        clickLoader.classList.remove("is-visible");
      }, 900);
    });
  }

  function init() {
    var loader = createLoader();
    var clickLoader = createClickLoader();
    attachClickLoading(clickLoader);

    window.addEventListener("load", function () {
      setTimeout(function () {
        hideLoader(loader);
      }, 450);
    });

    window.addEventListener("beforeunload", function () {
      loader.classList.remove("is-hidden");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
