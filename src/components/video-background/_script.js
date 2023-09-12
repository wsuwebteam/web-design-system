

class WsuBackgroundVideo {

    constructor( wsuComponents, eventHandler) {

        this.wsuComponents = wsuComponents;
        this.eventHandler = eventHandler;

        this.wrapperClass = 'wsu-video-background';
        this.videoClass = 'wsu-video-background__video';

        this.initializeClass = 'wsu-video-background--initialized';

        this.init();
        
    }


    init() {

        this.eventHandler.addEvent( { type: 'load', callback: this.intitialize.bind( this ) });

        this.eventHandler.addEvent( { type: 'click', hasClass:'wsu-video-background__ui', callback: this.toggleVideo.bind( this ) });

       
    }

    intitialize() {

        let bodyTag = document.querySelector('body');

        if ( 800 < bodyTag.getBoundingClientRect().width ) {

            let bgVideos = document.querySelectorAll(`.${this.wrapperClass}:not(.${this.initializeClass})`);

            if ( bgVideos ) {

                bgVideos.forEach( ( player ) => this.activatePlayer( player )  );

            }

        }

    }

    activatePlayer( player ) {

        let videoObj = player.getElementsByClassName( this.videoClass );

        if ( videoObj.length ) {

            let video = videoObj[0];

            let videoSource = ( video.hasAttribute('data-source') ) ? video.dataset.source : false;

            if ( videoSource ) {

                let source = document.createElement( 'source' );

                source.setAttribute( 'src', videoSource );
                source.setAttribute( 'type', 'video/mp4' );

                videoObj[0].appendChild( source );

            }

        }

        player.classList.add( this.initializeClass );

    }

    toggleVideo( element, event ) {

        let parentElement = element.closest( `.${this.wrapperClass}` );

        if ( parentElement ) {

            let videoPlayer = parentElement.querySelector(`.${this.videoClass}`);

            try {

                if ( videoPlayer.paused ) {

                    videoPlayer.play();

                    element.setAttribute('aria-label', 'Pause Video');

                } else {

                    videoPlayer.pause();

                    element.setAttribute('aria-label', 'Play Video');

                }

            } catch (error) {
                
                console.log( error );

            }

            

        }

    }

}    
    
export default WsuBackgroundVideo; 