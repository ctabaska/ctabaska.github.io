window.onscroll = function() 
{
    scrollOpacity();
    if (window.pageYOffset < 350)
    {
        scrollCenterText();
    }
};



function scrollOpacity()
{
    var navbar = document.getElementById("nav_bar");
    if (window.pageYOffset / 60.0 <= 0.2)
    {
        navbar.style.background = 'rgba(0,0,0,0.2)';
    }
    else
    {
        navbar.style.background = 'rgba(0,0,0,' + window.pageYOffset / 60.0 + ')';
    }
    //console.log(window.pageYOffset);
}

function scrollCenterText()
{
    var welcomeText = document.getElementById("welcome_text");
    var underWelcomeText = document.getElementById("under_welcome_text");
    var openingDiv = document.getElementById("open_disp_div");

    welcomeText.style.top = (23 + (0.03 * window.pageYOffset)) +'%';
    underWelcomeText.style.top = (38 + (0.02 * window.pageYOffset)) +'%';
    openingDiv.style.height = (100 - (0.01 * window.pageYOffset)) + 'vh';

    //openingImg.style.opacity = 450 - window.pageYOffset / 450;
    //console.log("this worked");

}