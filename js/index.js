/* Variabili per la gestione dei menu a comparsa ed effetti sui bottoni chiamanti*/
var main_menu =false
var weather = false;
var mainLogo = false;
var subcribe = false;
var login = false;

/*dimensioni dimnamiche delle finestre a comparsa*/
function set_up_responsive(){

    /* MAIN MENU */
    if(window.innerWidth < 767){

        /* MAIN MENU */
        $(".main_menu").css("width","100%");
        $(".main_menu").css("left",$(".left_menu").position().left);
        $(".main_menu").css("top", $(".header").height());
        $(".main_menu").css("z-index","1");
        $(".main_menu .elemento_menu_tendina").css("justify-content","space-beetween");
        $(".container_search").css("width","90%");


        /* WEATHER */
        $(".drop_weather").css("width","100%");
        $(".drop_weather").css("left",$(".left_menu").position().left);
        $(".drop_weather").css("top", $(".header").height());

        /* LOGIN */
        $(".drop_login").css("width","100%");
        $(".drop_login").css("left",0);
        $(".drop_login").css("top", $(".header").height());
        $(".drop_login").css("justify-content","left");


        /*--------------------------------------------------------*/

        $(".contenitore_doppio").css("flex-direction","column");

    }else{

        /* MAIN MENU */
        $(".main_menu").css("left", $(".main_menu_logo").position().left);
        $(".main_menu").css("top", $(".header").height());
        $(".main_menu").css("width","auto");
        $(".main_menu .elemento_menu_tendina").css("justify-content","space-between");
        $(".container_search").css("wwidth","auto");

        /* WEATHER */
        $(".drop_weather").css("left", $(".drop_left_menu").position().left);
        $(".drop_weather").css("top", $(".header").height());
        $(".drop_weather").css("width","auto");

        /* LOGIN */
        $(".drop_login").css("width","400px");
        /*$(".drop_login").css("left", $(".drop_right_menu").position().left);*/
        $(".drop_login").css("right",0);
        $(".drop_login").css("top", $(".header").height());
        $(".drop_login").css("justify-content","left");

        /*--------------------------------------------------------*/


        $(".contenitore_doppio").css("flex-direction","row");
    }
}

window.addEventListener('resize', set_up_responsive);

function close_main_menu(){
    $(".main_menu").css("display","none");
    $(".main_menu_logo").css("border","none");
}
function close_weather(){
    weather = false;
    $("#chevron_weather").attr("src","img/chevron_down.png");
    $(".drop_weather").css("display","none");
    $(".drop_left_menu").css("border","none");
}
function close_MainLogo(){
    mainLogo = false;
    $(".logo").css("border","none");
    $(".logo").css("padding","0px");
}
function close_subcribe(){
    subcribe = false;
    $(".subscribe_button_conteiner").css("border","none");
    $(".subscribe_button_conteiner").css("border-radius","0px");
}
function close_login(){
    login = false;
    $("#chevron_login").attr("src","img/chevron_down.png");
    $(".drop_login").css("display","none");
    $(".drop_right_menu").css("border","none");
}


function set_MainLogo(){

    close_main_menu();
    close_weather();
    close_subcribe();
    close_login();

    if(!mainLogo) {
        mainLogo = true;
        $(".logo").css("padding","5px");
        $(".logo").css("border","2px solid #9bf2ef");
        $(".logo").css("border-radius","10px");
    }else{
        mainLogo = false;
        $(".logo").css("border","none");
        $(".logo").css("padding","0px");
    }
}
function set_main_menu() {

    close_weather();
    close_MainLogo();
    close_subcribe();
    close_login();


    if(!main_menu) {
        main_menu = true;
        $(".main_menu").css("display","flex");
        $(".main_menu_logo").css("border","2px solid #9bf2ef");
        $(".main_menu_logo").css("border-radius","10px");
    }else{
        main_menu = false;
        $(".main_menu").css("display","none");
        $(".main_menu_logo").css("border","none");
    }
}
function set_weather() {

    close_main_menu();
    close_MainLogo();
    close_subcribe();
    close_login();


    if(!weather) {
        weather = true;
        $("#chevron_weather").attr("src","img/chevron_up.png");
        $(".drop_weather").css("display","flex");
        $(".drop_left_menu").css("border","2px solid #9bf2ef");
        $(".drop_left_menu").css("border-radius","10px");
    }else{
        weather = false;
        $("#chevron_weather").attr("src","img/chevron_down.png");
        $(".drop_weather").css("display","none");
        $(".drop_left_menu").css("border","none");
    }
}
function set_subcribe() {

    close_main_menu();
    close_weather();
    close_MainLogo();
    close_login();

    if(!subcribe) {
        subcribe = true;
        $(".subscribe_button_conteiner").css("border","2px solid #9bf2ef");
        $(".subscribe_button_conteiner").css("border-radius","10px");
    }else{
        subcribe = false;
        $(".subscribe_button_conteiner").css("border","none");
        $(".subscribe_button_conteiner").css("border-radius","0px");


    }
}
function set_login() {

    close_main_menu();
    close_weather();
    close_MainLogo();
    close_subcribe();




    if(!login) {
        login = true;
        $("#chevron_login").attr("src","img/chevron_up.png");
        $(".drop_login").css("display","flex");
        $(".drop_right_menu").css("border","2px solid #9bf2ef");
        $(".drop_right_menu").css("border-radius","10px");
    }else{
        login = false;
        $("#chevron_login").attr("src","img/chevron_down.png");
        $(".drop_login").css("display","none");
        $(".drop_right_menu").css("border","none");
    }

}



