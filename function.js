let DARKMODE = false;
const BODY = document.querySelector('body');

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    DARKMODE = true;
}else{
    DARKMODE = false;
}

console.log(DARKMODE);

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
}

const setClassToBody = () => {
    if(DARKMODE){
        BODY.classList.remove('light');
        BODY.classList.add('dark');
    }else{
        BODY.classList.remove('dark');
        BODY.classList.add('light');
    }
};

setClassToBody();