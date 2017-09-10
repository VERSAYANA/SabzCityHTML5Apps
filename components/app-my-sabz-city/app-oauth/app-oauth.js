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

import { Element as PolymerElement } from '../@polymer/polymer/polymer-element.js'

import "../paper-listbox/paper-listbox.html"
import "../paper-item/paper-item.html"
import "../paper-item/paper-item-body.html"
import "../paper-item/paper-icon-item.html"
import "../paper-button/paper-button.html"
import "../paper-icon-button/paper-icon-button.html"

import "../SabzCityElements/a-card/a-card.html"
import "../SabzCityElements/a-social-btn/a-social-btn.html"
import "../SabzCityElements/a-sabzcity-link/a-sabzcity-link"

import materialDesignTemplate from './material-design.html'

export class AppOuath extends PolymerElement {
	static get is() { return 'app-ouath' }
	static get template() { return materialDesignTemplate }
	static get properties() {
		return {
			accesses: Array
		}
	}
	connectedCallback() {
		super.connectedCallback();
		const getAccessesJSON = (callback) => {
			const xhr = new XMLHttpRequest();
			xhr.overrideMimeType("application/json");
			xhr.open('GET', './components/app-my-sabz-city/api-test/accesses.json', true);
			xhr.responseType = 'text';
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4 && xhr.status == "200") {
					callback(xhr.responseText);
				}
			};
			xhr.send();
		};
		getAccessesJSON(data => {
			const accesses = JSON.parse(data);
			this.accesses = accesses;
		})
	}
	handleRemove(e) {
		const title = e.target.dataset.title;
		console.log(e.target);
		console.log('title is', title);
		console.log(this.accesses.filter(access => access.title !== title));
		this.accesses = this.accesses.filter(access => access.title !== title);
	}
}

customElements.define(AppOuath.is, AppOuath);