function showinfo(city){
    let cities = ['BrestInfo', 'VitebskInfo', 'MogilevInfo', 'MinskInfo', 'GrodnoInfo', 'GomelInfo', 'MinskayaInfo'];
    let infos = ['BrestInformation','VitebskInformation','MogilevInformation','MinskInformation','GrodnoInformation','GomelInformation','MinskayaInformation'];
    let logos = ['BrestLogo', 'VitebskLogo', 'MogilevLogo', 'MinskLogo', 'GrodnoLogo', 'GomelLogo', 'MinskayaLogo'];
    for (let i = 0; i < cities.length; i++){
        if (city===cities[i]){
            document.getElementById(logos[i]).style.display = 'none';
            document.getElementById(infos[i]).style.display = 'block';
        }
    }
}

function closeinfo(logo_id){
    let infos = ['BrestInformation','VitebskInformation','MogilevInformation','MinskInformation','GrodnoInformation','GomelInformation','MinskayaInformation'];
    let logos = ['BrestLogo', 'VitebskLogo', 'MogilevLogo', 'MinskLogo', 'GrodnoLogo', 'GomelLogo', 'MinskayaLogo'];
    let buttons = ['Brest-close-button', 'Vitebsk-close-button', 'Mogilev-close-button','Minsk-close-button', 'Grodno-close-button', 'Gomel-close-button','Minskaya-close-button'];
    for(let i = 0; i < buttons.length; i++){
        if(logo_id===buttons[i]){
            document.getElementById(logos[i]).style.display = 'block';
            document.getElementById(infos[i]).style.display = 'none';
        }
    }
}