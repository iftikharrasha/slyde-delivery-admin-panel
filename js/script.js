// nav-open
// active

const toggleBars = () => {
    const bars = document.getElementById("toggler-bars");
    const sidebar = document.getElementById("sidenav-main");

    bars.classList.toggle('active');
    sidebar.classList.toggle('nav-open');
}