(function ($) {
  $(function () {
    var $window = $(window);
    var $header = $("#header");
    var $menuToggle = $("#menuToggle");
    var $mainNav = $("#mainNav");
    var productsData = {
      "solace-bed-frame": {
        name: "Solace Bed Frame",
        type: "Bedroom Furniture - Bed Frame",
        description: "Upholstered panel bed frame engineered for comfort, storage, and a clean modern profile.",
        materials: "Kiln-dried hardwood, premium fabric upholstery, powder-coated steel supports",
        dimensions: "Queen: 160 x 200 cm mattress fit, King: 180 x 200 cm mattress fit",
        colors: "Sand Beige, Warm Gray, Charcoal, Custom fabric swatches",
        custom: "Headboard height, storage base options, leg finish, fabric selection",
        images: ["images/queenbedframe.png", "images/bg.jpg", "images/accent.png"]
      },
      "linea-modular-sofa": {
        name: "Linea Modular Sofa",
        type: "Living Room Furniture - Modular Sofa",
        description: "Configurable deep-seat sofa with plush cushions and modular layout for larger living spaces.",
        materials: "Solid wood frame, high-density foam, premium performance fabric",
        dimensions: "Starts at 280 x 95 cm, expandable in modular sections",
        colors: "Ivory, Stone, Olive, Slate",
        custom: "Seat depth, arm style, modular layout, fabric and piping",
        images: ["images/modersofa.png", "images/accent.png", "images/bg.jpg"]
      },
      "atria-dining-set": {
        name: "Atria Dining Set",
        type: "Dining Furniture - 6-Seater Set",
        description: "Six-seater dining set with a contemporary base and hand-finished tabletop.",
        materials: "Natural veneer top, steel frame base, upholstered dining chairs",
        dimensions: "Table: 180 x 90 x 75 cm; Chair seat height: 45 cm",
        colors: "Natural Oak, Walnut, Smoked Ash",
        custom: "Table length, chair upholstery, edge profile, stain tone",
        images: ["images/6seater.png", "images/accent.png", "images/executive.png"]
      },
      "axis-executive-desk": {
        name: "Axis Executive Desk",
        type: "Office Furniture - Executive Desk",
        description: "Executive workspace solution with integrated storage and premium desktop finish.",
        materials: "Marine plywood core, veneer finish, soft-close hardware",
        dimensions: "Desk: 180 x 75 x 75 cm; Side return optional",
        colors: "Black Walnut, Espresso, Light Oak",
        custom: "Cable routing, side return, drawer configuration, finish",
        images: ["images/executive.png", "images/bg.jpg", "images/wardrobe.png"]
      },
      "terra-lounge-bench": {
        name: "Terra Lounge Bench",
        type: "Outdoor Furniture - Lounge Bench",
        description: "Outdoor-ready lounge bench designed for patios and balcony settings.",
        materials: "Treated hardwood, weatherproof foam, marine-grade fabric",
        dimensions: "170 x 75 x 78 cm",
        colors: "Teak, Driftwood Gray, Cocoa",
        custom: "Cushion thickness, frame finish, custom throw pillows",
        images: ["images/accent.png", "images/modersofa.png", "images/bg.jpg"]
      },
      "halo-walk-in-wardrobe": {
        name: "Halo Walk-In Wardrobe",
        type: "Bedroom Furniture - Wardrobe System",
        description: "Custom wardrobe system with modular partitions and premium hardware.",
        materials: "Laminated board panels, aluminum framing, tempered glass options",
        dimensions: "Built per room dimensions",
        colors: "White Oak, Taupe, Graphite",
        custom: "Interior partitioning, mirror panels, lighting, hardware finish",
        images: ["images/wardrobe.png", "images/queenbedframe.png", "images/bg.jpg"]
      },
      "aria-accent-lounge-chair": {
        name: "Aria Accent Lounge Chair",
        type: "Living Room Furniture - Accent Chair",
        description: "Statement lounge chair with curved silhouette and tailored premium upholstery.",
        materials: "Solid ash wood frame, high-resilience foam, woven performance fabric",
        dimensions: "W 78 cm x D 82 cm x H 84 cm",
        colors: "Cream, Mocha, Dusty Blue",
        custom: "Fabric selection, leg stain color, seat firmness",
        images: ["images/asahi1.jpg", "images/modersofa.png", "images/asahi4.jpg"]
      },
      "nobu-round-dining-table": {
        name: "Nobu Round Dining Table",
        type: "Dining Furniture - Round Table",
        description: "Round dining table designed for compact luxury condos and hospitality dining zones.",
        materials: "Sintered stone top, powder-coated steel pedestal, hardwood trim",
        dimensions: "Diameter 135 cm x Height 75 cm",
        colors: "Calacatta White, Graphite Black, Walnut Trim",
        custom: "Top finish, diameter options, pedestal color",
        images: ["images/asahi2.jpg", "images/6seater.png", "images/asahi5.jpg"]
      },
      "luna-floating-nightstand": {
        name: "Luna Floating Nightstand",
        type: "Bedroom Furniture - Nightstand",
        description: "Minimal floating bedside table with hidden drawer and soft-close mechanism.",
        materials: "Marine plywood core, veneer laminate, premium soft-close slides",
        dimensions: "W 55 cm x D 38 cm x H 24 cm",
        colors: "Light Oak, Walnut, Matte White",
        custom: "Handle profile, drawer layout, mounting height",
        images: ["images/asahi3.jpg", "images/queenbedframe.png", "images/asahi6.jpg"]
      },
      "vertex-meeting-table": {
        name: "Vertex Meeting Table",
        type: "Office Furniture - Meeting Table",
        description: "Boardroom table with integrated cable ports and refined executive finish.",
        materials: "Engineered wood core, natural veneer, steel support frame",
        dimensions: "L 280 cm x W 120 cm x H 75 cm",
        colors: "Smoked Oak, Espresso Brown, Graphite",
        custom: "Power module layout, finish combination, table length",
        images: ["images/asahi7.jpg", "images/executive.png", "images/bg.jpg"]
      },
      "cove-patio-sofa-set": {
        name: "Cove Patio Sofa Set",
        type: "Outdoor Furniture - Sofa Set",
        description: "Weather-resistant outdoor sofa set crafted for terraces and poolside lounges.",
        materials: "Powder-coated aluminum frame, quick-dry foam, UV-resistant fabric",
        dimensions: "3-Seater: W 210 cm x D 86 cm x H 78 cm",
        colors: "Sandstone, Charcoal, Sage",
        custom: "Seat depth, cushion fabric, side table add-ons",
        images: ["images/asahi8.jpg", "images/accent.png", "images/asahi2.jpg"]
      },
      "sora-tv-console-unit": {
        name: "Sora TV Console Unit",
        type: "Living Room Furniture - TV Console",
        description: "Low-profile media console with mixed material shelves and concealed storage.",
        materials: "Veneer wood carcass, tempered glass shelf, blackened steel legs",
        dimensions: "W 200 cm x D 45 cm x H 52 cm",
        colors: "Natural Walnut, Ash Gray, Matte Black",
        custom: "Open shelf ratio, drawer module count, cable outlet layout",
        images: ["images/asahi6.jpg", "images/modersofa.png", "images/asahi1.jpg"]
      }
    };

    function initSplashScreen() {
      var $splash = $("#splash");
      if (!$splash.length) return;

      $("body").addClass("splash-active");

      function playSplashExit() {
        setTimeout(function () {
          var $branding = $splash.find(".splash-branding");
          var $logo = $splash.find(".splash-logo");
          var $targetLogo = $(".site-header .brand-logo").first();

          if (
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            $splash.addClass("hide");
            $("body").removeClass("splash-active");
            setTimeout(function () {
              $splash.remove();
            }, 850);
            return;
          }

          if ($logo.length && $targetLogo.length) {
            var logoEl = $logo[0];
            var targetEl = $targetLogo[0];
            var flightDuration = 1150;
            var startRect = logoEl.getBoundingClientRect();
            var endRect = targetEl.getBoundingClientRect();
            var deltaX = (endRect.left + endRect.width / 2) - (startRect.left + startRect.width / 2);
            var deltaY = (endRect.top + endRect.height / 2) - (startRect.top + startRect.height / 2);
            var scale = endRect.width / startRect.width;

            $branding.addClass("is-transitioning");
            $logo
              .addClass("is-flying")
              .css({
                width: startRect.width + "px",
                left: startRect.left + "px",
                top: startRect.top + "px",
                transform: "translate3d(0, 0, 0) scale(1)"
              });

            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                $logo.css("transform", "translate3d(" + deltaX + "px, " + deltaY + "px, 0) scale(" + scale + ")");
              });
            });

            setTimeout(function () {
              $splash.addClass("is-revealing");
            }, Math.round(flightDuration * 0.45));

            setTimeout(function () {
              $header.addClass("logo-arrived");
              $splash.addClass("hide");
              $("body").removeClass("splash-active");
            }, flightDuration);

            setTimeout(function () {
              $header.removeClass("logo-arrived");
            }, flightDuration + 500);

            setTimeout(function () {
              $splash.remove();
            }, flightDuration + 700);
            return;
          }

          $splash.addClass("hide");
          $("body").removeClass("splash-active");
          setTimeout(function () {
            $splash.remove();
          }, 850);
        }, 1350);
      }

      if (document.readyState === "complete") {
        playSplashExit();
      } else {
        $window.on("load", playSplashExit);
      }
    }

    initSplashScreen();

    function smoothToHash(hash) {
      var $target = $(hash);
      if (!$target.length) return;
      var top = $target.offset().top - ($header.outerHeight() || 80) - 8;
      $("html, body").animate({ scrollTop: top }, 450);
    }

    $window.on("scroll", function () {
      if ($window.scrollTop() > 40) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }

      var scrollY = $window.scrollTop();
      $("[data-parallax]").css("background-position-y", scrollY * 0.35 + "px");
    });

    $menuToggle.on("click", function () {
      $mainNav.toggleClass("active");
    });

    $(document).on("click", "a[href^='#']", function (e) {
      var href = $(this).attr("href");
      if (!href || href === "#") return;
      if ($(href).length) {
        e.preventDefault();
        smoothToHash(href);
        $mainNav.removeClass("active");
      }
    });

    var $heroSlides = $(".hero-slide");
    var $heroDotsWrap = $("#heroDots");
    var heroIndex = 0;
    var heroTimer = null;

    function renderHeroDots() {
      if (!$heroDotsWrap.length || !$heroSlides.length) return;
      $heroSlides.each(function (i) {
        var $dot = $("<button>", {
          class: "hero-dot" + (i === 0 ? " active" : ""),
          "aria-label": "Go to slide " + (i + 1)
        });
        $dot.on("click", function () {
          goHero(i);
          restartHeroAuto();
        });
        $heroDotsWrap.append($dot);
      });
    }

    function goHero(next) {
      if (!$heroSlides.length) return;
      $heroSlides.eq(heroIndex).removeClass("active");
      $heroDotsWrap.children().eq(heroIndex).removeClass("active");
      heroIndex = (next + $heroSlides.length) % $heroSlides.length;
      $heroSlides.eq(heroIndex).addClass("active");
      $heroDotsWrap.children().eq(heroIndex).addClass("active");
    }

    function startHeroAuto() {
      if (!$heroSlides.length) return;
      heroTimer = setInterval(function () {
        goHero(heroIndex + 1);
      }, 5200);
    }

    function restartHeroAuto() {
      clearInterval(heroTimer);
      startHeroAuto();
    }

    $("#heroPrev").on("click", function () {
      goHero(heroIndex - 1);
      restartHeroAuto();
    });

    $("#heroNext").on("click", function () {
      goHero(heroIndex + 1);
      restartHeroAuto();
    });

    $("#heroSlider").on("mouseenter", function () {
      clearInterval(heroTimer);
    }).on("mouseleave", function () {
      startHeroAuto();
    });

    renderHeroDots();
    startHeroAuto();

    var $testimonialCards = $(".testimonial-card");
    var $testimonialDots = $("#testimonialDots");
    var testimonialIndex = 0;
    var testimonialTimer = null;

    function setupTestimonials() {
      if (!$testimonialCards.length || !$testimonialDots.length) return;
      $testimonialCards.each(function (i) {
        var $dot = $("<button>", {
          class: "testimonial-dot" + (i === 0 ? " active" : ""),
          "aria-label": "Testimonial " + (i + 1)
        });
        $dot.on("click", function () {
          goTestimonial(i);
          restartTestimonialAuto();
        });
        $testimonialDots.append($dot);
      });

      testimonialTimer = setInterval(function () {
        goTestimonial(testimonialIndex + 1);
      }, 5600);

      $("#testimonialsSlider").on("mouseenter", function () {
        clearInterval(testimonialTimer);
      }).on("mouseleave", function () {
        restartTestimonialAuto();
      });
    }

    function goTestimonial(next) {
      if (!$testimonialCards.length) return;
      $testimonialCards.eq(testimonialIndex).removeClass("active");
      $testimonialDots.children().eq(testimonialIndex).removeClass("active");
      testimonialIndex = (next + $testimonialCards.length) % $testimonialCards.length;
      $testimonialCards.eq(testimonialIndex).addClass("active");
      $testimonialDots.children().eq(testimonialIndex).addClass("active");
    }

    function restartTestimonialAuto() {
      clearInterval(testimonialTimer);
      testimonialTimer = setInterval(function () {
        goTestimonial(testimonialIndex + 1);
      }, 5600);
    }

    setupTestimonials();

    var $revealEls = $(".reveal-scroll, .reveal");
    function revealOnScroll() {
      var trigger = $window.height() * 0.88;
      $revealEls.each(function () {
        var top = this.getBoundingClientRect().top;
        if (top < trigger) {
          $(this).addClass("visible");
        }
      });
    }

    $window.on("scroll resize", revealOnScroll);
    revealOnScroll();

    $("#productFilters").on("click", ".filter-btn", function () {
      var filter = $(this).data("filter");
      var $cards = $("#productsGrid .product-card");
      $(this).addClass("active").siblings().removeClass("active");

      $cards.each(function () {
        var $card = $(this);
        var category = $(this).data("category");
        var shouldShow = filter === "all" || category === filter;
        if (shouldShow) {
          $card.removeClass("hidden").hide().fadeIn(180);
        } else {
          $card.addClass("hidden");
        }
      });
    });

    function applyProductSearch(query) {
      var q = $.trim(query).toLowerCase();
      $("#productsGrid .product-card").each(function () {
        var nameText = ($(this).data("name") || "").toLowerCase();
        var categoryText = ($(this).data("category") || "").toLowerCase();
        var matched = !q || nameText.indexOf(q) > -1 || categoryText.indexOf(q) > -1;
        $(this).toggle(matched);
      });
    }

    function scrollToElement($el) {
      if (!$el || !$el.length) return;
      var top = $el.offset().top - ($header.outerHeight() || 80) - 8;
      $("html, body").animate({ scrollTop: top }, 450);
    }

    var $searchInput = $("#siteSearch");
    var $searchSuggestions = $("#searchSuggestions");
    var searchEntries = [];

    function addSearchEntry(label, kind, target) {
      var clean = $.trim(label || "");
      if (!clean) return;
      var key = clean.toLowerCase();
      if (searchEntries.some(function (e) { return e.key === key; })) return;
      searchEntries.push({ label: clean, key: key, kind: kind, target: target });
    }

    if ($searchInput.length && $searchSuggestions.length) {
      // Mga umiiral na teksto ng nabigasyon na may section anchors
      $(".site-nav a[href^='#']").each(function () {
        addSearchEntry($(this).text(), "hash", $(this).attr("href"));
      });

      // Mga umiiral na pamagat ng seksyon sa pahina
      $("section[id] .section-head h2").each(function () {
        var secId = $(this).closest("section").attr("id");
        if (secId) addSearchEntry($(this).text(), "hash", "#" + secId);
      });

      // Mga umiiral na pangalan ng produkto na naka-map sa kanilang card
      $("#productsGrid .product-card").each(function () {
        var $card = $(this);
        var label = $card.data("name");
        var slug = $card.find(".btn-view-details").data("slug");
        var cardId = slug ? "product-" + slug : "";
        if (cardId && !$card.attr("id")) $card.attr("id", cardId);
        addSearchEntry(label, "element", "#" + cardId);
      });

      searchEntries
        .sort(function (a, b) { return a.label.localeCompare(b.label); })
        .forEach(function (entry) {
          var option = document.createElement("option");
          option.value = entry.label;
          $searchSuggestions.append(option);
        });
    }

    function goToSearchResult(rawValue) {
      var q = $.trim(rawValue).toLowerCase();
      if (!q) return;
      var hit = searchEntries.find(function (e) { return e.key === q; }) ||
        searchEntries.find(function (e) { return e.key.indexOf(q) > -1 || q.indexOf(e.key) > -1; });
      if (!hit) return;

      if (hit.kind === "hash" && hit.target) {
        smoothToHash(hit.target);
        return;
      }

      if (hit.kind === "element" && hit.target) {
        var $target = $(hit.target);
        if ($target.length) {
          $("#productFilters .filter-btn[data-filter='all']").trigger("click");
          scrollToElement($target);
        }
      }
    }

    $searchInput.on("input change", function () {
      applyProductSearch($(this).val());
    });

    $searchInput.on("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      goToSearchResult($(this).val());
    });

    $(".btn-inquire").on("click", function () {
      var name = $(this).data("product");
      if (name) {
        $("#interest").val("Collections");
        $("#message").val("Hi, I am interested in " + name + ". Please share details and consultation schedule.");
      }
    });

    var $afterLayer = $("#afterLayer");
    $("#beforeAfterRange").on("input", function () {
      var value = $(this).val() + "%";
      $afterLayer.css("width", value);
    });

    var $modal = $("#imageModal");
    var $modalImg = $("#modalImage");
    var $detailModal = $("#productDetailModal");
    var $clickLoader = $("#clickLoader");

    $(document).on("click", "[data-modal-img]", function (e) {
      var $target = $(e.target);
      if ($target.closest("a").length) return;
      var src = $(this).data("modal-img");
      if (!src) return;
      $modalImg.attr("src", src);
      $modal.addClass("open").attr("aria-hidden", "false");
    });

    $("#modalClose, #imageModal").on("click", function (e) {
      if (e.target !== this && e.target.id !== "modalClose") return;
      $modal.removeClass("open").attr("aria-hidden", "true");
      $modalImg.attr("src", "");
    });

    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        $modal.removeClass("open").attr("aria-hidden", "true");
        $modalImg.attr("src", "");
        $detailModal.removeClass("open").attr("aria-hidden", "true");
      }
    });

    function closeDetailModal() {
      $detailModal.removeClass("open").attr("aria-hidden", "true");
    }

    function openDetailModalWithLoading(product) {
      if (!product) return;

      $("#detailName").text(product.name);
      $("#detailType").text(product.type || "-");
      $("#detailSize").text(product.dimensions || "-");
      $("#detailMaterials").text(product.materials || "-");
      $("#detailColors").text(product.colors || "-");
      $("#detailCustom").text(product.custom || "-");
      $("#detailInquireBtn").attr("data-product", product.name);
      $("#detailImage")
        .attr("src", (product.images && product.images[0]) ? product.images[0] : "images/bg.jpg")
        .attr("alt", product.name + " preview");

      if ($clickLoader.length) {
        $clickLoader.addClass("is-visible");
      }

      setTimeout(function () {
        if ($clickLoader.length) {
          $clickLoader.removeClass("is-visible");
        }
        $detailModal.addClass("open").attr("aria-hidden", "false");
      }, 360);
    }

    $(".btn-view-details").on("click", function (e) {
      e.preventDefault();
      var slug = $(this).data("slug");
      var product = productsData[slug];
      if (!product) return;
      openDetailModalWithLoading(product);
    });

    $(document).on("click", "#detailClose", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeDetailModal();
    });

    $(document).on("click", "#productDetailModal", function (e) {
      if (e.target === this) closeDetailModal();
    });

    $("#detailInquireBtn").on("click", function () {
      var name = $(this).attr("data-product");
      if (name) {
        $("#interest").val("Collections");
        $("#message").val("Hi, I am interested in " + name + ". Please share details and consultation schedule.");
      }
      closeDetailModal();
    });

    if ($("#thumbRow").length) {
      var params = new URLSearchParams(window.location.search);
      var slug = params.get("product") || "solace-bed-frame";
      var product = productsData[slug] || productsData["solace-bed-frame"];

      $("#productName").text(product.name);
      $("#productDescription").text(product.description);
      $("#productMaterials").text(product.materials);
      $("#productDimensions").text(product.dimensions);
      $("#productColors").text(product.colors);
      $("#productCustom").text(product.custom);
      document.title = product.name + " | Asahi Design Centre";

      var $thumbRow = $("#thumbRow");
      $thumbRow.empty();
      $.each(product.images, function (i, image) {
        var $thumb = $("<button>", {
          type: "button",
          class: "thumb-btn" + (i === 0 ? " active" : ""),
          "data-image": image
        });
        $thumb.append($("<img>", { src: image, alt: product.name + " view " + (i + 1) }));
        $thumbRow.append($thumb);
      });
      $("#mainProductImage").attr("src", product.images[0]).attr("alt", product.name);
    }

    $(document).on("click", ".thumb-btn", function () {
      var image = $(this).data("image");
      if (!image) return;
      $("#mainProductImage").attr("src", image);
      $(".thumb-btn").removeClass("active");
      $(this).addClass("active");
    });

    var countersAnimated = false;
    function animateCounters() {
      if (countersAnimated) return;
      var $counterSection = $(".counters");
      if (!$counterSection.length) return;
      var top = $counterSection[0].getBoundingClientRect().top;
      if (top > $window.height() * 0.85) return;

      countersAnimated = true;
      $("[data-counter]").each(function () {
        var $el = $(this);
        var target = Number($el.data("counter")) || 0;
        $({ n: 0 }).animate(
          { n: target },
          {
            duration: 1200,
            easing: "swing",
            step: function () {
              $el.text(Math.floor(this.n));
            },
            complete: function () {
              $el.text(target);
            }
          }
        );
      });
    }

    $window.on("scroll", animateCounters);
    animateCounters();

    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $submit = $form.find("button[type='submit']");
      var original = $submit.text();
      $submit.prop("disabled", true).text("Sending...");
      setTimeout(function () {
        alert("Thank you. Your inquiry has been captured. We will contact you soon.");
        $form[0].reset();
        $submit.prop("disabled", false).text(original);
      }, 600);
    });
  });
})(jQuery);


