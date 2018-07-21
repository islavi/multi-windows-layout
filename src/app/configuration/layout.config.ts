import { GoldenLayoutConfiguration } from '../../core';
import { TestPanelComponent } from './../test-panel.component';
import { VesselsMapComponent } from '../panels/vessels-map/vessels-map.component';
import { UsersComponent } from '../panels/users/users.component';

export const goldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [
        {
            component: VesselsMapComponent,
            componentName: 'vessels-map-page'
        },
        {
            component: TestPanelComponent,
            componentName: 'test-panel'
        },
        {
            component: UsersComponent,
            componentName: 'users-page'
        }
    ],
    defaultLayout: {
        content: [{
            type: 'row',
            content: [{
                type: 'component',
                title: 'A',
                componentName: 'vessels-map-page',
                componentState: { label: 'A' }
            }, {
                type: 'column',
                content: [{
                    type: 'component',
                    title: 'B',
                    componentName: 'users-page',
                    componentState: { label: 'B' }
                }, {
                    type: 'component',
                    title: 'C',
                    componentName: 'test-panel',
                    componentState: { label: 'C' }
                }]
            }]
        }]
    }
};
