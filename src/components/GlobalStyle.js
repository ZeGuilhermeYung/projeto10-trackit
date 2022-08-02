import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
  all: unset;
}

///////// Global configuration //////////////

body {
  width: 100%;
  background-color: #F2F2F2;
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
}
h1 {
  font-family: 'Playball', cursive;
  font-size: 39px;
  line-height: 49px;
  text-align: center;
  color: #FFFFFF;
}
h2 {
  font-size: 22.976px;
  line-height: 29px;
  color: #126BA5;
}
h3 {
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
}
h4 {
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
}
h5 {
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #52B6FF;
}
h6 {
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
}
`;
 
