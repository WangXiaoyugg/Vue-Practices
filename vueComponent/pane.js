Vue.component('pane',{   name:'pane',   template:`<div class="pane">    <slot></slot><div>       ` ,    data:function () {        return {            data:true,        }    },    props:{       names:{           type:String,       },       label:{           type:String,           default:''       }    },    methods:{       updateNav(){           this.$parent.updateNav()       }    },    watch:{        label(){            this.updateNav()        }    },    mounted(){       this.updateNav();    }});