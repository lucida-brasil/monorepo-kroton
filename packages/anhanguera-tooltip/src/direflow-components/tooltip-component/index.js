import { DireflowComponent } from "direflow-component";
import HeadForm from './components/head-form';
import TooltipGatilho from './components/tooltip-gatilho';

const tooltipGatilho = {
  component: TooltipGatilho,
    properties: {
      color: "",
    },
    configuration: {
      tagname: "zoly-tooltip-gatilho",
      useShadow: true,
    },
    plugins: [
      {
        name: "polyfill-loader",
          options: {
            use: {
              sd: false,
              ce: false,
              adapter: false,
            },
          },
        }
      ]
}

const headForm = {
  component: HeadForm,
    properties: {
      university: "",
      color: "",
    },
    configuration: {
      tagname: "zoly-head-form-component",
      useShadow: true,
    },
    plugins: [
      {
        name: "polyfill-loader",
          options: {
            use: {
              sd: false,
              ce: false,
              adapter: false,
            },
          },
        }
      ]
}

export default DireflowComponent.createAll([ tooltipGatilho, headForm ]);
