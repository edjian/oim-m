import Initializer from '@/app/base/initialize/Initializer';
import app from '@/app/App';
import AppContext from '@/app/base/context/AppContext';
import Platform from '@/app/common/util/Platform';
import DefineExtendStore from '@/app/define/extend/DefineExtendStore';
import FileDownloadDefineData from '@/app/com/client/module/file/FileDownloadDefineData';


export default class CurrentPlatformInitializer implements Initializer {

    public getOrder(): number {
        return 0;
    }

    public getKey(): string {
        const own: object = this;
        return own.constructor.name;
    }

    public initialize(appContext: AppContext): void {
        this.initializeChat(appContext);
    }

    public initializeChat(appContext: AppContext) {
        // no
    }
}
