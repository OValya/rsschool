import Control from '../common/control'

// <div class="container">
//   <input type="range" min="0" step="1" max="10" value="3">
//   <input type="range" min="0" step="1" max="10" value="7">
// </div>


export default class DoubleRange extends Control{
  constructor(parentNode:HTMLElement){
    super(parentNode)

  }
}