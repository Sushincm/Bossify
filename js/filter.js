document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("bossifyOpenFilter");
  const closeBtn = document.getElementById("bossifyCloseFilter");
  const drawer = document.getElementById("bossifyFilterDrawer");
  const backdrop = document.getElementById("bossifyFilterBackdrop");

  function openDrawer() {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openBtn?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("bossifyOpenCategory");
  const closeBtn = document.getElementById("bossifyCloseCategory");
  const sidebar = document.querySelector(".bossify-filter");
  const backdrop = document.getElementById("bossifyCatBackdrop");

  function open() {
    sidebar.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
