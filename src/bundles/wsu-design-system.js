//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsuMenuToggle from "../components/menu-toggle/_menu-toggle";
import WsunavigationSite from '../modules/deprecated_navigation-site/_navigation-site';
import WsuHeaderGlobal from "../modules/header-global/_header-global";
import WsuAccordion from "../components/experimental_accordion/script";
import WsuCollapsable from "../components/experimental_collapsable/script";
import WsuSubmenuToggle from "../components/submenu-toggle/_script";
import WsuMenu from "../components/menu/_script";
import WsuNavigationSiteVertical from "../modules/experimental_navigation-site-vertical/_script";





const wsu = {
    verticalNavitation: new WsunavigationSite(),
    navigationSiteVertical: new WsuNavigationSiteVertical(),
    menuToggle: new WsuMenuToggle(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
    submenuToggle: new WsuSubmenuToggle(),
    menu: new WsuMenu(),
} 