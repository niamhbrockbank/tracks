import {createGlobalVar, globalStyle, style} from '@vanilla-extract/css'

export const metropolitan = createGlobalVar('metropolitan')
export const jubilee = createGlobalVar('jubilee')
export const bakerloo = createGlobalVar('bakerloo')
export const central = createGlobalVar('central')
export const circle = createGlobalVar('circle')
export const district = createGlobalVar('district')
export const hammersmithCity = createGlobalVar('hammersmith-city')
export const northern = createGlobalVar('northern')
export const piccadilly = createGlobalVar('piccadilly')
export const victoria = createGlobalVar('victoria')
export const waterlooCity = createGlobalVar('waterloo-city')

globalStyle(':root', {
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: 400,

  colorScheme: 'light dark',
  color: '#213547',
  backgroundColor: '#ffffff',

  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',

  vars: {
    [jubilee] : '#A0A5A9',
    [metropolitan]: '#9B0056',
    [bakerloo]: '#B36305',
    [central]: '#E32017',
    [circle]: '#FFD300',
    [district]: '#00782A',
    [hammersmithCity]: '#F3A9BB',
    [northern]: "#000000",
    [piccadilly]: '#003688',
    [victoria]: '#0098D4',
    [waterlooCity]: '#95CDBA',
  }
})

globalStyle('a', {
  fontWeight: 500,
  color: '#646cff',
  textDecoration: 'inherit',
},
)

globalStyle('a:hover', {color: '#535bf2'})


globalStyle('button', {
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  color: 'black',
  cursor: 'pointer',
  'transition': 'border-color 0.25s',
})

globalStyle('button:hover', {
  borderColor: '#646cff'
})

globalStyle('button:focus', {
  outline: '4px auto -webkit-focus-ring-color',
})

export const borderRadius = style({
  borderRadius: '8px',
})