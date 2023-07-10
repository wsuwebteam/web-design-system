class WsuActionCookie {
  
    constructor() {
        this.init();
    }
    
    init() {
        if ( 'undefined' !== window['wsuEvents'] ) {
            window['wsuEvents'].addEventClass( 'wsu-action-cookie-set','click', 'wsu-action-cookie--set', this.setCookie.bind(this) );
        }
    }
    
    setCookie( element, event ) {

        console.log('fire');

        if ( element.hasAttribute('data-cookie-name') && element.hasAttribute('data-cookie-value') ) {

            let cName = element.dataset.cookieName;
            let cValue = element.dataset.cookieValue;

            document.cookie = `${cName}=${cValue}`;

            console.log( `${cName}=${cValue}` );

        }

    }
  }

  export default WsuActionCookie; 