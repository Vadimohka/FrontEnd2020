function showinfo(city){
    console.log(city);
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