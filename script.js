console.log("javascript loaded");

let light = {
    bg : "#FEFEFE",
    bgpanel :"#f3f3f3",
    bgbtn :"#257dc0",
    colorheading :"#257dc0",
    colorbtn :"#fff",
    colorpara :"#333333",
    boxshadow :"#d3d3d3"
}

let dark = {
   bg :"#333333",
   bgpanel :"#666666",
   bgbtn :"#02aa96",
   colorheading :"#02aa96",
   colorbtn :"#fff",
   colorpara :"#fff",
   boxshadow :"#222"
}

var checkbox = document.getElementById('themeToggle');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
         theme(dark);
    } else {
         theme(light);
    }
})


let update = document.querySelector('#themeUpdate');
update.addEventListener('submit',(e)=>{
    e.preventDefault();

    let bodyBg = document.querySelector('input[name=bodyBg]');
    let panelBg = document.querySelector('input[name=panelBg]');
    let bgBtn = document.querySelector('input[name=bgBtn]');
    let headingColor = document.querySelector('input[name=headingColor]');
    let btnColor = document.querySelector('input[name=btnColor]');
    let paraColor = document.querySelector('input[name=paraColor]');
    let shadowColor = document.querySelector('input[name=shadowColor]');
    
    let custom = {
        bg :bodyBg.value,
        bgpanel :panelBg.value,
        bgbtn :bgBtn.value,
        colorheading :headingColor.value,
        colorbtn :btnColor.value,
        colorpara :paraColor.value,
        boxshadow :shadowColor.value
    }
    theme(custom);

})


let theme = (themes) =>{

    document.documentElement.style.setProperty('--bg',themes.bg);
    document.documentElement.style.setProperty('--bg-panel',themes.bgpanel);
    document.documentElement.style.setProperty('--bg-btn',themes.bgbtn);
    document.documentElement.style.setProperty('--color-heading',themes.colorheading);
    document.documentElement.style.setProperty('--color-btn',themes.colorbtn);
    document.documentElement.style.setProperty('--color-para',themes.colorpara);
    document.documentElement.style.setProperty('--box-shadow',themes.boxshadow);

    document.documentElement.classList.add('transition');
    window.setTimeout(() =>{
    document.documentElement.classList.remove('transition');
    },1000);

}




// github 


