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
import "../app-route/app-route.html"
import "../app-route/app-location.html"
import "../iron-pages/iron-pages.html"

import "../SabzCityElements/m-header/m-header.html"

import "./app-life/app-life.js"
import "./app-main/app-main.js"

import materialDesignTemplate from './material-design.html'

export class AppSabzCity extends Polymer.Element {
	static get is() { return 'app-sabz-city' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			menuData: {
				type: Array,
				value: [{
					name: "دستیار شخصی",
					url: "/"
				}, {
					name: "زندگی در یک نگاه",
					url: "/life/"
				}]
			}
		}
	}
}

customElements.define(AppSabzCity.is, AppSabzCity)