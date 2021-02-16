// This is the main.js file. Import global CSS and scripts here.
// The Client api can be used here. Learn more: gridsome.org/docs/client-api
import Layout from '~/layouts/Default.vue'
import {Vendure} from './vendure/vendure';
import '~/styles.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/800.css';
import Card from './components/Card';
import Breadcrumb from './components/Breadcrumb.vue';
import AsyncImage from './components/AsyncImage';
import BuyButton from './components/BuyButton';

export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    Vue.component('Layout', Layout);
    Vue.component('Card', Card);
    Vue.component('Breadcrumb', Breadcrumb);
    Vue.component('AsyncImage', AsyncImage);
    Vue.component('BuyButton', BuyButton);

    // DNS prefetch for images from storage
    head.link.push({
        rel: 'dns-prefetch',
        href: '//storage.googleapis.com'
    });
    head.link.push({
        rel: 'preconnect',
        href: 'https://storage.googleapis.com'
    });

    // Add euro filter for global use
    Vue.filter('euro', function (value, format) {
        if (!value) {
            value = 0;
        }
        const currencyString = `€${(value / 100).toFixed(2).replace('.', ',')}`;
        if (currencyString.endsWith('00') && !format) {
            return currencyString.replace(new RegExp('00$'), '-');
        }
        return currencyString;
    });
    // Set global store and vendure service
    if (isClient) {
        const store = Vue.observable({
            activeOrder: {},
        });
        Vue.prototype.$vendure = new Vendure(store);
        Vue.prototype.$store = store;
    }
}