import { ResponsiveCalendarCanvas } from '@nivo/calendar'
import { subWeeks } from 'date-fns'
import React from 'react'
// import { between, down, up } from 'styled-breakpoints'
// import styled from 'styled-components'
// import useDarkMode from 'use-dark-mode'
import { useGitHubContributions } from '../hooks/use-github-contributions'
import { contributions } from '../services/data-massage'

// const Wrapper = styled.div`
//   overflow: hidden;
//   border: 1px solid
//     var(
//       --colour-on-background,
//       ${({ theme }) => theme.colors.gray[100]}
//     );
//   border-radius: 5px;
//   margin-top: 60px;
//   height: 320px;
//   ${down('lg')} {
//     width: 100%;
//     right: 0%;
//   }
//   ${up('md')} {
//     position: relative;
//     width: 150%;
//     max-width: 850px;
//     right: 22%;
//   }
//   ${down('md')} {
//     position: inherit;
//     overflow-x: auto;
//   }
//   ${between('lg', 'md')} {
//     position: initial;
//   }
//   div {
//     height: 400px;
//     margin: -60px auto;
//     ${down('md')} {
//       position: relative;
//       max-width: 800px;
//       width: 200%;
//     }
//     ${between('md', 'lg')} {
//       position: initial;
//     }
//     ${between('sm', 'md')} {
//       position: initial;
//       right: 100%;
//     }
//   }
// `

export const GitHubContributions = () => {
  const { weeks } = useGitHubContributions()
  // const { value } = useDarkMode()
  return (
    <div>
      <div>
        <ResponsiveCalendarCanvas
          data={contributions(weeks)}
          from={subWeeks(new Date(Date.now()), 49).toISOString()}
          to={new Date(Date.now()).toISOString()}
          // emptyColor={value ? `#1a202c` : `#f7fafc`}
          colors={[
            '#a1cfff',
            '#468df3',
            '#a053f0',
            '#9629f0',
            '#8428d8',
          ]}
          margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          // yearLegendPosition="after"
          monthBorderColor={value ? `#f7fafc` : `#1a202c`}
          dayBorderWidth={2}
          dayBorderColor={value ? `#2d3748` : `#edf2f7`}
          isInteractive={false}
        />
      </div>
    </div>
  )
}
