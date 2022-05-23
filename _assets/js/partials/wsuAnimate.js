const wsuAnimateSlideDown = ( element, args ) => {
    let {
        duration = 300,
        extra = '20',
    } = args;

    let timer = false;

    element.style.maxHeight = ( element.scrollHeight + parseInt(extra) + 'px' );

    timer = setTimeout( () => {

        element.style.maxHeight = '';

    }, duration );

}

const wsuAnimateSlideUp = ( element, args ) => {
    let {
        duration = 300,
        extra = '20',
        callback = false,
    } = args;

    let timer = false;
    let delayTimer = false;

    element.style.maxHeight = ( element.scrollHeight + parseInt(extra) + 'px' );

    delayTimer = setTimeout( () => {

        element.style.maxHeight = '0';

    }, 15 );

    timer = setTimeout( () => {

        element.style.maxHeight = '';

    }, duration );

}

export { wsuAnimateSlideDown, wsuAnimateSlideUp };
