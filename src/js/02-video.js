import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    
    player.on('timeupdate', throttle(function() {
         
        player.getCurrentTime().then(function(seconds) {

// Варіант 1. Доробка для корректної перемотки назад           
            // player.getSeeking().then(function(seeking) {
            //     if(seeking){
            //         localStorage.setItem("videoplayer-current-time", seconds);
            //     }
            // }).catch(function(error) {
            //     console.log("error");
            // });
                
            const savedTime = fnGetLocalStorageTime();

            if(seconds > savedTime) {

                localStorage.setItem("videoplayer-current-time", seconds);
               
            }else{

                player.setCurrentTime(savedTime);

            }

        }).catch(function(error) {
            console.log(error);
        });
           
    }, 1000));

    function fnGetLocalStorageTime(){
        return localStorage.getItem("videoplayer-current-time") ?? 0;
    }

    // Варіант 2. Доробка для корректної перемотки назад 
   player.on("seeking", function(){
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
       
    }).catch(function(error) {
        console.log(error);
    });
   });