document.addEventListener("DOMContentLoaded", () => {

  /*
   * =========================
   * BASIC
   * =========================
   */

  const yearElements = document.querySelectorAll("[data-year]");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  /*
   * =========================
   * MOBILE MENU
   * =========================
   */

  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        nav.classList.toggle("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.textContent =
        isOpen ? "×" : "☰";

    });


    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("is-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.textContent = "☰";

      });

    });

  }


  /*
   * =========================
   * CAST DATA
   * =========================
   */

  const casts = [

    {
      id: "01",
      name: "キャスト01",
      role: "CAST / A",
      copy: "話しやすさと落ち着いた空気感が魅力。",
      tags: ["王道", "おしゃべり"],
      category: ["popular", "today"],
      attendance: "本日出勤",
      time: "18:00〜23:00"
    },

    {
      id: "02",
      name: "キャスト02",
      role: "CAST / B",
      copy: "フレッシュな雰囲気と距離感の近い接客。",
      tags: ["新人", "フレッシュ"],
      category: ["new", "today"],
      attendance: "本日出勤",
      time: "19:00〜01:00"
    },

    {
      id: "03",
      name: "キャスト03",
      role: "CAST / C",
      copy: "クールな雰囲気と会話力を両立。",
      tags: ["クール", "人気"],
      category: ["popular"],
      attendance: "次回出勤",
      time: "20:00〜02:00"
    },

    {
      id: "04",
      name: "キャスト04",
      role: "CAST / D",
      copy: "柔らかい雰囲気で話しかけやすいキャスト。",
      tags: ["やさしい", "甘め"],
      category: ["today"],
      attendance: "本日出勤",
      time: "18:00〜00:00"
    },

    {
      id: "05",
      name: "キャスト05",
      role: "CAST / E",
      copy: "明るいテンションと楽しい会話が魅力。",
      tags: ["明るい", "新人"],
      category: ["new"],
      attendance: "出勤予定",
      time: "19:00〜01:00"
    },

    {
      id: "06",
      name: "キャスト06",
      role: "CAST / F",
      copy: "落ち着いた会話と大人っぽい空気感。",
      tags: ["大人っぽい", "人気"],
      category: ["popular"],
      attendance: "次回出勤",
      time: "18:00〜00:00"
    }

  ];


  /*
   * =========================
   * TOP CAST
   * =========================
   */

  const castList =
    document.querySelector("#cast-list");

  if (castList) {

    const topCasts =
      casts.slice(0, 3);

    castList.innerHTML =
      topCasts.map((cast) => {

        return `

          <article class="cast-card">

            <div class="photo">

              <span class="photo-label">
                PHOTO
              </span>

            </div>

            <div class="cast-card-body">

              <span class="cast-role">
                ${cast.role}
              </span>

              <h3>
                ${cast.name}
              </h3>

              <p>
                ${cast.copy}
              </p>

            </div>

          </article>

        `;

      }).join("");

  }


  /*
   * =========================
   * TODAY ATTENDANCE
   * =========================
   */

  const attendanceList =
    document.querySelector("#attendance-list");

  if (attendanceList) {

    const todayCasts =
      casts.filter((cast) =>
        cast.category.includes("today")
      );

    attendanceList.innerHTML =
      todayCasts.map((cast) => {

        return `

          <div class="attendance-item">

            <span class="attendance-name">
              ${cast.name}
            </span>

            <span class="attendance-status">
              ${cast.attendance}
            </span>

            <span class="attendance-time">
              ${cast.time}
            </span>

          </div>

        `;

      }).join("");

  }


  /*
   * =========================
   * CAST FILTER
   * =========================
   */

  const filterButtons =
    document.querySelectorAll(
      "[data-cast-filter]"
    );

  const castCards =
    document.querySelectorAll(
      ".cast-profile-card"
    );


  if (
    filterButtons.length &&
    castCards.length
  ) {

    filterButtons.forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const filter =
            button.dataset.castFilter;


          filterButtons.forEach((item) => {
            item.classList.remove(
              "is-active"
            );
          });

          button.classList.add(
            "is-active"
          );


          castCards.forEach((card) => {

            const categories =
              card.dataset.castCategory
                .split(" ");


            if (
              filter === "all" ||
              categories.includes(filter)
            ) {

              card.style.display = "";

            } else {

              card.style.display = "none";

            }

          });

        }
      );

    });

  }


  /*
   * =========================
   * SMOOTH INTERNAL LINKS
   * =========================
   */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(
              targetId
            );

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

});
