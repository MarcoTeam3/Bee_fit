import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Home extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid slide-perso">
          <div class="row  mx-auto no-padding-b">
            <div class="col-md-10">
              <div class="carousel  mx-auto slide" id="carousel-786012">
                <ol class="carousel-indicators">
                  <li
                    data-slide-to="0"
                    data-target="#carousel-786012"
                    class="active"
                  ></li>
                  <li data-slide-to="1" data-target="#carousel-786012"></li>
                  <li data-slide-to="2" data-target="#carousel-786012"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap First"
                      src="../../static/frontend/images/templatee.png"
                    />
                    <div class="carousel-caption">
                      <h4>First Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap Second"
                      src="../../static/frontend/images/templateFit.png"
                    />
                    <div class="carousel-caption">
                      <h4>Second Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap Third"
                      src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                    />
                    <div class="carousel-caption">
                      <h4>Third Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <a
                  class="carousel-control-prev"
                  href="#carousel-786012"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>{" "}
                  <span class="sr-only">Previous</span>
                </a>{" "}
                <a
                  class="carousel-control-next"
                  href="#carousel-786012"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>{" "}
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-md-2 mobile-img">
              <img
                src="../../static/frontend/images/app-exemple.png"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center"> Nos services</h2>
              <p class="text-center">
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <div class="row p-top-perso">
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-apple-alt w-100"></i>
                      Aide nutritive
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>
                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-search w-100"></i>
                      Recherche d'aliments
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>

                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-utensils w-100"></i>
                      Recettes
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>

                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-dumbbell w-100"></i>
                      Programme fitness
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>

                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rowcentrale" class="container-fluid text-light">
          <div class="container padding-interne-perso">
            <div class="row no-padding-b">
              <div class="col-md-12">
                <div class="row no-padding-b align-items-center">
                  <div class="col-md-6 ">
                    <h3>Lorem</h3>
                    <p class="text-left">
                      Lorem ipsum dolor sit amet,{" "}
                      <strong>consectetur adipiscing elit</strong>. Aliquam eget
                      sapien sapien. Curabitur in metus urna. In hac habitasse
                      platea dictumst. Phasellus eu sem sapien, sed vestibulum
                      velit. Nam purus nibh, lacinia non faucibus et, pharetra
                      in dolor. Sed iaculis posuere diam ut cursus.{" "}
                    </p>
                    <button type="button" class="btn btn-primary">
                      Button
                    </button>
                  </div>
                  <div class="col-md-6">
                    <div class="row no-padding-b p-b-img">
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                    </div>
                    <div class="row no-padding-b">
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row padding-interne-perso">
            <div class="col-md-12 padding-interne-perso">
              <div class="col-md-12 padding-interne-perso text-center">
                <h2>
                  {" "}
                  <i class="fas fa-lock"></i> Nos services Premium
                </h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.
                </p>
                <a class="btn" href="#">
                  View details »
                </a>
              </div>
              <p></p>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <img
                    src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                  <button
                    type="button"
                    class="btn btn-md btn-block btn-primary"
                  >
                    Devenir membre
                  </button>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-apple-alt w-100"></i>
                      Votre consommation
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-apple-alt w-100"></i>
                      Suivi de poids
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rownous"
          class="container-fluid text-light padding-interne-perso"
        >
          <div class="container text-light">
            <div class="row no-padding-b">
              <div class="col-md-12 text-center">
                <h3 class="text-center">Qui sommes nous ?</h3>
                <p>
                  Lorem ipsum dolor sit amet,{" "}
                  <em>
                    Morbi commodo sodales nisi id sodales. Proin consectetur,
                    nisi id commodo imperdiet, metus nunc consequat lectus, id
                    bibendum diam velit et dui.
                  </em>{" "}
                  Proin massa magna, vulputate nec bibendum nec, posuere nec
                  lacus.{" "}
                </p>
                <div class="row no-padding-b padding-interne-perso">
                  <div class="col-md-3 hoverhead">
                      <img onClick={() =>
                        window.open("https://www.linkedin.com/in/guilhem-lacombe-037823144/", "_blank")
                      }
                      src="../../static/frontend/images/guilhem.png"
                      alt="Bootstrap Image Preview"
                      class="rounded-circle mw-100 img-fluid headphoto"
                    /><p class="hideme">Guilhem</p>
                  </div>
                  <div class="col-md-3 hoverhead">
                     <img onClick={() =>
                        window.open("https://www.linkedin.com/in/aurore-louche/", "_blank")
                      }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/aurore.png"
                      class="rounded-circle mw-100 img-fluid headphoto "
                    /><p class="hideme">Aurore</p>
                  </div>
                   <div class="col-md-3 hoverhead">
                      <img onClick={() =>
                        window.open("https://www.linkedin.com/in/marco-di-fazio-3528a8104/", "_blank")
                      }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/marco.png"
                      class="rounded-circle headphoto"
                    /><p class="hideme">Marco</p>
                  </div>
                  <div class="col-md-3 hoverhead">
                  <img onClick={() =>
                        window.open("https://www.linkedin.com/in/sylvainneves/", "_blank")
                      }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/sylvain.png"
                      class="rounded-circle headphoto"
                    /><p class="hideme">Sylvain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
