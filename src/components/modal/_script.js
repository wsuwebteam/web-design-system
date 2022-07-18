class WsuModal {
    constructor( atts = {} ) {

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
        let modal = document.querySelector(".wsu-modal")

		document.getElementById("modal-open").onclick = function(){
            modal.style.display = "block"
        }
        document.querySelector(".wsu-modal__close-button").onclick = function(){
            modal.style.display = "none"
        }
        window.onclick = function(e){
            if(e.target == modal){
              modal.style.display = "none"
            }
        }
	}
}

export default WsuModal;