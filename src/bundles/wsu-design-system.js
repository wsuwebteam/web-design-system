//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import WsuMenuToggle from "../components/menu-toggle/_menu-toggle";
import WsunavigationSite from '../modules/navigation-site/_navigation-site';
import WsuHeaderGlobal from "../components/header-global/_header-global";
import WsuAccordion from "../components/accordion/script";
import WsuCollapsable from "../components/collapsable/script";





const wsu = {
    verticalNavitation: new WsunavigationSite(),
    menuToggle: new WsuMenuToggle(),
    headerGlobal: new WsuHeaderGlobal(),
    accordion: new WsuAccordion(),
    collapsable: new WsuCollapsable(),
}