function posizione_sottomenu(){

    if(window.innerWidth >= 767) {
        $(".sub_menu").css("left", $(".main_menu").outerWidth());
        $(".sub_menu").css("top",0);
    }else{

        $(".sub_menu").css("left", 0);
        $(".sub_menu").css("top", $(".main_menu").height());
        /*$(".sub_menu").css("z-index", 10);*/
    }
}
function show_sub_menu(id=0){

    $(".sub_menu").css("height",$(".main_menu").height());
    $(".sub_menu").css("display","none");
    $(".chevron_right").css("display","flex");

    if(window.innerWidth >= 767) {

        posizione_sottomenu();

        switch (id) {
            case 1:
                $("#news_menu").css("display", "flex");
                $("#chevron_right_news").css("display", "none");
                break;
            case 2:
                $("#PoliticsElections_menu").css("display", "flex");
                $("#chevron_right_PoliticsElections").css("display", "none");
                break;
            case 3:
                $("#Local_news_menu").css("display", "flex");
                $("#chevron_right_Local_News").css("display", "none");
                break;
            case 4:
                $("#Opinion_menu").css("display", "flex");
                $("#chevron_right_Opinion").css("display", "none");
                break;
            case 5:
                $("#Business_menu").css("display", "flex");
                $("#chevron_right_Business").css("display", "none");
                break;
            case 6:
                $("#Sports_menu").css("display", "flex");
                $("#chevron_right_Sports").css("display", "none");
                break;
            case 7:
                $("#Online_Sport_Betting_menu").css("display", "flex");
                $("#chevron_right_Online_Sport_Betting").css("display", "none");
                break;
            case 8:
                $("#Entertainment_menu").css("display", "flex");
                $("#chevron_right_Entertainment").css("display", "none");
                break;
            case 9:
                $("#ComicsPuzzles_menu").css("display", "flex");
                $("#chevron_right_ComicsPuzzles").css("display", "none");
                break;
            case 10:
                $("#Follow_Us_menu").css("display", "flex");
                $("#chevron_right_Follow_Us").css("display", "none");
                break;
            case 11:
                $("#Classifieds_menu").css("display", "flex");
                $("#chevron_right_Classifieds").css("display", "none");
                break;

        }
    }

}
function show_sub_menu_responsive(id=0){
    $(".sub_menu").css("height",$(".main_menu").height());
    if(window.innerWidth < 767) {

        posizione_sottomenu();

        switch (id) {
            case 1:
                $("#news_menu").css("display", "flex");
                break;
            case 2:
                $("#PoliticsElections_menu").css("display", "flex");
                break;
            case 3:
                $("#Local_news_menu").css("display", "flex");
                break;
            case 4:
                $("#Opinion_menu").css("display", "flex");
                break;
            case 5:
                $("#Business_menu").css("display", "flex");
                break;
            case 6:
                $("#Sports_menu").css("display", "flex");
                break;
            case 7:
                $("#Online_Sport_Betting_menu").css("display", "flex");
                break;
            case 8:
                $("#Entertainment_menu").css("display", "flex");
                break;
            case 9:
                $("#ComicsPuzzles_menu").css("display", "flex");
                break;
            case 10:
                $("#Follow_Us_menu").css("display", "flex");
                break;
            case 11:
                $("#Classifieds_menu").css("display", "flex");
                break;

        }
    }
}




function posizione_sottomenu2(){

    $(".sub_menu2").css("left", $(".sub_menu").outerWidth()   );
    $(".sub_menu2").css("top", 0 );

}
function show_sub_menu2(id=0 ){

    $(".sub_menu2").css("height",$(".main_menu").height());
    $(".sub_menu2").css("display","none");
    $(".chevron_right").css("display","block");

    if(window.innerWidth >= 767) {
        posizione_sottomenu2();
        switch (id) {
            case 1:
                $("#Special_Reports_menu").css("display", "flex");
                $("#chevron_right_Special_Reports").css("display", "none");
                break;
            case 2:
                $("#Browns_menu").css("display", "flex");
                $("#chevron_right_Browns").css("display", "none");
                break;
            case 3:
                $("#Columns_menu").css("display", "flex");
                $("#chevron_right_Columns").css("display", "none");
                break;
            case 4:
                $("#Food_Dining_menu").css("display", "flex");
                $("#chevron_right_Food_Dining").css("display", "none");
                break;
        }
    }
}


