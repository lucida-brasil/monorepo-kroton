import { DireflowComponent } from "direflow-component";
import HeadFormWebComponent from "./WebComponents/HeadForm";
import TooltipGatilhoComponent from "./WebComponents/TolltipGatilho";

export default DireflowComponent.createAll([
  {
    component: HeadFormWebComponent,
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
      },
    ],
  },
  {
    component: TooltipGatilhoComponent,
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
      },
    ],
  },
]);
