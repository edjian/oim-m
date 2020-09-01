<template>
    <div class="oim-main">
        <div class="main-pane-content">
            <v-main>
                <!-- Provides the application the proper gutter -->
                <message-list-pane v-show="tab.active==='message_tab'"></message-list-pane>
                <contact-list-nav-pane v-show="tab.active==='2'"></contact-list-nav-pane>
                <profile-pane v-show="tab.active==='3'"></profile-pane>
            </v-main>
        </div>

        <v-bottom-navigation
                v-model="tab.active"
                grow
                app
                color="primary"
        >
            <v-btn value="message_tab" @click="">
                <span>{{'消息'}}</span>
                <v-badge
                        :content="messageCount"
                        :value="messageCount"
                        color="red"
                        overlap
                >
                    <v-icon large>chat</v-icon>
                </v-badge>
            </v-btn>

            <v-btn value="2" @click="">
                <span>{{'通讯录'}}</span>
                <v-badge
                        :content="0"
                        :value="0"
                        color="green"
                        overlap
                >
                    <v-icon large>group</v-icon>
                </v-badge>
            </v-btn>
            <v-btn value="3" @click="">
                <span>{{'我'}}</span>
                <v-icon large>person</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';

    import MessageListPane from '@/views/module/list/MessageListPane.vue';
    import ContactListNavPane from '@/views/main/list/ContactListNavPane.vue';
    import ProfilePane from '@/views/main/me/ProfilePane.vue';

    import app from '@/app/App';
    import MessageAllUnreadView from '@/app/com/main/view/MessageAllUnreadView';
    import mainActiveTab from '@/views/main/MainActive';
    import Client from '@/app/base/message/client/Client';
    import MainView from '@/app/com/client/common/view/MainView';
    import WorkViewEnum from '@/app/com/common/view/WorkViewEnum';
    import AppUtil from '@/platform/wap/util/AppUtil';



    @Component({
        components: {
            MessageListPane,
            ContactListNavPane,
            ProfilePane,
        },
    })
    export default class Main extends Vue implements MainView, MessageAllUnreadView {
        private tab = mainActiveTab;
        private messageCount: number = 0;

        // 声明周期钩子
        public mounted() {
            app.appContext.putViewObject(WorkViewEnum.MainView, this);
            app.appContext.putViewObject(WorkViewEnum.MessageAllUnreadView, this);
        }

        public isItemShowing(type: string): boolean {
            return this.tab.active === type;
        }

        public setItemRed(type: string, red: boolean, count: number): void {
            count = (count > 99) ? 99 : count;
            if ('message_tab' === type) {
                this.messageCount = count;
            }
        }

        public showOtherOnline(offline: boolean, client: Client): void {
            if (offline) {
                AppUtil.logout();
                app.prompt('您的账号在其他地方登录！');
            }
        }

        public showTab(key: string): void {
            if ('user_tab' === key || 'group_tab' === key) {
                key = '2';
            }
            this.tab.active = key;
        }

        setRed(red: boolean, count: number): void {
            // no
        }
    }
</script>

<style lang="scss">
    .oim-main {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .main-pane-bottom {
        position: absolute;
        height: 48px;
        max-height: 48px;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }

    .main-pane-content {
        position: absolute;
        top: 0;
        bottom: 50px;
        right: 0;
        left: 0;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .main-pane-content::-webkit-scrollbar {
        display: none;
    }
</style>
