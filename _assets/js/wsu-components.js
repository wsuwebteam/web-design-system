class WsuComponents {
    constructor() {
    this.components = [];
    }
    
    add( componentSlug, componentObj ) {
        if ( componentObj ) {
            this.components.push( { slug: componentSlug, component: componentObj } );
        }
    } 
}

export default WsuComponents; 
