/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Datepicker from 'vue-bootstrap/src/Datepicker';
import Dropdown from 'vue-bootstrap/src/Dropdown';
import Modal from 'vue-bootstrap/src/Modal';
import Multicheckbox from 'vue-bootstrap/src/Multicheckbox';
import Multiselect from 'vue-bootstrap/src/Multiselect';
import Panel from 'vue-bootstrap/src/Panel';
import Popover from 'vue-bootstrap/src/Popover';
import SearchField from 'vue-bootstrap/src/SearchField';
import SelectField from 'vue-bootstrap/src/SelectField';
import Tabs from 'vue-bootstrap/src/Tabs';
import TagInput from 'vue-bootstrap/src/TagInput';
import Typeahead from 'vue-bootstrap/src/Typeahead';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('Datepicker', Datepicker);
  Vue.component('Dropdown', Dropdown);
  Vue.component('Modal', Modal);
  Vue.component('Multicheckbox', Multicheckbox);
  Vue.component('Multiselect', Multiselect);
  Vue.component('Panel', Panel);
  Vue.component('Popover', Popover);
  Vue.component('SearchField', SearchField);
  Vue.component('SelectField', SelectField);
  Vue.component('Tabs', Tabs);
  Vue.component('TagInput', TagInput);
  Vue.component('Typeahead', Typeahead);
}
