import Initializer from '@/app/base/initialize/Initializer';
import AppContext from '@/app/base/context/AppContext';
import Prompter from '@/app/com/client/component/Prompter';
import WebPromptHandlerImpl from '@/platform/wap/impl/WebPromptHandlerImpl';
import WorkViewEnum from '@/app/com/common/view/WorkViewEnum';
import WebPlatformFileIconInitializer from '@/platform/common/web/initialize/launch/more/WebPlatformFileIconInitializer';

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
        // appContext.putViewImpl(WorkViewEnum.MessageAllUnreadView, MessageAllUnreadViewImpl);
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
