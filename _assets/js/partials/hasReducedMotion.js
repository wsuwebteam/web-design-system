const hasReducedMotion = () => {

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

}

export default hasReducedMotion;