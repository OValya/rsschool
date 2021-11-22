let Settings = {
    render : async () => {
        let time;
        if(localStorage.getItem('time') != null){
           time  = (localStorage.getItem('time')=== 'Infinity')? 0 : localStorage.getItem('time');
        } else {time = 30}
        
        

        let view =  /*html*/`
        <div class="settings-page">
        <div class="settings-title-container">
            <a class = "back-to-start-page" href="/#/">
                    
            </a>
            <p>Settings</p>
        </div> 
        <div class="settings">
            <div class="volume-container">
                <label class= "settings-item" for=""> Volume
                </label>
                <input class = "volume-range" type="range">
                <input class="volume-mute-icon" type="button" value="">
                <input class="volume-up-icon" type="button" value="">

            </div>
            <div class="timer-container">
                <p class="settings-item"> Time game </p>
                <div class="timer-on-off-container">
                    <label class ="check" for="timer">ON
                         <input class="check-input" type="checkbox"  id="timer" checked>
                         <span class="check-box"></span>
                    </label>
                </div>
                <p class="settings-item"> Time to answer </p>
                <div class="number">
                    <button class="minus" type="button" > - </button>
                    <input class="timer-value" type="number" min="5" max="30" value="${time}" readonly step="5">
                    <button class="plus" type="button" >+</button>
                </div>
               <!-- <input class = "timer-num" type="number">  -->     
            </div>
            <div class="button-container-settings">
                <button class="default-settings-btn button button-settings"> Default </button>
                <button class="save-settings-btn button button-settings"> Save </button>
            </div>
        </div>
    </div>
        `
        return view
    },
    afterRender: async () => {
        
        let minusTime = document.querySelector('.minus');
        let plusTime = document.querySelector('.plus');
        let timerValue = document.querySelector('.timer-value');
        let check = document.querySelector('.check-input');
        let label = document.querySelector('.check');
        //let timer = document.querySelector('.timer');
        
        if( localStorage.getItem('setTimer') != null){check.checked = (localStorage.getItem('setTimer')==='true') }
            else{check.checked = true; }

       // (check.checked) ?  label.textContent = 'ON' : label.value = 'OFF'
      
        
        let save = document.querySelector('.save-settings-btn');
      //  check.addEventListener('change', (e) => {  } )
        
        save.addEventListener('click', (e) => {
            if(check.checked){
              localStorage.setItem('time', timerValue.value);
              localStorage.setItem('setTimer', 'true')
            } else {
                localStorage.setItem('time', Infinity);
                localStorage.setItem('setTimer', 'false')
               // timer.classList.add('hide');
            }
        })


        minusTime.addEventListener('click', (e) => {
            timerValue.stepDown(); 
            //timerValue.onchange();
        })
        
        plusTime.addEventListener('click', (e)=>{
            timerValue.stepUp(); 
            //timerValue.onchange();
        })



    }
        
}

export default Settings;