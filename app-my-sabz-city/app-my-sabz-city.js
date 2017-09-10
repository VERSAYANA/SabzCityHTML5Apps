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

import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'

import "../app-route/app-route.html"
import "../app-route/app-location.html"
import "../iron-pages/iron-pages.html"

import "/node_modules/@sabzcity/SabzCityElements/m-header/m-header.js"
import "/node_modules/@sabzcity/SabzCityElements/a-public-library/a-public-library.js"

import "./app-login/app-login.js"
import "./app-register/app-register.js"
import "./app-main/app-main.js"
import "./app-aboutme/app-aboutme.js"
import "./app-security/app-security.js"
import "./app-recover/app-recover.js"
import "./app-groups/app-groups.js"
import "./app-ouath/app-ouath.js"

import materialDesignTemplate from './material-design.html'

import manifest from './manifest.json'
// App Manifest Data
export const appManifest = manifest

export class AppMySabzCity extends PolymerElement {
	static get is() { return 'app-my-sabz-city' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			menuData: {
				type: Array,
				value: [{
					name: "خانه",
					url: "/"
				}, {
					name: "اطلاعات من",
					url: "/aboutme/"
				}, {
					name: "ثبت نام",
					url: "/register/"
				}, {
					name: "تنظیمات امنیتی",
					url: "/security/"
				}, {
					name: "تغییر زبان",
					url: "/language/"
				}, {
					name: "بازیابی",
					url: "/recover/"
				}, {
					name: 'گروه ها',
					url: '/groups/'
				}, {
					name: 'دسترسی برنامه',
					url: '/ouath/'
				}]
			}

		}
	}
	static get observers() {
		return [
			'_onRoutePathChanged(path)'
		]
	}
	_onRoutePathChanged(path) {
		// If we do not have an initial URL, we redirect to /search
		if (this.subrouteData) {
			if (this.subrouteData.pages == "") {
				if (activeUser.ID == "Guest") {
					let href = activeUser.distinctions.Language + "/login";
					href += "?" + "r" + "=" + "main";
					const goUrl = new URL(href, window.location.origin);
					window.history.pushState(window.history.state, "login", goUrl);
					window.dispatchEvent(new PopStateEvent('popstate', {
						bubbles: false,
						cancelable: false,
						state: window.history.state
					}));
					window.dispatchEvent(new CustomEvent('location-changed'));
				}
			}
		}
	}
	ready() {
		super.ready();
		console.log(this.subrouteData);
	}
	connectedCallback() {
		super.connectedCallback();
		console.log("safe amade");
	}
}

customElements.define(AppMySabzCity.is, AppMySabzCity)
