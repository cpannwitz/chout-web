import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family:
  'Poppins',
  -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* body {
  width: 100%;
  height: 100%;
} */

/* #entry {
  width: 100%;
  height: 100%;
  display: flex;
} */


/* .leaflet-control-zoom {
  margin-top: 160px !important;
  margin-right: 6px !important;
}

.mapboxgl-popup {
  z-index: 999;
}
.mapboxgl-popup-content {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35) !important;
} */

.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #29323C, #121519);
  color: #ffffff;
}

.Logo {
  width: 18rem;
  height: auto;
}

.Sub_Logo {
  width: 14rem;
  margin-top: 4rem;
}

`

export default GlobalStyles
