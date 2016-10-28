import Vue from 'vue';
import temp from './Detail.html';


export default Vue.extend({
  template: temp,
  data: function () {
    return {
      columns: [{
        'type': 'string',
        'label': 'Year'
      }, {
        'type': 'number',
        'label': 'Power'
      }],
      rows: [
        ['2004', 1000],
        ['2005', 1170],
        ['2006', 660],
        ['2007', 1030]
      ],
      options: {
        title: 'Performance',
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: '',
        },
        width: '100%',
        height: 300,
        curveType: 'function'
      }
    }
  },
});

