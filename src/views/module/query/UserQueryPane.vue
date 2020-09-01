<template>
    <div class="query-pane">
        <div class="top">
            <v-card
                    elevation="3"
            >
                <v-col>
                    <v-input></v-input>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-col>
            </v-card>
        </div>
        <div class="center">
            <v-list>
                <template v-for="(data, i) in items">
                    <v-card>
                        <v-list-item
                                :key="data.id"
                                @click=""
                        >
                            <v-avatar>
                                <v-img :src="data.avatar"></v-img>
                            </v-avatar>
                            <div style="width: 15px;"></div>
                            <v-list-item-content>
                                <v-list-item-title>{{data.nickname}}</v-list-item-title>
                                <v-list-item-subtitle>{{'账号：'}}{{data.account}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-btn icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-list-item>
                    </v-card>
                </template>
            </v-list>
        </div>
        <div class="bottom">
            <div class="text-center" style="width: 100%">
                <v-pagination
                        dark
                        v-model="page"
                        :length="4"
                        circle
                ></v-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
    import BackButton from '@/views/module/common/BackButton.vue';
    import User from '@/app/com/main/module/business/user/bean/User';


    @Component({
        components: {
            BackButton,
        },
    })
    export default class UserQueryPane extends Vue {
        private items: User[] = [];
        private page: number = 1;

        public mounted() {
            if (this.items.length > 0) {
                return;
            }
            const names: string[] = ['网', 'xk', '和', '在', '他', '0', '我', '啊', '么', '了', '来',];
            const l = names.length;
            let j = 1;
            for (let i = 0; i < 100; i++) {
                const index = Math.round(Math.random() * l);
                if (j > 29) {
                    j = 1;
                }
                const data: User = new User();
                data.id = i + '';
                data.signature = '这是地' + i + '个';
                data.nickname = names[index] + '牛B' + i + '号';
                data.avatar = 'assets/images/common/head/user/' + j + '.png';
                j++;
                this.items.push(data);
            }
        }
    }
</script>

<style lang="scss">
    .query-pane {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .center {
            height: calc(100% - 135px);
            bottom: 48px;
            overflow-y: auto;
        }
    }

    /*.query-list-pane {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    overflow-y: auto;*/
    /*    padding-bottom: 56px;*/
    /*}*/
</style>
