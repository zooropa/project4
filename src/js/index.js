/*import Cart from "./cart";*/

import request from "./bestbuy";


export default class App{
	constructor(){

		this.initBBCall();
		$("#laptop").on("click", () => {
			this.initBBCall("(categoryPath.id=abcat0502000)");
			//
        });
		$("#cellphone").on("click", () => {
			this.initBBCall("(categoryPath.id=pcmcat209400050001)");
			//(categoryPath.id=pcmcat209400050001)
        });
		$("#television").on("click", () => {
			this.initBBCall("(categoryPath.id=abcat0101000)");
			//(categoryPath.id=abcat0101000)
        });
		$("#headphone").on("click", () => {
			this.initBBCall("(categoryPath.id=abcat0204000)");
			//(categoryPath.id=abcat0204000)
		});
	}

	initBBCall(categoryPath) {

		//if {#laptop = click.on "laptop" ()}
		console.log(categoryPath);

		var urlNew = "https://api.bestbuy.com/v1/products(" + categoryPath + ")";

		request({url: urlNew,api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {

			console.log(data);
			//document.getElementById("laptops").innerHTML=(data.products[0].name);
  
    $("#productcontainer")["0"].innerHTML = "";

    var product_counter = 0;
      for (var i=0; i < data.products.length && product_counter < 4; i++) {

      	if(data.products[i].largeImage) {

          var style = " style='background-image: url(" + data.products[i].largeImage + ")'";
          var name = data.products[i].name;
          var salePrice = data.products[i].salePrice;


          $("#productcontainer")["0"].innerHTML += "<div class='pic'"+ style +"><div>"+ name + salePrice + "</div></div>";
          product_counter++;

    }


		}	
			/* fill carosel with products */
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	
}
}

let x = new App;
