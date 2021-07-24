const toggleBars = () => {
    const bars = document.getElementById("toggler-bars");
    const sidebar = document.getElementById("sidenav-main");
    const opacity = document.getElementById("header-body");
    const heading = document.getElementById("headingOne");

    bars.classList.toggle('active');
    sidebar.classList.toggle('nav-open');
    heading.classList.toggle('clicked');
    opacity.classList.toggle('opacity-on');
}