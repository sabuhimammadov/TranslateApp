



$(document).ready(function(){
    let language = null
    $(".form-select").change( function(){
        let value = $(this).val();
        language = value
    //  console.log(value)
    })

    $("#card-1").on("click","#btnEl",function(){
//console.log(language)
const text = $(".form-control").val()

if(language == "es" && text){
    $("#flag").attr("src" ,"./src/assents/images/es.png")
    $("#paragraph").text("Spanish")
}else if(language == "ge" && text){
    $("#flag").attr("src" ,"./src/assents/images/ge.png")
    $("#paragraph").text("German")

}else if(language == "ru" && text){
    $("#flag").attr("src" ,"./src/assents/images/ru.png")
    $("#paragraph").text("Russian")

}else{
    $("#flag").attr("src" ,"./src/assents/images/en.png")
    $("#paragraph").text("English")

}


    const settings = {
            async: true,
            crossDomain: true,
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'ce5b430555mshab9ddde96ef600cp1dc685jsn25af579fcd3d',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: {
                q: text,
                target: language,
                source: 'az'
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
            $("#translateWord").html(response.data.translations[0].translatedText)
        });


    })


})
    
    
  
