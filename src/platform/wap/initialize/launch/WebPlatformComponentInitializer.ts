import Initializer from '@/app/base/initialize/Initializer';
import AppContext from '@/app/base/context/AppContext';
import Prompter from '@/app/com/client/component/Prompter';
import WebPromptHandlerImpl from '@/platform/wap/impl/WebPromptHandlerImpl';
import WorkViewEnum from '@/app/com/common/view/WorkViewEnum';
import WebPlatformFileIconInitializer from '@/platform/common/web/initialize/launch/more/WebPlatformFileIconInitializer';
import WapUserChatViewImpl from '@/platform/wap/impl/view/WapUserChatViewImpl';
import WapGroupChatViewImpl from '@/platform/wap/impl/view/WapGroupChatViewImpl';
import WapContactInfoViewImpl from '@/platform/wap/impl/view/WapContactInfoViewImpl';
import WapGroupInfoViewImpl from '@/platform/wap/impl/view/WapGroupInfoViewImpl';
import ContactListPaneViewImpl from '@/platform/vue/view/impl/ContactListPaneViewImpl';
import ContactListPaneViewAppImpl from '@/platform/wap/impl/view/ContactListPaneViewAppImpl';
import WapMessageAllUnreadViewImpl from '@/platform/wap/impl/view/WapMessageAllUnreadViewImpl';

export default class WebPlatformComponentInitializer implements Initializer {

    public getOrder(): number {
        return 0;
    }

    public getKey(): string {
        const own: object = this;
        return own.constructor.name;
    }

    public initialize(appContext: AppContext): void {
        const prompter: Prompter = appContext.getMaterial(Prompter);
        prompter.setPromptHandler(new WebPromptHandlerImpl());
        this.initializeView(appContext);
        this.initializeFileIcon(appContext);
    }

    public initializeView(appContext: AppContext) {

        appContext.putViewImpl(WorkViewEnum.ContactListPaneView, ContactListPaneViewAppImpl);
        appContext.putViewImpl(WorkViewEnum.UserChatView, WapUserChatViewImpl);
        appContext.putViewImpl(WorkViewEnum.GroupChatView, WapGroupChatViewImpl);
        appContext.putViewImpl(WorkViewEnum.ContactInfoView, WapContactInfoViewImpl);
        appContext.putViewImpl(WorkViewEnum.GroupInfoView, WapGroupInfoViewImpl);
        appContext.putViewImpl(WorkViewEnum.MessageAllUnreadView, WapMessageAllUnreadViewImpl);
        // appContext.putViewImpl(WorkViewEnum.GroupInviteApplyListView, GroupInviteApplyListViewImpl);
        // appContext.putViewImpl(WorkViewEnum.GroupInviteeApplyListView, GroupInviteeApplyListViewImpl);
        // appContext.putViewImpl(WorkViewEnum.GroupJoinApplyListView, GroupJoinApplyListViewImpl);
        // appContext.putViewImpl(WorkViewEnum.ContactAddApplyListView, ContactAddApplyListViewImpl);
    }

    public initializeFileIcon(appContext: AppContext) {
        const fileIconInitializer: WebPlatformFileIconInitializer = new WebPlatformFileIconInitializer();
        fileIconInitializer.initialize(appContext);
    }
}
