import GroupInfoViewImpl from '@/platform/vue/view/impl/GroupInfoViewImpl';
import mainViewData from '@/platform/wap/view/data/MainViewData';
import mainBaseTabs from '@/platform/wap/view/data/MainBaseTabs';
import RouterUtil from '@/common/vue/RouterUtil';

export default class WapGroupInfoViewImpl extends GroupInfoViewImpl {

    public setVisible(visible: boolean): void {
        if (visible) {
            const path = '/info.group/';
            RouterUtil.toByPath(path);
        }
    }

    public isVisible(): boolean {
        const path = '/info.group/';
        return RouterUtil.isPath(path);
    }
}
