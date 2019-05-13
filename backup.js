        for(i=1;i<=count; i++) {
            switch(songmap[i]){
                case "a1":
                    const rollSounda1 = new Audio("audio/80 BPM Drums.mp3");
                    rollSounda1.loop = true;
                    // $("audio#a2")[0].play();
                    var playPromise = rollSounda1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounda1.play();  
                      });
                    }   
                    break; 
                case "a2":
                    const rollSounda2 = new Audio("audio/120_1_Tempo_FastDrum.mp3");
                    // $("audio#a2")[0].play();
                    rollSounda2.loop = true;
                    var playPromise = rollSounda2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounda2.play();  
                      });
                    }   
                    break;
                case "b1":
                    const rollSoundb1 = new Audio("audio/80 Major Piano.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundb1.loop = true;
                    var playPromise = rollSoundb1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundb1.play();  
                      });
                    }   
                    break;
                case "b2":
                    const rollSoundb2 = new Audio("audio/80 Minor Piano.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundb2.loop = true;
                    var playPromise = rollSoundb2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundb2.play();  
                      });
                    }   
                    break;
                case "b3":
                    const rollSoundb3 = new Audio("audio/120_2_Mode_Major.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundb3.loop = true;
                    var playPromise = rollSoundb3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundb3.play();  
                      });
                    }   
                    break;
                case "b4":
                    const rollSoundb4 = new Audio("audio/120_2_Mode_Minor.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundb4.loop = true;
                    var playPromise = rollSoundb4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundb4.play();  
                      });
                    }   
                    break;                                        
                case "c1":
                    const rollSoundc1 = new Audio("audio/80 High Variability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundc1.loop = true;
                    var playPromise = rollSoundc1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundc1.play();  
                      });
                    }   
                    break;
                case "c2":
                    const rollSoundc2 = new Audio("audio/80 Low Variability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundc2.loop = true;
                    var playPromise = rollSoundc2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundc2.play();  
                      });
                    }   
                    break;
                case "c3":
                    const rollSoundc3 = new Audio("audio/120_3_Pitch_HighVariability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundc3.loop = true;
                    var playPromise = rollSoundc3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundc3.play();  
                      });
                    }   
                    break;
                case "c4":
                    const rollSoundc4 = new Audio("audio/120_3_Pitch_LowVariability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundc4.loop = true;
                    var playPromise = rollSoundc4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundc4.play();  
                      });
                    }   
                    break;                    
                case "d1":
                    const rollSoundd1 = new Audio("audio/80 Interval 5th.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundd1.loop = true;
                    var playPromise = rollSoundd1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundd1.play();  
                      });
                    }   
                    break;
                case "d2":
                    const rollSoundd2 = new Audio("audio/80 Interval 7th.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundd2.loop = true;
                    var playPromise = rollSoundd2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundd2.play();  
                      });
                    }   
                    break;
                case "d3":
                    const rollSoundd3 = new Audio("audio/120_4_Interval_major3rds.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundd3.loop = true;
                    var playPromise = rollSoundd3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundd3.play();  
                      });
                    }   
                    break;
                case "d4":
                    const rollSoundd4 = new Audio("audio/120_4_Interval_minor3rds.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundd4.loop = true;
                    var playPromise = rollSoundd4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundd4.play();  
                      });
                    }   
                    break;                    
                case "e1":
                    const rollSounde1 = new Audio("audio/80 Fast Attack.mp3");
                    // $("audio#a2")[0].play();
                    rollSounde1.loop = true;
                    var playPromise = rollSounde1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounde1.play();  
                      });
                    }   
                    break;
                case "e2":
                    const rollSounde2 = new Audio("audio/80 Slow Attack.mp3");
                    // $("audio#a2")[0].play();
                    rollSounde2.loop = true;
                    var playPromise = rollSounde2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounde2.play();  
                      });
                    }   
                    break;
                case "e3":
                    const rollSounde3 = new Audio("audio/120_5_ToneAttacks_Fast.mp3");
                    // $("audio#a2")[0].play();
                    rollSounde3.loop = true;
                    var playPromise = rollSounde3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounde3.play();  
                      });
                    }   
                    break;
                case "e4":
                    const rollSounde4 = new Audio("audio/120_5_ToneAttacks_Slow.mp3");
                    // $("audio#a2")[0].play();
                    rollSounde4.loop = true;
                    var playPromise = rollSounde4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSounde4.play();  
                      });
                    }   
                    break;


                case "f1":
                    const rollSoundf1 = new Audio("audio/80 Bright Tone.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundf1.loop = true;
                    var playPromise = rollSoundf1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundf1.play();  
                      });
                    }   
                    break;
                case "f2":
                    const rollSoundf2 = new Audio("audio/80 Dark Tone.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundf2.loop = true;
                    var playPromise = rollSoundf2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundf2.play();  
                      });
                    }   
                    break;
                case "f3":
                    const rollSoundf3 = new Audio("audio/120_6_Timbre_Bright.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundf3.loop = true;
                    var playPromise = rollSoundf3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundf3.play();  
                      });
                    }   
                    break;
                case "f4":
                    const rollSoundf4 = new Audio("audio/120_6_Timbre_Soft.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundf4.loop = true;
                    var playPromise = rollSoundf4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundf4.play();  
                      });
                    }   
                    break;

                case "g1":
                    const rollSoundg1 = new Audio("audio/80 Loud.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundg1.loop = true;
                    var playPromise = rollSoundg1.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundg1.play();  
                      });
                    }   
                    break;
                case "g2":
                    const rollSoundg2 = new Audio("audio/80 Soft.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundg2.loop = true;
                    var playPromise = rollSoundg2.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundg2.play();  
                      });
                    }   
                    break;
                case "g3":
                    const rollSoundg3 = new Audio("audio/120_7_Loudness_HighVariability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundg3.loop = true;
                    var playPromise = rollSoundg3.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundg3.play();  
                      });
                    }   
                    break;
                case "g4":
                    const rollSoundg4 = new Audio("audio/120_7_Loudness_LowVariability.mp3");
                    // $("audio#a2")[0].play();
                    rollSoundg4.loop = true;
                    var playPromise = rollSoundg4.play();  
                    
                    if (playPromise !== undefined) {
                      playPromise.then(_ => {
                        // Automatic playback started!
                        // rollSound1.play();  
                        // Show playing UI.
                      })
                      .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        rollSoundg4.play();  
                      });
                    }   
                    break;                    

            }  