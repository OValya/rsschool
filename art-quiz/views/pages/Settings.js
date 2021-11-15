let Settings = {
    render : async () => {
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
                    <label class ="check" for="timer"> On
                        <input class="check-input" type="checkbox"  id="timer" checked>
                        <span class="check-box"></span>
                    </label>
                </div>
              <!--  <label for="">On</label>
                <input class = "timer-radio" type="radio">-->
                <p class="settings-item"> Time to answer </p>
                <div class="number">
                    <button class="minus" type="button" > - </button>
                    <input class="timer-value" type="number" min="0" value="30" readonly step="5">
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
    after_render: async () => {
        let minusTime = document.querySelector('.minus');
        let plusTime = document.querySelector('.plus');
        let timerValue = document.querySelector('.timer-value');
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