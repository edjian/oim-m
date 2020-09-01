<template>
    <div class="chat-pane">
        <v-card
                class="mx-auto"
                elevation="8"
                dark
                color="primary"
        >
            <div>
                <v-list-item
                        @click=""
                >
                    <back-button></back-button>
                    <v-toolbar-title>{{chatData.name}}</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-list-item>
            </div>
        </v-card>
        <div ref="messageListPane" class="center scroll-wrapper scrollbar-dynamic">
            <ReadPane :items="list"></ReadPane>
        </div>
        <div class="bottom">
            <div class="text-center" style="width: 100%">
                <v-pagination
                        v-model="page.number"
                        :length="page.totalPage"
                        @input="pageChange"
                        circle
                ></v-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
    import BackButton from '@/views/module/common/BackButton.vue';
    import ReadPane from '@/views/component/chat/ReadPane.vue';

    import app from '@/app/App';
    import Page from '@/app/com/common/data/Page';
    import GroupChatQuery from '@/app/com/main/module/business/chat/data/GroupChatQuery';
    import PersonalBox from '@/app/com/main/module/business/personal/box/PersonalBox';
    import GroupChatDataController from '@/app/com/main/module/business/chat/controller/GroupChatDataController';
    import MessageContentWrap from '@/common/vue/data/content/impl/message/MessageContentWrap';

    import groupChatViewModel from '@/platform/vue/view/model/GroupChatViewModel';
    @Component({
        components: {
            BackButton,
            ReadPane,
        },
    })
    export default class UserChatHistoryPane extends Vue {

        private list: MessageContentWrap[] = [];
        private page: Page = new Page();
        private query: GroupChatQuery = new GroupChatQuery();
        private chatData = groupChatViewModel.viewData;

        public mounted() {
            this.queryList();
        }

        public pageChange() {
            this.queryList();
        }

        public queryList() {
            const own = this;
            const page = this.page;
            const query: GroupChatQuery = this.query;
            const pb: PersonalBox = app.appContext.getMaterial(PersonalBox);
            const groupId = this.chatData.key;
            query.groupId = groupId;

            const groupChatController: GroupChatDataController = app.appContext.getMaterial(GroupChatDataController);

            const back = (p: Page, contents: MessageContentWrap[]) => {
                own.setList(p, contents);
            };
            groupChatController.queryList(query, page, back);
        }

        public setList(page: Page, items: MessageContentWrap[]) {
            this.page = page;
            this.list = items;
        }
    }
</script>

<style lang="scss">

</style>
