// Generated by CoffeeScript 2.4.1
(function () {
  // The root element where everything spawns within
  /*
    r = red
    g = green
    b = blue
  */
  var app, generate, generateNode, injectDom, rand, regenerate;

  app = document.getElementById('app-root');

  generateNode = function (width, r, g, b) {
    var objectNode;
    objectNode = document.createElement('div');
    objectNode.className = 'round container';
    objectNode.style = `border: 0.4rem solid rgb(${r}, ${g}, ${b})`;
    objectNode.style.width = width + 'rem';
    return objectNode;
  };

  injectDom = function (object) {
    return app.appendChild(object);
  };

  rand = function (max, min) {
    return Math.floor(Math.random() * max) + min;
  };

  // Remove the first child and generate a new one
  regenerate = function () {
    app.childNodes[0].remove();
    return generate(2);
  };

  // Generates individual lines
  generate = function (amount) {
    var b, count, g, node, r, results, width;
    count = 1;
    results = [];
    while (count !== amount) {
      width = rand(24, 1);
      r = rand(255, 2);
      g = rand(255, 2);
      b = rand(255, 2);
      node = generateNode(width, r, g, b);
      injectDom(node);
      results.push(count++);
    }
    return results;
  };

  /*
  When the windows first loads,
  the script generates a full set
  of random lines and then removes
  the first child and inject a freshly
  generated one
  */
  generate(rand(12, 6)) && setInterval(regenerate, 250);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7RUFBQTs7Ozs7O0FBQUEsTUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFlBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBOztFQUNBLEdBQUEsR0FBTSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4Qjs7RUFPTixZQUFBLEdBQWUsUUFBQSxDQUFDLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBQTtBQUNiLFFBQUE7SUFBQSxVQUFBLEdBQWEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkI7SUFDYixVQUNFLENBQUMsU0FESCxHQUNlO0lBQ2YsVUFDRSxDQUFDLEtBREgsR0FDVyxDQUFBLHlCQUFBLENBQUEsQ0FBNEIsQ0FBNUIsQ0FBOEIsRUFBOUIsQ0FBQSxDQUFrQyxDQUFsQyxDQUFvQyxFQUFwQyxDQUFBLENBQXdDLENBQXhDLENBQTBDLENBQTFDO0lBQ1gsVUFDRSxDQUFDLEtBQUssQ0FBQyxLQURULEdBQ2lCLEtBQUEsR0FBUTtBQUN6QixXQUFPO0VBUk07O0VBVWYsU0FBQSxHQUFZLFFBQUEsQ0FBQyxNQUFELENBQUE7V0FDVixHQUNFLENBQUMsV0FESCxDQUNlLE1BRGY7RUFEVTs7RUFJWixJQUFBLEdBQU8sUUFBQSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUE7QUFDTCxXQUFPLElBQ0wsQ0FBQyxLQURJLENBRUgsSUFDRSxDQUFDLE1BREgsQ0FBQSxDQUFBLEdBQ2MsR0FIWCxDQUFBLEdBSUM7RUFMSCxFQXRCUDs7O0VBOEJBLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtJQUNYLEdBQ0UsQ0FBQyxVQUFXLENBQUEsQ0FBQSxDQUNaLENBQUMsTUFGSCxDQUFBO1dBR0EsUUFBQSxDQUFTLENBQVQ7RUFKVyxFQTlCYjs7O0VBcUNBLFFBQUEsR0FBVyxRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ1QsUUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQTtJQUFBLEtBQUEsR0FBUTtBQUNSO1dBQU0sS0FBQSxLQUFTLE1BQWY7TUFDRSxLQUFBLEdBQVEsSUFBQSxDQUFLLEVBQUwsRUFBUyxDQUFUO01BQ1IsQ0FBQSxHQUFJLElBQUEsQ0FBSyxHQUFMLEVBQVUsQ0FBVjtNQUNKLENBQUEsR0FBSSxJQUFBLENBQUssR0FBTCxFQUFVLENBQVY7TUFDSixDQUFBLEdBQUksSUFBQSxDQUFLLEdBQUwsRUFBVSxDQUFWO01BQ0osSUFBQSxHQUFPLFlBQUEsQ0FBYSxLQUFiLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCO01BQ1AsU0FBQSxDQUFVLElBQVY7bUJBQ0EsS0FBQTtJQVBGLENBQUE7O0VBRlMsRUFyQ1g7Ozs7Ozs7OztFQXVEQSxRQUFBLENBQVMsSUFBQSxDQUFLLEVBQUwsRUFBUyxDQUFULENBQVQsQ0FBQSxJQUEwQixXQUFBLENBQWEsVUFBYixFQUF5QixHQUF6QjtBQXZEMUIiLCJzb3VyY2VzQ29udGVudCI6WyIjIFRoZSByb290IGVsZW1lbnQgd2hlcmUgZXZlcnl0aGluZyBzcGF3bnMgd2l0aGluXG5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLXJvb3QnKVxuXG4jIyNcbiAgciA9IHJlZFxuICBnID0gZ3JlZW5cbiAgYiA9IGJsdWVcbiMjI1xuZ2VuZXJhdGVOb2RlID0gKHdpZHRoLCByLCBnLCBiKSAtPlxuICBvYmplY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgb2JqZWN0Tm9kZVxuICAgIC5jbGFzc05hbWUgPSAncm91bmQgY29udGFpbmVyJ1xuICBvYmplY3ROb2RlXG4gICAgLnN0eWxlID0gXCJib3JkZXI6IDAuNHJlbSBzb2xpZCByZ2IoI3tyfSwgI3tnfSwgI3tifSlcIjtcbiAgb2JqZWN0Tm9kZVxuICAgIC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3JlbSc7XG4gIHJldHVybiBvYmplY3ROb2RlXG5cbmluamVjdERvbSA9IChvYmplY3QpIC0+XG4gIGFwcFxuICAgIC5hcHBlbmRDaGlsZChvYmplY3QpXG5cbnJhbmQgPSAobWF4LCBtaW4pIC0+XG4gIHJldHVybiBNYXRoXG4gICAgLmZsb29yKFxuICAgICAgTWF0aFxuICAgICAgICAucmFuZG9tKCkgKiBtYXhcbiAgICAgICkgKyBtaW5cblxuIyBSZW1vdmUgdGhlIGZpcnN0IGNoaWxkIGFuZCBnZW5lcmF0ZSBhIG5ldyBvbmVcbnJlZ2VuZXJhdGUgPSAtPlxuICBhcHBcbiAgICAuY2hpbGROb2Rlc1swXVxuICAgIC5yZW1vdmUoKVxuICBnZW5lcmF0ZSgyKVxuXG4jIEdlbmVyYXRlcyBpbmRpdmlkdWFsIGxpbmVzXG5nZW5lcmF0ZSA9IChhbW91bnQpIC0+XG4gIGNvdW50ID0gMVxuICB3aGlsZSBjb3VudCAhPSBhbW91bnRcbiAgICB3aWR0aCA9IHJhbmQoMjQsIDEpXG4gICAgciA9IHJhbmQoMjU1LCAyKVxuICAgIGcgPSByYW5kKDI1NSwgMilcbiAgICBiID0gcmFuZCgyNTUsIDIpXG4gICAgbm9kZSA9IGdlbmVyYXRlTm9kZSh3aWR0aCwgciwgZywgYilcbiAgICBpbmplY3REb20obm9kZSlcbiAgICBjb3VudCsrXG5cbiMjI1xuV2hlbiB0aGUgd2luZG93cyBmaXJzdCBsb2FkcyxcbnRoZSBzY3JpcHQgZ2VuZXJhdGVzIGEgZnVsbCBzZXRcbm9mIHJhbmRvbSBsaW5lcyBhbmQgdGhlbiByZW1vdmVzXG50aGUgZmlyc3QgY2hpbGQgYW5kIGluamVjdCBhIGZyZXNobHlcbmdlbmVyYXRlZCBvbmVcbiMjI1xuZ2VuZXJhdGUocmFuZCgxMiwgNikpIGFuZCBzZXRJbnRlcnZhbCggcmVnZW5lcmF0ZSwgMjUwIClcbiJdfQ==
//# sourceURL=script.coffee
