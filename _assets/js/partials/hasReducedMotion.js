const hasReducedMotion = () => {

    console.log( window.matchMedia('(prefers-reduced-motion: reduce)').matches )

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

}

export default hasReducedMotion;