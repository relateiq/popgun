import Trigger from '../Trigger';

interface IOptions {
    trigger?: Trigger[];
    html?: string;
    text?: string;
    placement?: string;
    placementOffset?: number;
    optimizePlacement?: boolean;
    transitionPlacement?: boolean;
    alignment?: string;
    alignmentOffset?: number;
    viewportPadding?: number;
    timeToHoverOnPop?: number;
    showDelay?: number;
    fadeDuration?: number;
    cushion?: number;
    containerCushion?: number;
    disableClickOff?: boolean;
    tipClass?: string;
    darkStyle?: boolean;
    disable?: boolean;
    reusePopover?: boolean;
}

export default IOptions;
