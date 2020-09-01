<template>
    <div class="common-main-scroll-pane">
        <v-card
                class="mx-auto"
                elevation="8"
        >
            <v-list-item
                    @click=""
            >
                <back-button></back-button>
                <v-toolbar-title>{{'群成员'}}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-list-item>
        </v-card>
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
                        </v-list-item>
                    </v-card>
                </template>
            </v-list>
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
    export default class GroupMemberListPane extends Vue {
        private items: User[] = [];
        @Prop({
            type: String,
            required: false,
            default: () => (''),
        })
        private groupId!: string;

        public mounted() {
            // no
            this.loadList();
        }

        private loadList() {
            const groupId = this.groupId;
        }
    }
</script>

<style lang="scss">

</style>
