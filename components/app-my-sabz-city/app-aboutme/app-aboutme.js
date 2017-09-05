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
import "../iron-icons/editor-icons.html"
import "../iron-icon/iron-icon.html"
import "../iron-icons/av-icons.html"
import "../paper-input/paper-input.html"
import "../paper-toggle-button/paper-toggle-button.html"
import "../mat-elements/mat-list.html"
import "../mat-elements/mat-item.html"
import "../mat-elements/mat-dropdown.html"
import "../mat-elements/mat-option.html"
import "../mat-elements/mat-icons/notification.html"
import "../mat-elements/mat-icons/communication.html"
import "../mat-elements/mat-icons/device.html"
import "../mat-elements/mat-icons/maps.html"
import "../mat-elements/mat-icons.html"

import "../SabzCityElements/a-editable-card/a-editable-card.html"
import "../SabzCityElements/a-sabzcity-link/a-sabzcity-link.html"

import materialDesignTemplate from './material-design.html'

export class AppAboutMe extends Polymer.Element {
	static get is() { return 'app-aboutme' }
	static get template() { return materialDesignTemplate }
}

customElements.define(AppAboutMe.is, AppAboutMe)
