//  for password show - hide
const currentPassword = document.getElementById("current_password");
const currentPasswordToggler = document.getElementById(
  "current_password_toggler"
);
const newPassword = document.getElementById("new_password");
const newPasswordToggler = document.getElementById("new_password_toggler");
const confirmPassword = document.getElementById("confirm_password");
const confirmPasswordToggler = document.getElementById(
  "confirm_password_toggler"
);

// reusable function for password show hide
function showHidePassword(passwordField, togglerElement) {
  if (passwordField.type === "password") {
    passwordField.setAttribute("type", "text");
    togglerElement.classList.add("fa-eye-slash");
  } else {
    togglerElement.classList.remove("fa-eye-slash");
    passwordField.setAttribute("type", "password");
  }
}

// for current password
currentPasswordToggler.addEventListener("click", function () {
  showHidePassword(currentPassword, currentPasswordToggler);
});
// for new password
newPasswordToggler.addEventListener("click", function () {
  showHidePassword(newPassword, newPasswordToggler);
});
// for confirm password
confirmPasswordToggler.addEventListener("click", function () {
  showHidePassword(confirmPassword, confirmPasswordToggler);
});

//  main tabs and nav
document.addEventListener("DOMContentLoaded", function () {
  const nxtNavbarToggle = document.getElementById("a2n_navbar-toggle");
  const nxtNavList = document.getElementById("a2n_nav-list");
  const nxtTabs = document.querySelectorAll(".a2n_dash_tabs");
  const nxtNavLinks = document.querySelectorAll("#a2n_nav-list li a");
  const nxtUserNavLinks = document.querySelectorAll(".a2n_user_log ul li a");

  nxtNavbarToggle.addEventListener("click", function () {
    nxtNavList.classList.toggle("a2n_show_nav");
    nxtNavbarToggle.classList.toggle("a2n_nav_active");
  });

  // Function to remove active class from all nav links
  function removeActiveClass() {
    nxtNavLinks.forEach(function (navLink) {
      navLink.classList.remove("a2n_active");
    });
    nxtUserNavLinks.forEach(function (userNavLink) {
      userNavLink.classList.remove("a2n_active");
    });
  }

  // Event listener for navigation links
  nxtNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      removeActiveClass();
      link.classList.add("a2n_active");
      nxtNavList.classList.remove("a2n_show_nav");
      nxtNavbarToggle.classList.remove("a2n_nav_active");
      const targetTabId = this.getAttribute("href").substring(1);
      changeTab(targetTabId);
      const correspondingUserLink = document.querySelector(
        `.a2n_user_log ul li a[href="#${targetTabId}"]`
      );
      if (correspondingUserLink) {
        correspondingUserLink.classList.add("a2n_active");
      }
    });
  });

  // Event listener for user navigation links
  nxtUserNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      removeActiveClass();
      link.classList.add("a2n_active");
      const targetTabId = this.getAttribute("href").substring(1);
      changeTab(targetTabId);
      const correspondingNavLink = document.querySelector(
        `#a2n_nav-list li a[href="#${targetTabId}"]`
      );
      if (correspondingNavLink) {
        correspondingNavLink.classList.add("a2n_active");
      }
    });
  });

  function changeTab(tabId) {
    nxtTabs.forEach((tab) => tab.classList.remove("a2n_active_tab"));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add("a2n_active_tab");
    }
  }

  // common functions for tab sections
  function setupTabNavigation(
    navLinksSelector,
    tabsSelector,
    navActiveClass,
    tabsActiveClass
  ) {
    const navLinks = document.querySelectorAll(navLinksSelector);
    const tabs = document.querySelectorAll(tabsSelector);

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.forEach(function (navLink) {
          if (navLink !== link) {
            navLink.classList.remove(navActiveClass);
          }
        });
        link.classList.add(navActiveClass);
        const targetTabId = this.getAttribute("href").substring(1);
        switchTab(targetTabId, tabs, tabsActiveClass);
      });
    });
  }

  function switchTab(tabId, tabs, tabsActiveClass) {
    tabs.forEach((tab) => tab.classList.remove(tabsActiveClass));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add(tabsActiveClass);
    }
  }
  // profile tab
  setupTabNavigation(
    "#a2n_p-nav li a",
    ".a2n-p_tab",
    "a2n_p-active",
    "a2n-p_active-tab"
  );
  // courses tab
  setupTabNavigation(
    "#a2n_c-nav li a",
    ".a2n-c_tab",
    "a2n_c-active",
    "a2n-c_active-tab"
  );
});
