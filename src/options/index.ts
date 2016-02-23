import IOptions from './IOptions';
import Trigger from '../trigger';
import * as extend from 'extend';

let camelize = require('camelize');

export let defaultOptions: IOptions = {
  trigger: new Trigger('hover'),
  content: '',
  placement: 'top',
  placementOffset: 8,
  optimizePlacement: true,
  transitionPlacement: true,
  alignment: '',
  alignmentOffset: 0,
  viewportPadding: 10,
  timeToHoverOnPop: 300,
  showDelay: 0,
  fadeDuration: 100
};

export class Options implements IOptions {
  trigger: Trigger;
  content: string;
  placement: string;
  placementOffset: number;
  optimizePlacement: boolean;
  transitionPlacement: boolean;
  alignment: string;
  alignmentOffset: number;
  viewportPadding: number;
  timeToHoverOnPop: number;
  showDelay: number;
  fadeDuration: number;

  constructor(opts?: IOptions) {
    this.extendDefault(opts);
  }

  extendDefault(opts: IOptions): Options {
    return extend(this, defaultOptions, opts);
  }

  extend(opts: IOptions): Options {
    return extend(this, opts);
  }

  fromElement(el: Element): Options {
    if (!el) {
      return this;
    }

    for (let i = 0; i < el.attributes.length; i++) {
      let attr = el.attributes[i];
      let opts = {};

      if (attr.name.indexOf('data-popgun-') === 0) {
        // opts[camelize(attr.name)] = attr.value;
      }
    }
  }
}