class WsuVideoFrame {

    constructor( atts = {} ) {

        this.bassClass = 'wsu-video-frame';

        this.init();
        
    }

    init() {

        this.setVideoSize();

        this.bindEvents();

    }

    bindEvents() {
		document.addEventListener(
			'click', 
			( event ) => { this.clickEvents( event) },
			false
		);

        window.addEventListener(
			'resize', 
			() => { this.resize() },
			false
		);
	}

    resize() {
		
		try {

            this.setVideoSize();
			
		} catch (error) {
		  console.error(error);
		}
		
	}

    clickEvents( event ) {

        try {

            if ( event.target.classList.contains( 'wsu-video-frame--action-play' ) ) {

                this.playVideo( event.target.parentElement );
            }

            if ( event.target.classList.contains( this.bassClass + '--action-pause-background' ) || event.target.classList.contains( this.bassClass + '--action-play-background' ) ) {

                this.toggleBackgroundVideo( event.target );
            }

            if ( event.target.classList.contains( 'wsu-video-frame--action-toggle-background' ) ) {

                this.pauseBackgroundVideo( event.target.parentElement );
            }
			
		} catch (error) {
		  console.error(error);
		}

    }


    playVideo( videoWrapper ) {

        if ( ! videoWrapper.hasAttribute('data-play') ) {
            return false;
        }

        let video = videoWrapper.getElementsByClassName('wsu-video-frame__video-background');

        if ( video.length ) {

            video = video[0];

            let videoSrc = videoWrapper.dataset.play;

            video.setAttribute('src', videoSrc );

            video.classList.add('wsu-video-frame__video');

            video.classList.remove('wsu-video-frame__video-background');

        }

    }

    pauseBackgroundVideo( videoWrapper ) {

        let video = videoWrapper.getElementsByClassName('wsu-video-frame__video-background');

        if ( video.length ) {

            video = video[0];

            let player = new Vimeo.Player( video );

            player.pause();

        }
    }

    toggleBackgroundVideo( element ) {

        let videoWrapper = element.parentElement;

        let video = videoWrapper.getElementsByClassName( this.bassClass + '__video-background' );

        if ( ! video.length ) {
            
            console.log('WSU Video Frame: Video Not Found');

            return;

        }

        let player = new Vimeo.Player( video[0] );

        if ( element.classList.contains( this.bassClass + '--action-pause-background') ) {

            element.classList.remove( this.bassClass + '--action-pause-background');

            element.classList.add( this.bassClass + '--action-play-background');

            player.pause();

        } else {

            element.classList.add( this.bassClass + '--action-pause-background');

            element.classList.remove( this.bassClass + '--action-play-background');

            player.play();

        }

    }


    setVideoSize() {

        let videos = document.getElementsByClassName('wsu-video-frame__video-background');

        if ( videos.length > 0 ) {

            Array.from( videos ).forEach( ( video ) => {

                let videoWrapper = video.parentElement;

                if ( this.isWideVideo( videoWrapper ) ) {

                    video.style.width = '100%';
                    video.style.height = ( ( videoWrapper.offsetWidth + 260 ) * 0.5625 ) + 'px';

                } else {

                    video.style.height = '100%';
                    video.style.width = ( videoWrapper.offsetHeight / 0.5625 ) + 'px';

                }

            });

        }

    }

    isWideVideo( videoWrapper ) {

        return ( ( videoWrapper.offsetWidth * 0.5625 ) > videoWrapper.offsetHeight );

    }


    keyDownEvents( event ) {

        try {

            
           
		} catch (error) {
		  console.error(error);
		}

    }







}

export default WsuVideoFrame;  