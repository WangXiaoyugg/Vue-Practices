<template>
    <div>
        <nav-header></nav-header>
        <nav-bread>
            <span slot="breadName">Goods</span>
        </nav-bread>

        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price
                        <svg class="icon icon-arrow-short">
                            <use xlink:href="#icon-arrow-short"></use>
                        </svg></a>
                    <a href="javascript:void(0)"
                       class="filterby stopPop"
                       @click="showFilterPop">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter stopPop"
                         id="filter"
                         v-bind:class="{'filterby-show':filterBy}">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd>
                                <a href="javascript:void(0)"
                                   v-bind:class="{'cur': priceChecked ==='all'}"
                                   @click="priceChecked = 'all'">All</a>
                            </dd>
                            <dd v-for="(price,index) in priceFilter">
                                <a  href="javascript:void(0)"
                                    v-bind:class="{'cur':priceChecked === index}"
                                    @click="setPriceFilter(index)">
                                    {{price.startPrice}} - {{price.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <li v-for="(item,index) in goodsList">
                                    <div class="pic">
                                        <a href="#">
                                            <img v-lazy=" '../../static/' + item.productImg"
                                                 alt="">
                                        </a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.productPrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay "
             v-show="overlayFlag"
             @click="closePop"></div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import '@/assets/css/base.css'
    import '@/assets/css/product.css'
    import NavHeader from '@/components/NavHeader'
    import NavFooter from '@/components/NavFooter'
    import NavBread  from '@/components/NavBread'
    import priceFilter from '../../mock/prices'
    import axios from 'axios'

    console.log('priceFilter',priceFilter);
    export default {
        name: 'GoodList',
        data () {
            return {
                 goodsList:[],
                 priceFilter:priceFilter,
                 priceChecked:'all',
                 filterBy:false,
                 overlayFlag:false,
            }
        },
        components:{
            NavHeader,
            NavFooter,
            NavBread
        },
        mounted(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){

                axios.get('/goods').then((res) => {
                    if(res.status === 200 && res.data){
                        this.goodsList = res.data.data;
                    }
                }).catch((e) => {
                    console.log(e)
                })
            },
            showFilterPop(){
                this.filterBy = true;
                this.overlayFlag = true;
            },
            closePop(){
                this.filterBy = false;
                this.overlayFlag = false;
            },
            setPriceFilter(index){
                this.priceChecked = index;
                this.closePop();
            }
        }



    }
</script>

