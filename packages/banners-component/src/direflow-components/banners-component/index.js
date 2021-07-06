import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'banners-component',
  },
  properties: {
    banners: [{
      bannerSrc: '',
      link: ''
    }]
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
  
});
