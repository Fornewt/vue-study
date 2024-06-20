<template>
    <div>
        <button @click="withdraw">跟我一起去逃避~</button>
        <h1>我想胸口碎大石</h1>
        <button ref="myButton" @click="breakRock" :style="{ fontSize: buttonTextSize + 'px' }">{{ winOrLose }}</button>
    
        
    </div>
</template>

<script>
export default{// 默认可以导出本组件而可以随意取名 import hh from './test.vue';不需要花括号
    // name : 'ICanDo',
    data(){// data是一个函数，返回了组件的响应式数据
            return{// 这里的数据声明似乎和python一样不需要声明数据类型
            message : "键政の小曲又响起来了",
            breastNum : 2,
            rockNum : 10,
            winOrLose : "点击胸口碎大石",
            buttonTextSize : 20
        };
    },
    methods:{// 定义内部函数
        breakRock(){
            const button = this.$refs.myButton;
            if(this.rockNum >= 7){
                this.rockNum--;// 注意‘this’
                alert("一块大石被碎！");
                this.buttonTextSize += 2;
            }else{
                this.winOrLose = "胸口被大石碎哩...";
                this.buttonTextSize += 20;
                // button.style.width = '300px';
                // button.style.height = '200px';
                button.style.backgroundColor = 'white';
                button.style.color = 'red';
                

            }
        },
        withdraw() {// 这里则是导出函数 import { myFunction } from './test.vue';需要花括号
            alert(this.message);
            console.log("哈哈，你也想那个吗？");
        }

    }
}
// export function  这种东西就不要用了 包括$ref
// 想在其他文件调用这个组件的函数和数据 是一个亟待解决的问题，我先放一放

</script>

<style>
h1 {
    color:red;
}
</style>