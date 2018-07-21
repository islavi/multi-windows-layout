import { GoldenLayoutConfiguration } from '../../core';
import { TestPanelComponent } from './../test-panel.component';
import { VesselsMapComponent } from '../components/vessels-map/vessels-map.component';

export const goldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [
        {
            component: VesselsMapComponent,
            componentName: 'vessels-map'
        },
        {
            component: TestPanelComponent,
            componentName: 'test-panel'
        }
    ],
    defaultLayout: {
        content: [{
            type: 'row',
            content: [{
                type: 'component',
                title: 'A',
                componentName: 'vessels-map',
                componentState: { label: 'A' }
            }, {
                type: 'column',
                content: [{
                    type: 'component',
                    title: 'B',
                    componentName: 'test-panel',
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
