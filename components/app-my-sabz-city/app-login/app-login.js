/*
Copyright 2017 SabzCity

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import "../polymer/polymer.html"
import "../paper-input/paper-input.html"
import "../paper-button/paper-button.html"
import "../neon-animation/web-animations.html"
import "../paper-dropdown-menu/paper-dropdown-menu.html"
import "../paper-listbox/paper-listbox.html"
import "../iron-icon/iron-icon.html"
import "../paper-dropdown-menu/paper-dropdown-menu.html"
import "../paper-item/paper-item.html"
import "../paper-checkbox/paper-checkbox.html"

import "../SabzCityElements/a-card/a-card.html"
import "../SabzCityElements/a-social-btn/a-social-btn.html"
import "../SabzCityElements/a-sabzcity-link/a-sabzcity-link"

import materialDesignTemplate from './material-design.html'

export class AppLogin extends Polymer.Element {
	static get is() { return 'app-login' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			isLoginFirstStep: {
				type: Boolean,
				value: true
			}
		}
	}
	handleNextButtonClick() {
		this.isLoginFirstStep = false;
	}
}

customElements.define(AppLogin.is, AppLogin);
