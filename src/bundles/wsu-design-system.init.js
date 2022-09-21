// Add has-js class to root html tag
document.documentElement.classList.add('wsu-has-js');

import hasReducedMotion from '../../_assets/js/partials/hasReducedMotion';

if ( ! hasReducedMotion() ) {
    document.documentElement.classList.add('wsu-reduce-motion');
}