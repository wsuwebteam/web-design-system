//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsuActionExpanded from '../actions/expanded/_script';
import WsuActionCookie from '../actions/cookies/_script';
import WsunavigationSite from '../modules/deprecated_navigation-site/_navigation-site';
import WsuHeaderGlobal from "../modules/header-global/_header-global";
import WsuAccordion from "../components/accordion/_script";
import WsuAnimate from '../components/animate/_script';
import WsuCollapsable from "../components/experimental_collapsable/script";
import WsuMenu from "../components/menu/_script";
import WsuMenuCollapse from "../components/menu-collapse/_script";
import WsuNavigationSiteVertical from "../modules/navigation-site-vertical/_script";
import WsuMobileMenu from '../modules/mobile-menu/_script';
//import WsuModal from '../components/modal/_script';
import WsuAnimateSubmenuSlideVertical from '../animations/slide/_script';
import WsuNavigationSiteHorizontal from '../components/experimental_navigation-horizontal/_script';
import WsuVideoFrame from '../components/experimental_video-frame/_script';
import WsuButton from '../components/button/_script';
import WsuStickyBox from '../components/sticky-box/_script';
import WsuSiteSearch from '../modules/site-search/_script-v3';
import WsuAnchorMenu from '../components/anchor-menu/_script';
import WsuBackgroundSlider from '../components/background-slider/_script';
import WsuUtilityPanel from '../components/utility-panel/_script';
import WsuNavigationVertical from '../modules/navigation-vertical/_script';
import WsuSlideInPanel from '../components/slide-in-panel/_script';
import WsuVideoPlayers from '../components/video-player/_script';
import WsuBackToTop from '../components/back-to-top/_script';
import WsuNavSiteHoriz from '../modules/nav-site-horiz/_script';
import WsuBackgroundVideo from '../components/video-background/_script';


//import '../components/slider-frame/_script';
import '../modules/hero-slider/_script';
import '../modules/events-list/_script';
import '../modules/events-card/_script';

import '../modules/carousel/_script';
import WsuComponents from '../../_assets/js/wsu-components';
import WsuEvents from '../../_assets/js/wsu-events';

let wsuComponents = new WsuComponents();
let wsuEvents = new WsuEvents();

window['wsuComponents'] = wsuComponents;
window['wsuEvents']     = wsuEvents;

window['wsuComponents'].add( 'nav-site-horiz', new WsuNavSiteHoriz() );
window['wsuComponents'].add( 'navigation-vertical', new WsuNavigationVertical() );
window['wsuComponents'].add( 'wsu-action-expanded', new WsuActionExpanded() );
window['wsuComponents'].add( 'wsu-action-cookie', new WsuActionCookie() );
window['wsuComponents'].add( 'wsu-background-video', new WsuBackgroundVideo( wsuComponents, wsuEvents ) );




const wsu = {
    animate: new WsuAnimate(),
    verticalNavitation: new WsunavigationSite(),
    mobileMenu: new WsuMobileMenu(),
    navigationSiteVertical: new WsuNavigationSiteVertical(),
    navigationSiteHorizontal: new WsuNavigationSiteHorizontal(),
    backgroundSlider: new WsuBackgroundSlider(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
    wsuMenuCollapse: new WsuMenuCollapse,
    menu: new WsuMenu(),
    //modal: new WsuModal(),
    button: new WsuButton(),
    animations: {
        //submenuSlideVertical: new WsuAnimateSubmenuSlideVertical(),
    },
    videoFrame: new WsuVideoFrame(),
    siteSearch: new WsuSiteSearch(),
    stickyBox: new WsuStickyBox(),
    slideInPanel: new WsuSlideInPanel(),
    wsuAnchorMenu: new WsuAnchorMenu(),
    utilityPanel: new WsuUtilityPanel(),
    videoPlayers: new WsuVideoPlayers(),
    backToTop: new WsuBackToTop(),
}
