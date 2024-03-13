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
  const pTabs = document.querySelectorAll(".a2n-p_tab");
  const pNavLinks = document.querySelectorAll("#a2n_p-nav li a");

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

  // profile section tab
  pNavLinks.forEach(function (plink) {
    plink.addEventListener("click", function (event) {
      event.preventDefault();
      pNavLinks.forEach(function (pNavLink) {
        if (pNavLink !== plink) {
          pNavLink.classList.remove("a2n_p-active");
        }
      });
      plink.classList.add("a2n_p-active");
      const targetTabId = this.getAttribute("href").substring(1);
      changeProfileTab(targetTabId);
    });
  });

  function changeProfileTab(ptabId) {
    pTabs.forEach((tab) => tab.classList.remove("a2n-p_active-tab"));
    const selectedTab = document.getElementById(ptabId);
    if (selectedTab) {
      selectedTab.classList.add("a2n-p_active-tab");
    }
  }
});
