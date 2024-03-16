class Parallax {
constructor(elements, options = {}) {
this.parallaxLayers = Array.from(elements).map((element)=> (
  new Parallax.Layer(element, options)
  ));
}
destroy(){

}
}
Parallax.Layer = class {
constructor(element, options = {}) {
this.containerNode = element;
this.childrenNodes = element.children;

this.depths =Array.from(this.childrenNodes).map((child) =>(
  child.dataset.depth ? Number( child.dataset.depth):0
  ));
}
}