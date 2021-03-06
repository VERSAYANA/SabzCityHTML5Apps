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

import '/node_modules/@polymer/polymer/polymer.js'
//import '/node_modules/@polymer/platinum-sw/platinum-sw-register.js'
//import '/node_modules/@polymer/platinum-sw/platinum-sw-cache.js'
import '/node_modules/@sabzcity/elements/m-outdated-browser/m-outdated-browser.js'
import '/node_modules/@sabzcity/elements/a-app/a-app-engine.js'

import '/app-my-sabz-city/app-my-sabz-city.js'

// hide initial-loading-box after app is ready to display.
window.onload = function () { document.getElementById('initial-loading-box').style.display = 'none' }
