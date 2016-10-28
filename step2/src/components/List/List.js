import Vue from 'vue';
import temp from './List.html';

const DUMMY_DATA = [
  { id:'1', name:'ピカチュウ'},
  { id:'2', name:'フシギダネ'},
  { id:'3', name:'ゼニガメ'},
]

export default Vue.extend({
  template: temp,
  data () {
    return {
      listData:[]
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.listData = DUMMY_DATA;
    },
    goDetail(item) {
      this.$router.push({ path: '/app/' + item.id, parans: { item: item }})
    }
  }
});

