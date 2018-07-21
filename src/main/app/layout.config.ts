import { GoldenLayoutConfiguration } from "../../core";
import { TestPanelComponent } from "./test-panel.component";

export const goldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [
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
                componentName: 'test-panel',
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
