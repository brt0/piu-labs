function changeTheme(){
    
    elements = document.getElementsByClassName("theme");

    if(mode)
    {
        document.getElementById("main_form").style.backgroundColor = "#111111";
        document.getElementById("main_form").style.color = "white";

        for (const element of elements)
        {
            element.style.backgroundColor="#444444";
            element.style.color="white";
        }

    }
    else
    {
        document.getElementById("main_form").style.backgroundColor = "white";
        document.getElementById("main_form").style.color = "black";
        for (const element of elements)
        {
            element.style.backgroundColor="white";
            element.style.color="black";
        }
    }
    mode= !mode;
}