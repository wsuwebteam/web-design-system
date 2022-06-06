//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsunavigationSite from '../modules/deprecated_navigation-site/_navigation-site';
import WsuHeaderGlobal from "../modules/header-global/_header-global";
import WsuAccordion from "../components/accordion/_script";
import WsuCollapsable from "../components/experimental_collapsable/script";
import WsuMenu from "../components/menu/_script";
import WsuNavigationSiteVertical from "../modules/navigation-site-vertical/_script";
import WsuAnimateSubmenuSlideVertical from '../animations/slide/_script';
import WsuNavigationSiteHorizontal from '../components/experimental_navigation-horizontal/_script';
import WsuVideoFrame from '../components/experimental_video-frame/_script';
import WsuButton from '../components/button/_script';
import WsuStickyBox from '../components/sticky-box/_script';
import WsuAnchorMenu from '../components/anchor-menu/_script';
import WsuModal from '../modules/modal/_script';
import WsuModal from '../components/modal/_script';





const wsu = {
    verticalNavitation: new WsunavigationSite(),
    navigationSiteVertical: new WsuNavigationSiteVertical(),
    navigationSiteHorizontal: new WsuNavigationSiteHorizontal(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
    menu: new WsuMenu(),
    button: new WsuButton(),
    animations: {
        //submenuSlideVertical: new WsuAnimateSubmenuSlideVertical(),
    },
    videoFrame: new WsuVideoFrame(),
    stickyBox: new WsuStickyBox(),
    wsuAnchorMenu: new WsuAnchorMenu(),
    modal: new WsuModal(),
}
