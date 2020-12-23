// import {
//   Box,
//   Slider,
//   SliderFilledTrack,
//   SliderThumb,
//   SliderTrack,
// } from '@chakra-ui/react'
// import styled from '@emotion/styled'
// import React, { useState } from 'react'

// const SvgBoxStyle = styled.svg`
//   width: 200px;
//   height: 200px;
//   circle {
//     mix-blend-mode: multiply;
//   }
// `

// const SvgBox = () => {
//   const [box1, box1Set] = useState(4)
//   const [box2, box2Set] = useState(3)
//   const [box3, box3Set] = useState(2)
//   return (
//     <>
//       <Box>
//         <Slider
//           min={10}
//           max={600}
//           defaultValue={40}
//           onChange={box1 => box1Set(box1 / 100)}
//         >
//           <SliderTrack>
//             <SliderFilledTrack />
//           </SliderTrack>
//           <SliderThumb />
//         </Slider>
//         <Slider
//           min={10}
//           max={600}
//           defaultValue={40}
//           onChange={box2 => box2Set(box2 / 100)}
//         >
//           <SliderTrack>
//             <SliderFilledTrack />
//           </SliderTrack>
//           <SliderThumb />
//         </Slider>
//         <Slider
//           min={10}
//           max={200}
//           defaultValue={4}
//           onChange={box3 => box3Set(box3 / 100)}
//         >
//           <SliderTrack>
//             <SliderFilledTrack />
//           </SliderTrack>
//           <SliderThumb />
//         </Slider>
//       </Box>
//       <SvgBoxStyle viewBox="0 0 8 8">
//         <circle fill="cyan" cx={box1} cy={box2} r={box3} />
//         <circle fill="yellow" cx={box1 - 1} cy={box2 + 2} r={box3} />
//         <circle fill="magenta" cx={box1 + 1} cy={box2 + 2} r={box3} />
//       </SvgBoxStyle>
//     </>
//   )
// }

// // <circle fill="cyan" cx="4" cy="3" r="2" />
// // <circle fill="yellow" cx="3" cy="5" r="2" />
// // <circle fill="magenta" cx="5" cy="5" r="2" />

// const Circle = () => {
//   return (
//     <Box as="div" height="200px" width="200px">
//       <SvgBox />
//     </Box>
//   )
// }

// export default Circle

import React from 'react'
const Circle = () => {
  return <>yo</>
}

export default Circle
