import Vue from 'vue';
import './App.css';
import temp from './App.html';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

export default Vue.extend({
  template: temp,
  components: {
    "header-nav":Header,
    "list":List,
  },
  data: () => {
    const initialState = {
      plan: 100,
      size: 0,
      options: [],
    };
    return initialState;
  },
  computed: {
    total: () => [this.plan, (this.size * 500)].concat(this.options)
      .reduce((a, b) => Number(a) + Number(b)),
  },
});
