import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class WsuVideoPlayer {

    constructor( player ) {

        

        this.player          = false;
        this.id              = 'wsu-video-player-' + Date.now() + Math.floor( Math.random() * 100000 );
        this.playerId        = this.id + '-player';
        this.backgroundId    = this.id + '-backgournd';
        this.wrapper         = player;
        this.type            = player.dataset.type ?? false;
        this.videoId         = player.dataset.videoid ?? false;
        this.autoPlay        = player.dataset.autoPlay ?? 0;
        this.title           = player.dataset.title ?? '';
        this.isInit          = player.classList.contains( this.initClass );
        this.loaded          = false;
        this.bgVideo         = this.wrapper.querySelector('.wsu-video-player__video-background');
        this.bgPlayer        = false;
        this.container       = this.wrapper.querySelector('.wsu-video-player__video'); 

        this.init();
        
    }


    init() {

        try {

            if ( this.wrapper ) {

                this.wrapper.id = this.id;

                if ( this.container ) {

                    this.container.id = this.playerId;
                }

                if ( this.bgVideo ) {

                    this.bgVideo.id = this.backgroundId;
                }

                this.bindEvents();

            } 
        } catch (error) {

            console.error('wsu-video-player:' + error );

        }
    }

    bindEvents() {

        this.wrapper.addEventListener(
            'click', 
            this.clickEvent.bind( this ),
            false
        );

        this.wrapper.addEventListener(
            'mouseover', 
            this.mouseoverEvent.bind( this ),
            false
        );

        this.wrapper.addEventListener(
            'mouseleave', 
            this.mouseleaveEvent.bind( this ),
            false
        );

    }

    clickEvent( event ) {

        if ( event.target.classList.contains('wsu-video-player--play') || event.target.parentElement.classList.contains('wsu-video-player--play') ) {

            this.playVideo( event );
        }


    }

    mouseoverEvent( event ) {

        if ( ! this.bgPlayer ) {
            this.loadBg();
        } else {
            this.bgPlayer.playVideo();
        }

    }

    mouseleaveEvent( event ) {

        if ( this.bgPlayer ) {
            window.setTimeout( () => this.bgPlayer.pauseVideo(), 400 );
        } 
    }

    load( args = {} ) {

        let playerID = args.playerId ?? this.playerId;

        this.player = new YT.Player( playerID, {
            height: '390',
            width: '640',
            videoId: this.videoId,
            playerVars: {
                playsinline: 1,
                autoplay: args.autoplay ?? 0,
                mute: args.mute ?? 0,
                rel: 0,
            },
            events: {
              'onReady': args.onReady ?? false,
            //'onStateChange': onPlayerStateChange
            }

            
        });

        this.wrapper.classList.add('wsu-loaded');

    }

    loadBg( args = {} ) {

        let playerID = args.playerId ?? this.backgroundId;

        this.bgPlayer = new YT.Player( playerID, {
            height: '390',
            width: '640',
            videoId: this.videoId,
            playerVars: {
                playsinline: 1,
                autoplay: args.autoplay ?? 1,
                mute: args.mute ?? 1,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                loop: 1
            },
            events: {
              'onReady': args.onReady ?? false,
            //'onStateChange': onPlayerStateChange
            }

            
        });

        this.wrapper.classList.add('wsu-status--background-loaded');

    }

    playVideo( event ) {

        if ( this.player ) {

            this.wrapper.classList.add('wsu-state--playing');

            this.player.playVideo();

        } else {

            this.load( { onReady:this.playVideo.bind(this) });
        }

    }


        
}

class WsuVideoPlayers{


    
        constructor( atts = {} ) {

            this.playerClass  = 'wsu-video-player';
            this.initClass    = 'wsu-initialized';
            this.videoPlayers = [];
    
            this.init();

            console.log( this.videoPlayers );
            
            
        }
    
        init() {
    
            this.bindEvents();

            try {

                this.createPlayers();

                this.loadAPIs();
                
                //this.initPlayers();
                
            } catch (error) {

              console.error('wsu-video-player:' + error );

            }


        }
    
        bindEvents() {
            /*document.addEventListener(
                'scroll', 
                this.scrollEvent.bind( this ),
                false
            );

            window.addEventListener(
                'resize', 
                this.scrollEvent.bind( this ),
                false
            );

            window.addEventListener(
                'load', 
                this.scrollEvent.bind( this ),
                false
            );*/
    
        }

        createPlayers() {

            let players = document.getElementsByClassName( this.playerClass );

            if ( players.length ) {

                [].forEach.call(players, ( player) => {

                    if ( ! player.classList.contains( this.initClass ) ) {

                        player.classList.add( this.initClass );

                        let newPlayer = new WsuVideoPlayer( player );

                        this.videoPlayers.push( newPlayer );

                    }
                });
            }

            this.loadAPIs();

        }

        loadAPIs() {

            let youTubeAPI = false;
            let vimeoAPI   = false;

            this.videoPlayers.forEach( ( player ) => {

                if ( 'youtube' === player.type && ! youTubeAPI ) {

                    this.loadYouTubeAPI();
                    youTubeAPI = true;

                }

            })

        }

        loadYouTubeAPI() {

            let scriptID = 'youtubeiframeapi'

            if ( ! document.getElementById( scriptID ) ) { 
                
                let script = document.createElement('script');

                script.src = "https://www.youtube.com/iframe_api";

                script.id = scriptID;

                script.type = "text/javascript";

                document.getElementsByTagName( "head" )[0].appendChild( script );
                
            }

        }

    }


    
    
    export default WsuVideoPlayers; 