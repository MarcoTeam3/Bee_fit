import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Fitness extends Component {
  render() {
    return (
      <div>
          <div class="container-fluid">
          <div class="container">
	<div class="row p-top-perso">
		<div class="col-md-12">
			<blockquote class="blockquote">
				<p class="mb-0 text-center">
					Du sport tu feras, bonne tu seras.
				</p>
				<footer class="blockquote-footer text-center">
					Marco
				</footer>
			</blockquote>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4">
    <div class="col-md-12 border card-perso">
			 <img onClick={() =>
                        window.open("../../static/frontend/images/Jour1-PAGE1.gif", "_blank")
                      } src="../../static/frontend/images/Jour1-PAGE1.gif"
                class="img-fluid onhover"
                alt="Responsive image" />
			<h2>
				Jour 1
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a class="btn" href="#">Voir details »</a>
			</p>
		</div>
    </div>
		<div class="col-md-4">
    <div class="col-md-12 border card-perso">
		<img onClick={() =>
                        window.open("../../static/frontend/images/Jour1-PAGE1.gif", "_blank")
                      } src="../../static/frontend/images/Jour1-PAGE1.gif"
                class="img-fluid onhover"
                alt="Responsive image" />
			<h2>
				Jour 2
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a class="btn" href="#">Voir details »</a>
			</p>
      </div>
		</div>
		<div class="col-md-4">
    <div class="col-md-12 border card-perso">
			<img onClick={() =>
                        window.open("../../static/frontend/images/Jour1-PAGE1.gif", "_blank")
                      } src="../../static/frontend/images/Jour1-PAGE1.gif"
                class="img-fluid onhover"
                alt="Responsive image" />
			<h2>
				Jour 3
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a class="btn" href="#">Voir details »</a>
			</p>
      </div>
		</div>
	</div>
  </div>
</div>
      </div>
    );
  }
}

export default Fitness;
