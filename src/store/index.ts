import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '../router';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    badges: [
      { id: 1, name: 'Did not Explode', img: 'didnt_explode', figure: 'circle', hashtag: '%23didntexplode'},
      { id: 2, name: 'Eureka', img: 'eureka', figure: 'circle', hashtag: '%23eureka'},
      { id: 3, name: 'Leading Lady', img: 'leading_lady', figure: 'hexagon', hashtag: '%23leadinglady'},
      { id: 4, name: 'Mathematics Wizard', img: 'mathematics_wizard', figure: 'square', hashtag: '%23mathematicswizard'},
      { id: 5, name: 'Next gen Einstein', img: 'next_gen_einstein', figure: 'square', hashtag: '%23nextgeneinstein'},
      { id: 6, name: 'The Bigbang Badge', img: 'the_bigbang_badge', figure: 'hexagon', hashtag: '%23thebigbangbadge'},
      { id: 7, name: 'You rock(et) science', img: 'you_rocket_science', figure: 'triangle', hashtag: '%23yourockscience'},
      { id: 8, name: 'Another one', img: 'another_one', figure: 'hexagon', hashtag: '%23anotherone'},
    ],
    badgesApi: [],
    assertionsApi: [],
    assertionByIdApi: [],
    receiver: [{ receiver: '' }],
    message: [{message: ''}],
    pressedAtmark: false,
    validField: false,
    validMessage: false,
    badgeId: '',
    assertionId: '',
    thrustedDomain: 'https://api.wisebadges.osoc.be',
    twitterString: 'https://twitter.com/intent/tweet?text=Hey',
    // twitterString: 'https://twitter.com/intent/tweet?text=This%20is%20an%20example%20of%20a%20pre-written%20tweet-%20don%27t%20forget%20that%20it%20needs%20to%20be%20less%20than%20280%20characters'
  },
  mutations: {
    SET_BADGES(state, badgesApi) {
      state.badgesApi = badgesApi;
    },
    SET_ASSERTIONS(state, assertionsApi) {
      state.assertionsApi = assertionsApi;
    },
    SET_ASSERTIONBYID(state, assertionByIdApi) {
      state.assertionByIdApi = assertionByIdApi;
    }
  },
  actions: {
    loadBadges({ commit }) {
      return axios
        .get("https://api.wisebadges.osoc.be/badgeclasses/")
        .then(r => {
          let badgesApi = r.data;
          commit("SET_BADGES", badgesApi);
          //console.log(badgesApi);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    },
    loadAssertions({commit}) {
      return axios
        .get("https://api.wisebadges.osoc.be/assertions/")
        .then(r => {
          let assertionsApi = r.data;
          commit("SET_ASSERTIONS", assertionsApi);
          console.log(assertionsApi);
        })
        .catch(error => {
          return Promise.reject(error);
        })
    },
    loadAssertionById({ commit }, assertionID) {
      return axios
        // .get('https://api.wisebadges.osoc.be/assertion/' + this.route.params)
        .get('https://api.wisebadges.osoc.be/assertion/' + assertionID.assertionID)
        .then(r => {
          let assertionByIdApi = r.data
          commit("SET_ASSERTIONBYID", assertionByIdApi);
          console.log(assertionByIdApi);
        })
        .catch(error => {
          return Promise.reject(error);
        })
    }

  },
  modules: {
  },
});
