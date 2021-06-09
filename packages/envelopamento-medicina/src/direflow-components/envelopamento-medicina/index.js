import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  properties: {
    color: '',
    university: ''
  },
  configuration: {
    tagname: 'envelopamento-medicina',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Bitter', 'Open Sans', 'Lato'],
        },
      },
    },
    {
      name: 'file-loader',
      options: {

      }
    },
    {
      name: 'polyfill-loader',
      options: {
        use: {
          sd: false,
          ce: true,
        }
      }
    },
    {
      name: 'external-loader',
      options: {
        paths: [
          'https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js',
          'https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css'
        ],
      }
    }
  ],
});
