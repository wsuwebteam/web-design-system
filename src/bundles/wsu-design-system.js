//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsunavigationSite from '../modules/deprecated_navigation-site/_navigation-site';
import WsuHeaderGlobal from "../modules/header-global/_header-global";
import WsuAccordion from "../components/experimental_accordion/script";
import WsuCollapsable from "../components/experimental_collapsable/script";
import WsuMenu from "../components/menu/script";
import WsuNavigationSiteVertical from "../modules/navigation-site-vertical/script";





const wsu = {
    verticalNavitation: new WsunavigationSite(),
    navigationSiteVertical: new WsuNavigationSiteVertical(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
    menu: new WsuMenu(),
} 