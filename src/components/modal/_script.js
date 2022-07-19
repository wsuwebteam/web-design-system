class WsuModal {
    constructor( atts = {} ) {

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
        let modal = document.querySelector(".wsu-modal")
        let openButton = document.getElementById("modal-open");
        let closeButton = document.querySelector(".wsu-modal__close-button");

		openButton.onclick = function(){
            modal.classList.toggle("wsu-modal__closed");
            //document.body.setAttribute("overflow", "hidden");
            document.body.classList.toggle("modal-open");
            document.getElementById("modalTitle").focus();

            //TODO: set focus to modal
            //set screen reader focus
            //prevent scroll outside modal
        }
        closeButton.onclick = function(){
            modal.classList.toggle("wsu-modal__closed");
            //document.body.setAttribute("overflow", "scroll");
            document.body.classList.toggle("modal-open");
            //release focus/scroll locks
        }
        window.onclick = function(e){
            if(e.target == modal){
                modal.classList.toggle("wsu-modal__closed");
                //document.body.setAttribute("overflow", "scroll");
                document.body.classList.toggle("modal-open");
            }
        }
	}
}

export default WsuModal;