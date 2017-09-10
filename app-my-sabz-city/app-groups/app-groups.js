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

import "../paper-search/paper-search.html"
import "../paper-dialog/paper-dialog.html"
import "../paper-toggle-button/paper-toggle-button.html"
import "../mat-elements/mat-list.html"
import "../mat-elements/mat-item.html"
import "../mat-elements/mat-avatar.html"
import "../mat-elements/mat-icons.html"
import "../mat-elements/mat-icons/social.html"
import "../mat-elements/mat-icons/places.html"
import "../mat-elements/mat-icons/action.html"
import "../mat-elements/mat-icons/image.html"
import "../mat-elements/mat-icons/hardware.html"

import "../SabzCityElements/a-card/a-card.html"
import "../SabzCityElements/a-sabzcity-link/a-sabzcity-link"

import materialDesignTemplate from './material-design.html'

export class AppGroups extends PolymerElement {
    static get is() { return 'app-groups' }
    static get template() { return materialDesignTemplate }
    static get properties() {
        return {
            allGroups: Array,
            joinedGroups: Array,
            activeName: String,
            activeDescription: String,
            activeIcon: String,
            activeTime: String,
            activeCoordinate: String,
            activeType: String,
        }
    }
    connectedCallback() {
        super.connectedCallback();
        const getGroupsJSON = (callback) => {
            const xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open('GET', './components/app-my-sabz-city/api-test/groups.json', true);
            xhr.responseType = 'text';
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    callback(xhr.responseText);
                }
            };
            xhr.send();
        };
        getGroupsJSON(data => {
            const toObject = JSON.parse(data);
            this.allGroups = toObject.allGroups;
            this.joinedGroups = toObject.joinedGroups;
        })
    }
    handleGroupPress(e) {
        let item = e.target;
        // check for child
        if (!item.dataset.icon) {
            item = e.target.parentElement;
        }
        const title = item.getAttribute('label');
        const { icon, description, time, coordinate, type } = item.dataset;
        const dialog = this.$.dialog;

        this.activeIcon = icon;
        this.activeDescription = description;
        this.activeName = title;
        this.activeType = type;
        this.activeCoordinate = coordinate;
        this.activeTime = time;
        dialog.open();

    }
}

customElements.define(AppGroups.is, AppGroups);
