import Vue from 'vue';
import temp from './List.html';

const DUMMY_DATA = [
  { id:'1', name:'ピカチュウ'},
  { id:'2', name:'フシギダネ'},
  { id:'3', name:'ゼニガメ'},
  { id:'4', name:'ミュー'},
  { id:'5', name:'ミューツー'},
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

