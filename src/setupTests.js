// import React from 'react'
// import { shallow, configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import 'jest-enzyme'
// import 'jest-localstorage-mock'

// import { createStore } from 'redux'
// import { Provider as ReduxProvider } from 'react-redux'

// import { ThemeProvider } from 'styled-components/macro'
// import defaultTheme from './styles/theme'

// // This file enables and configures testing with Jest & Enzyme for React 16

// export const shallowWithStoreAndTheme = (tree, theme = defaultTheme) => {
//   const context = shallow(
//     <ReduxProvider store={createStore(() => {})}>
//       <ThemeProvider theme={theme} />
//     </ReduxProvider>
//   )
//     .instance()
//     .getChildContext()
//   return shallow(tree, { context })
// }

// // * This Function and Object definition works around jsdom fails with mapbox-gl.
// // ! DONT REMOVE THIS!
// // * For further Information see: https://github.com/mapbox/mapbox-gl-js/issues/3436
// // * and: https://github.com/jsdom/jsdom/issues/1721
// function noOp() {}
// Object.defineProperty(window.URL, 'createObjectURL', {
//   writable: true,
//   value: noOp,
// })

// // configures the enzyme adapter for React16
// configure({ adapter: new Adapter() })

// // * Enzyme Matchers Library: https://github.com/FormidableLabs/enzyme-matchers
// // * Enzyme API: http://airbnb.io/enzyme/docs/api/
// // * Jest Styled-Components: https://github.com/styled-components/jest-styled-components
// // * Jest CheatSheet: https://github.com/sapegin/jest-cheat-sheet
