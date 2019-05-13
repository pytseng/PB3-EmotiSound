

$('.mm-prev-btn').hide();

    var x;
    var count;
    var current;
    var percent;
    var z = [];

    init();
    getCurrentSlide();
    goToNext();
    goToPrev();
    getCount();
    getBPM();
    // playAttachedMusic();
    // playAll();
    // checkStatus();
    // buttonConfig();
    buildStatus();
    deliverStatus();
    submitData();
    goBack();

    function init() {
        
        jQuery('.mm-survey-container .mm-survey-page').each(function() {

            var item;
            var page;

            item = jQuery(this);
            page = item.data('page');

            item.addClass('mm-page-'+page);
            //item.html(page);

        });

    }

    function getBPM(){

        jQuery('#radioa1').on('click', function(){
            jQuery('.80bpm').show();
            jQuery('.120bpm').hide();
            jQuery('.120bpm input').hide();
        })
        jQuery('#radioa2').on('click', function(){
            jQuery('.80bpm').hide();
            jQuery('.80bpm input').hide();
            jQuery('.120bpm').show();
        })        
    }

    function getCount() {

        count = jQuery('.mm-survey-page').length;
        return count;

    }


    function goToNext() {
        jQuery('.mm-next-btn').on('click', function() {
            goToSlide(x);
            getCount();
            current = x + 1;
            var g = current/count;
            buildProgress(g);
            var y = (count + 1);
            getButtons();
            jQuery('.mm-survey-page').removeClass('active');
            jQuery('.mm-page-'+current).addClass('active');
            getCurrentSlide();
            checkStatus();
            if( jQuery('.mm-page-'+count).hasClass('active') ){
                if( jQuery('.mm-page-'+count).hasClass('pass') ) {
                    jQuery('.mm-finish-btn').addClass('active');
                }
                else {
                    jQuery('.mm-page-'+count+' .mm-survery-content .mm-survey-item').on('click', function() {
                        jQuery('.mm-finish-btn').addClass('active');
                    });
                }
            }
            else {
                jQuery('.mm-finish-btn').removeClass('active');
                if( jQuery('.mm-page-'+current).hasClass('pass') ) {
                    jQuery('.mm-survey-container').addClass('good');
                    jQuery('.mm-survey').addClass('okay');
                }
                else {
                    jQuery('.mm-survey-container').removeClass('good');
                    jQuery('.mm-survey').removeClass('okay');
                }
            }
            buttonConfig();
        });

    }

    function goToPrev() {

        jQuery('.mm-prev-btn').on('click', function() {
            goToSlide(x);
            getCount();         
            current = (x - 1);
            var g = current/count;
            buildProgress(g);
            var y = count;
            getButtons();
            jQuery('.mm-survey-page').removeClass('active');
            jQuery('.mm-page-'+current).addClass('active');
            getCurrentSlide();
            checkStatus();
            jQuery('.mm-finish-btn').removeClass('active');
            if( jQuery('.mm-page-'+current).hasClass('pass') ) {
                jQuery('.mm-survey-container').addClass('good');
                jQuery('.mm-survey').addClass('okay');
            }
            else {
                jQuery('.mm-survey-container').removeClass('good');
                jQuery('.mm-survey').removeClass('okay');
            }
            buttonConfig();
        });

    }

    function buildProgress(g) {

        if(g > 1){
            g = g - 1;
        }
        else if (g === 0) {
            g = 1;
        }
        g = g * 100;
        jQuery('.mm-survey-progress-bar').css({ 'width' : g+'%' });

    }

    function goToSlide(x) {

        return x;

    }

    function getCurrentSlide() {

        jQuery('.mm-survey-page').each(function() {

            var item;

            item = jQuery(this);

            if( jQuery(item).hasClass('active') ) {
                x = item.data('page');
            }
            else {
                
            }

            return x;

        });

    }

    function getButtons() {

        if(current === 0) {
            current = y;
        }
        if(current === count) {
            jQuery('.mm-next-btn').hide();
        }
        else if(current === 1) {
            jQuery('.mm-prev-btn').hide();
        }
        else {
            jQuery('.mm-next-btn').show();
            jQuery('.mm-prev-btn').show();
        }

    }

    jQuery('.mm-survey-q li input').each(function() {

        var item;
        item = jQuery(this);

        jQuery(item).on('click', function() {
            if( jQuery('input:checked').length > 0 ) {
                // console.log(item.val());
                jQuery('label').parent().removeClass('active');
                item.closest( 'li' ).addClass('active');
            }
            else {
                //
            }
        });

    });

    percent = (x/count) * 100;
    jQuery('.mm-survey-progress-bar').css({ 'width' : percent+'%' });

    function checkStatus() {
        jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
            var item;
            item = jQuery(this);
            item.closest('.mm-survey-page').addClass('pass');
        });
    }

    function buildStatus() {
        jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
            var item;
            item = jQuery(this);
            item.addClass('bingo');
            item.closest('.mm-survey-page').addClass('pass');
            jQuery('.mm-survey-container').addClass('good');
        });
    }

    function deliverStatus() {
        jQuery('.mm-survey-item').on('click', function() {
            if( jQuery('.mm-survey-container').hasClass('good') ){
                jQuery('.mm-survey').addClass('okay');
            }
            else {
                jQuery('.mm-survey').removeClass('okay');   
            }
            buttonConfig();
        });
    }

    function lastPage() {
        if( jQuery('.mm-next-btn').hasClass('cool') ) {
            alert('cool');
        }
    }

    function buttonConfig() {
        if( jQuery('.mm-survey').hasClass('okay') ) {
            jQuery('.mm-next-btn button').prop('disabled', false);
        }
        else {
            jQuery('.mm-next-btn button').prop('disabled', true);
        }
    }

    function submitData() {
        jQuery('.mm-finish-btn').on('click', function() {
            collectData();
            jQuery('.mm-survey-bottom').slideUp();
            jQuery('.mm-survey-results').slideDown();
        });
    }

    // function playAll(){
    //     const rollSound1 = new Audio("audio/80 Interval 5th.mp3");
    //     const rollSound2 = new Audio("audio/80 Interval 7th.mp3");
    //     // $("audio#a2")[0].play();
    //     var playPromise = rollSound1.play();
        
    //     if (playPromise !== undefined) {
    //       playPromise.then(_ => {
    //         // Automatic playback started!
    //         // rollSound1.play();  
    //         // Show playing UI.
    //       })
    //       .catch(error => {
    //         // Auto-play was prevented
    //         // Show paused UI.
    //         rollSound1.play();  
    //       });
    //     }        
    //     //
    //     // rollSound2.play();
    //     // $("#a1")
    //     // $("#a2").play();
        
    // }

    // function playAttachedMusic() {
    //     jQuery('.mm-survey-item').on('click', function() {
            
    //         var item;
    //         item = jQuery(this);
    //         var attachedSong = $(this).children("input").data("song")
    //         switch(attachedSong){
    //             case "a1":


    //         }
    //         console.log(item);
    //         debugger;
    //     })
    // }    

    function collectData() {
        
        var map = {};
        var songmap = {};
        var ax = ['0','red','mercedes','3.14','3'];
        var answer = '';
        var total = 0;
        var ttl = 0;
        var g;
        var c = 0;

        jQuery('.mm-survey-item input:checked').each(function(index, val) {
            // debugger;
            var attachedSong = $(this).data("song")

            var item;
            var data;
            var name;
            var n;

            item = jQuery(this);
            data = item.val();
            name = item.data('item');
            n = parseInt(data);
            total += n;

            map[name] = data;
            songmap[name] = attachedSong;

        });

        jQuery('.mm-survey-results-container .mm-survey-results-list').html('');

        var audio = [];
        var audioSource = [];

        
        for(i=1;i<=count;i++){
            audio[i] = new Audio();
            audioSource[i] = document.createElement("source");
            audioSource[i].type = "audio/mpeg";
        }
        // var snd1  = new Audio();
        // var src1  = document.createElement("source");
        // src1.type = "audio/mpeg";
        // src1.src  = "audio/Dombra.mp3";
        // snd1.appendChild(src1);

        // snd1.play(); snd2.play(); // Now both will play at the same time


        for(i=1;i<=count; i++) {
            debugger;
            switch(songmap[i]){
                case "a1":
                    audioSource[i].src = "audio/80 BPM Drums.mp3";
                    audio[i].appendChild(audioSource[i]);  
                    break; 
                case "a2":
                    audioSource[i].src = "audio/120_1_Tempo_FastDrum.mp3";
                    audio[i].appendChild(audioSource[i]); 
                    break;
                case "b1":
                    audioSource[i].src = "audio/80 Major Piano.mp3";
                    audio[i].appendChild(audioSource[i]);  
                    break;
                case "b2":
                    audioSource[i].src = "audio/80 Minor Piano.mp3";
                    audio[i].appendChild(audioSource[i]);                
                    break;
                case "b3":
                    audioSource[i].src = "audio/120_2_Mode_Major.mp3";
                    audio[i].appendChild(audioSource[i]); 
                    break;
                case "b4":
                    audioSource[i].src = "audio/120_2_Mode_Minor.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;
                case "c1":
                    audioSource[i].src = "80 High Variability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;
                case "c2":
                    audioSource[i].src = "audio/80 Low Variability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;
                case "c3":
                    audioSource[i].src = "audio/120_3_Pitch_HighVariability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;
                case "c4":
                    audioSource[i].src = "audio/120_3_Pitch_LowVariability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;
                case "d1":
                    audioSource[i].src = "audio/120_3_Pitch_LowVariability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "d2":
                    audioSource[i].src = "audio/80 Interval 7th.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "d3":
                    audioSource[i].src = "audio/120_4_Interval_major3rds.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "d4":
                    audioSource[i].src = "audio/120_4_Interval_minor3rds.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                                   
                case "e1":
                    audioSource[i].src = "audio/80 Fast Attack.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "e2":
                    audioSource[i].src = "audio/80 Slow Attack.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "e3":
                    audioSource[i].src = "audio/120_5_ToneAttacks_Fast.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "e4":
                    audioSource[i].src = "audio/120_5_ToneAttacks_Slow.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "f1":
                    audioSource[i].src = "audio/80 Bright Tone.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "f2":
                    audioSource[i].src = "audio/80 Dark Tone.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "f3":
                    audioSource[i].src = "audio/120_6_Timbre_Bright.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "f4":
                    audioSource[i].src = "audio/120_6_Timbre_Soft.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "g1":
                    audioSource[i].src = "audio/80 Loud.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "g2":
                    audioSource[i].src = "audio/80 Soft.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "g3":
                    audioSource[i].src = "audio/120_7_Loudness_HighVariability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                case "g4":
                    audioSource[i].src = "audio/120_7_Loudness_LowVariability.mp3";
                    audio[i].appendChild(audioSource[i]);
                    break;                
                default:
                    console.log("pass");
                    break;           
            }  

        }


        for(i=1;i<=count; i++){
            // audio[i].play();
            var playPromise = audio[i].play();
            if (playPromise !== undefined) {
              playPromise.then(_ => {
                // Automatic playback started!
                audio[i].play();
              })
              .catch(error => {
                console.log("error");
                audio[i].play();
              });
            }            
        }
       

        // for (i = 1; i <= count; i++) {

        //     var t = {};
        //     var m = {};
        //     answer += map[i] + '<br>';
            
        //     if( map[i] === ax[i]) {
        //         g = map[i];
        //         p = 'correct';
        //         c = 1;
        //     }
        //     else {
        //         g = map[i];
        //         p = 'incorrect';
        //         c = 0;
        //     }

        //     jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item '+p+'"><span class="mm-item-number">'+i+'</span><span class="mm-item-info">'+g+' - '+p+'</span></li>');

        //     m[i] = c;
        //     ttl += m[i];

        // }

        // var results;
        // results = ( ( ttl / count ) * 100 ).toFixed(0);

        // jQuery('.mm-survey-results-score').html( results + '%' );

    }

    function goBack() {
        jQuery('.mm-back-btn').on('click', function() {
            jQuery('.mm-survey-bottom').slideDown();
            jQuery('.mm-survey-results').slideUp();
        });
    }