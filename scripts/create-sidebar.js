const htmlText = `
  <a href="index.html" class="app-logo-link">
      <img src="images/sidebar-icons/app-logo.svg" alt="" class="app-logo">
      <img src="images/sidebar-icons/app-name.png" alt="" class="app-title">
  </a>
  <div class="middle-icons">
    <a href="index.html" class="homepage-link">
      <img src="images/sidebar-icons/home-icon.png" alt="" class="home-icon">
      <div>Home</div>
    </a>
    <a href="explore.html" class="searchbar-link">
      <img src="images/sidebar-icons/search-icon.svg" alt="" class="search-icon">
      <div>Explore</div>
    </a>
  </div>
  <a href="myprofile.html" class="profile-link">
    <img src="images/sidebar-icons/profile-icon.svg" alt="" class="profile-icon">
    <div>Profile</div>
  </a>
`;

const sidebar = document.querySelector('.side-bar');
sidebar.innerHTML = htmlText;

