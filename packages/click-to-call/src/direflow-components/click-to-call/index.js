import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'click-to-call',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Rubik', 'Signika'],
        },
      },
    },
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
  ],

});
