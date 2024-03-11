document.addEventListener("DOMContentLoaded", function () {
  const nxtNavbarToggle = document.getElementById("a2n_navbar-toggle");
  const nxtNavList = document.getElementById("a2n_nav-list");
  const nxtTabs = document.querySelectorAll(".a2n_dash_tabs");
  const nxtNavLinks = document.querySelectorAll("#a2n_nav-list li a");

  nxtNavbarToggle.addEventListener("click", function () {
    nxtNavList.classList.toggle("a2n_show_nav");
    nxtNavbarToggle.classList.toggle("a2n_nav_active");
  });

  nxtNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      nxtNavLinks.forEach(function (navLink) {
        if (navLink !== link) {
          navLink.classList.remove("a2n_active");
        }
      });

      link.classList.add("a2n_active");
      nxtNavList.classList.remove("a2n_show_nav");
      nxtNavbarToggle.classList.remove("a2n_nav_active");

      const targetTabId = this.getAttribute("href").substring(1);
      changeTab(targetTabId);
    });
  });

  function changeTab(tabId) {
    nxtTabs.forEach((tab) => tab.classList.remove("a2n_active_tab"));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add("a2n_active_tab");
    }
  }
});
