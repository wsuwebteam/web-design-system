//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsuMenuToggle from "../components/menu-toggle/_menu-toggle";
import WsuNavigationSiteVertical from '../modules/navigation-site-vertical/_navigation-site-vertical';
import WsuHeaderGlobal from "../components/header-global/_header-global";
import WsuAccordion from "../components/accordion/script";
import WsuCollapsable from "../components/collapsable/script";





const wsu = {
    verticalNavitation: new WsuNavigationSiteVertical(),
    menuToggle: new WsuMenuToggle(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
}