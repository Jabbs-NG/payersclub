angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('auth/auth.html','<section class="home-page">\n  <div class="container page">\n    <div class="row">\n\n      <div class="col-md-6 offset-md-3 col-xs-12">\n        <h1 class="text-xs-center" ng-bind="::$ctrl.title"></h1>\n        <p class="text-xs-center">\n          <a ui-sref="app.login"\n            ng-show="$ctrl.authType === \'register\'">\n            Have an account?\n          </a>\n          <a ui-sref="app.register"\n            ng-show="$ctrl.authType === \'login\'">\n            Need an account?\n          </a>\n        </p>\n\n        <list-errors errors="$ctrl.errors"></list-errors>\n\n        <form name="auth" ng-submit="$ctrl.submitForm()">\n          <fieldset ng-disabled="$ctrl.isSubmitting">\n\n            <fieldset class="form-group">\n              <input class="form-control form-control-lg"\n                type="text"\n                placeholder="Username"\n                ng-model="$ctrl.formData.username"\n                ng-required="true" />\n            </fieldset>\n\n            <fieldset class="form-group" ng-if="$ctrl.authType === \'register\'">\n              <input class="form-control form-control-lg"\n                type="email"\n                placeholder="Email"\n                ng-model="$ctrl.formData.email"\n                ng-required="true" />\n            </fieldset>\n\n            <fieldset class="form-group">\n              <input class="form-control form-control-lg"\n                type="password"\n                placeholder="Password"\n                ng-model="$ctrl.formData.password"\n                ng-required="true" />\n            </fieldset>\n\n            <fieldset class="form-group" ng-if="$ctrl.authType === \'register\'">\n              <input \n                type="text" \n                class="form-control form-control-lg"\n                placeholder="Phone Number"\n                ng-model="$ctrl.formData.phone"\n                ng-required="true">\n            </fieldset>\n\n            <fieldset class="form-group" ng-if="$ctrl.authType === \'register\'">\n              <input class="form-control form-control-lg"\n                type="text"\n                placeholder="Bank Name"\n                ng-model="$ctrl.formData.bk_name"\n                ng-required="true" />\n            </fieldset>\n\n            <fieldset class="form-group" ng-if="$ctrl.authType === \'register\'">\n              <input class="form-control form-control-lg"\n                type="text"\n                placeholder="Account Name"\n                ng-model="$ctrl.formData.bkaccount_name"\n                ng-required="true" />\n            </fieldset>\n\n            <fieldset class="form-group" ng-if="$ctrl.authType === \'register\'">\n              <input class="form-control form-control-lg"\n                type="text"\n                placeholder="Account Number"\n                ng-model="$ctrl.formData.bkaccount_number"\n                ng-required="true" />\n            </fieldset>\n\n            <button class="btn btn-lg btn-primary pull-xs-right"\n              type="submit"\n              ng-bind="::$ctrl.title"\n              ng-disabled="auth.$error.required">\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n');
$templateCache.put('components/list-errors.html','<ul class="error-messages" ng-show="$ctrl.errors">\n  <div ng-repeat="(field, errors) in $ctrl.errors">\n    <li ng-repeat="error in errors">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n');
$templateCache.put('home/faq.html','');
$templateCache.put('home/home.html','<home-comp show-authed="false"></home-comp>\n<div class="home-page" show-authed="true">\n  <header class="main">\n    <div class="header-content">\n        <div class="header-content-inner">\n            <h1 id="homeHeading">Coming soon</h1>\n            <hr>\n            <p>Stay tuned</p>\n        </div>\n    </div>\n  </header>\n</div>\n');
$templateCache.put('layout/404.html','<section id="splash-blue" class="z-depth-1">\n  <div class="container">\n    <div class="row hide-on-small-only">\n      <div class="col m6 s12 l6">\n        <h1 class="white-text main-title">Page not found</h1>\n      </div>\n    </div>\n  </div>\n</section>');
$templateCache.put('layout/app-view.html','<app-header></app-header>\n\n<div ui-view></div>\n\n<!-- <app-footer></app-footer> -->\n');
$templateCache.put('layout/footer.html','<footer>\n  <div class="footer-nav">\n    <div class="container">\n      <div class="row">\n        <div class="col s12 m3 hide-on-small-only">\n          <p ng-bind="::$ctrl.appName | uppercase"></p>\n          <ul>\n            <li><a href="#">Privacy</a></li>\n            <li><a href="#">Terms of service</a></li>\n          </ul>\n        </div>\n        <div class="col s12 m3 hide-on-small-only">\n\t\t\t\t\t<p>COMPANY</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="/product">Product</a></li>\n\t\t\t\t\t\t\t<li><a href="/blueprints">Blueprints</a></li>\n\t\t\t\t\t\t\t<li><a href="/team">Team</a></li>\n\t\t\t\t\t\t\t<li><a href="/partners">Partners</a></li>\n\t\t\t\t\t\t\t<li><a class="modal-trigger" href="#modal1" target="_blank">Contact Us</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n        <div class="col s12 m3">\n\t\t\t\t\t<p>PLATFORM</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="http://docs.stamplay.com" target="_blank">Docs</a></li>\n\t\t\t\t\t\t\t<li><a href="https://blog.stamplay.com/" target="_blank">Blog</a></li>\n\t\t\t\t\t\t\t<li><a href="/pricing">Pricing</a></li>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li><a href="https://slackinvites.stamplayapp.com" target="_blank">Join us on Slack</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n        <div class="col s12 m3">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href="https://facebook.com/stamplay" target="_blank" style="margin-right:5px;"><i class="fa fa-facebook fa-lg"></i>\n\t\t\t\t\t\t</a><a href="https://twitter.com/stamplay" target="_blank" style="margin-right:5px;"><i class="fa fa-twitter fa-lg"></i></a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n      </div>\n      <span class="attribution">\n        &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n        Made with  <i class="ion-heart"></i> by <a href="http://glassstones.net" target="_blank">Glassstones Solutions</a>.\n      </span>\n    </div>\n  </div>\n</footer>\n');
$templateCache.put('layout/header.html','<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>\n      </button>\n      <a class="navbar-brand page-scroll" ui-sref="app.home"\n          ng-bind="::$ctrl.appName | lowercase"></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav navbar-right" show-authed="false">\n        <li>\n          <a class="page-scroll" ui-sref-active="active" ui-sref="app.login">Login</a>  \n        </li>\n        <li class="nav-item">\n          <a class="nav-link"\n            ui-sref-active="active"\n            ui-sref="app.register">\n            Sign up\n          </a>\n        </li>\n      </ul>\n\n      <!-- Show this for logged in users -->\n      <ul show-authed="true"\n        class="nav navbar-nav navbar-right">\n        <li>\n          <a\n            ui-sref-active="active"\n            ui-sref="app.home">\n            Home\n          </a>\n        </li>\n\n        <li>\n          <a\n            ui-sref-active="active"\n            ui-sref="app.transaction.list">\n            <i class="ion-load-a"></i>&nbsp;Transactions\n          </a>\n        </li>\n\n        <li>\n          <a\n            ui-sref-active="active"\n            ui-sref="app.settings">\n            <i class="ion-gear-a"></i>&nbsp;Settings\n          </a>\n        </li>\n\n        <li>\n          <a\n            ui-sref-active="active"\n            ui-sref="app.profile.main({ username: $ctrl.currentUser.username})">\n            <img ng-src="{{$ctrl.currentUser.image}}" class="user-pic" />\n            {{ $ctrl.currentUser.username }}\n          </a>\n        </li>\n\n      </ul>\n\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n\n');
$templateCache.put('components/home/home.html','<header>\n    <div class="header-content">\n        <div class="header-content-inner">\n            <h1 id="homeHeading">Your Favorite P2P Donation Website</h1>\n            <hr>\n            <p>Start earning fantastic returns on your donations with FXChange Club, no strings attached!</p>\n            <a ui-sref="app.register" class="btn btn-primary btn-xl page-scroll">Register</a>\n        </div>\n    </div>\n</header>\n\n<section class="bg-primary" id="about">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 col-lg-offset-2 text-center">\n                <h2 class="section-heading">We\'ve got what you need!</h2>\n                <hr class="light">\n                <p class="text-faded">FXChange Club is a peer-to-peer giving and receiving platform for members, to help fellow members in an efficient way. By using this scheme, members give and receive from each other.</p>\n                <a ui-sref="app.register" class="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id="services">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12 text-center">\n                <h2 class="section-heading">At Your Service</h2>\n                <hr class="primary">\n            </div>\n        </div>\n    </div>\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-3 col-md-6 text-center">\n                <div class="service-box">\n                    <i class="fa fa-4x fa-diamond text-primary sr-icons"></i>\n                    <h3>Sturdy P2P Network</h3>\n                    <p class="text-muted">Donate and earn 100% of your initial investment.</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-6 text-center">\n                <div class="service-box">\n                    <i class="fa fa-4x fa-paper-plane text-primary sr-icons"></i>\n                    <h3>Ready For You</h3>\n                    <p class="text-muted">Receive earnings in under 6 hours!</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-6 text-center">\n                <div class="service-box">\n                    <i class="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>\n                    <h3>Up to Date</h3>\n                    <p class="text-muted">We promptly ban cyber-beggers and non-compliant users.</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-6 text-center">\n                <div class="service-box">\n                    <i class="fa fa-4x fa-lock text-primary sr-icons"></i>\n                    <h3>Made Tough</h3>\n                    <p class="text-muted">Our site is secured so your personal information is safe!</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id="portfolio">\n    <div class="container">\n        <div class="row">\n            <div class="block">\n\n                <div class="col-xs-12 col-sm-6 col-md-3">\n                        <ul class="pricing p-green">\n                            <li>\n                                <img src="img/settings_g.svg" alt="">\n                                <big>Starter</big>\n                            </li>\n                            <li>2:1 Matrix</li>\n                            <li>Auto Assign</li>\n                            <li>Referral Bonus</li>\n                            <li>\n                                <h3>&#8358;10,000</h3>\n                                <span>Return Investment</span>\n                            </li>\n                            <li>\n                                <a ui-sref="app.register" class="btn">Join Now</a>\n                            </li>\n                        </ul>\n                </div>\n\n                <div class="col-xs-12 col-sm-6 col-md-3">\n                        <ul class="pricing p-yel">\n                            <li>\n                                <img src="img/settings_y.svg" alt="">\n                                <big>Basic</big>\n                            </li>\n                            <li>2:1 Matrix</li>\n                            <li>Auto Assign</li>\n                            <li>Referral Bonus</li>\n                            <li>\n                                <h3>&#8358;20,000</h3>\n                                <span>Return Investment</span>\n                            </li>\n                            <li>\n                                <a ui-sref="app.register" class="btn">Join Now</a>\n                            </li>\n                        </ul>\n                </div>\n\n                <div class="col-xs-12 col-sm-6 col-md-3">\n                        <ul class="pricing p-red">\n                            <li>\n                                <img src="img/settings_r.svg" alt="">\n                                <big>Ultima</big>\n                            </li>\n                            <li>2:1 Matrix</li>\n                            <li>Auto Assign</li>\n                            <li>Referral Bonus</li>\n                            <li>\n                                <h3>&#8358;50,000</h3>\n                                <span>Return Investment</span>\n                            </li>\n                            <li>\n                                <a ui-sref="app.register" class="btn">Join Now</a>\n                            </li>\n                        </ul>\n                </div>\n\n                <div class="col-xs-12 col-sm-6 col-md-3">\n                        <ul class="pricing p-blue">\n                            <li>\n                                <img src="img/settings_b.svg" alt="">\n                                <big>Vip</big>\n                            </li>\n                            <li>2:1 Matrix</li>\n                            <li>Auto Assign</li>\n                            <li>Referral Bonus</li>\n                            <li>\n                                <h3>&#8358;100,000</h3>\n                                <span>Return Investment</span>\n                            </li>\n                            <li>\n                                <a ui-sref="app.register" class="btn">Join Now</a>\n                            </li>\n                        </ul>\n                </div>\n\n\n            </div><!-- /block -->\n        </div>\n    </div>\n</section>\n\n<aside class="bg-dark">\n    <div class="container text-center">\n        <div class="call-to-action">\n            <h2>Get Started Now!</h2>\n            <a ui-sref="app.register" class="btn btn-default btn-xl sr-button">Register</a>\n        </div>\n    </div>\n</aside>\n\n<section id="contact">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-8 col-lg-offset-2 text-center">\n                <h2 class="section-heading">Let\'s Get In Touch!</h2>\n                <hr class="primary">\n                <p>Ready to start donating? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n            </div>\n            <div class="col-lg-4 col-lg-offset-2 text-center">\n                <i class="fa fa-phone fa-3x sr-contact"></i>\n                <p>090-3736-6431</p>\n            </div>\n            <div class="col-lg-4 text-center">\n                <i class="fa fa-envelope-o fa-3x sr-contact"></i>\n                <p><a href="mailto:fxchange.club@gmail.com">fxchange.club@gmail.com</a></p>\n            </div>\n        </div>\n    </div>\n</section>');}]);