import { ResponsivePieCanvas } from '@nivo/pie'
import React from 'react'
// import styled from 'styled-components'
// import useDarkMode from 'use-dark-mode'
import { useGitHubRepositories } from '../hooks/use-github-repositories'
import { topLanguages } from '../services/data-massage'

// const LanguageWrapper = styled.div`
//   width: 100%;
//   height: 40vh;
//   max-height: 700px;
//   max-width: 700px;
//   margin-top: 60px;
// `

export const TopLanguages = () => {
  const { repositories } = useGitHubRepositories()
  // const { value } = useDarkMode()
  return (
    <div>
      <ResponsivePieCanvas
        data={topLanguages(repositories)}
        margin={{
          top: 40,
          right: 80,
          bottom: 80,
          left: 80,
        }}
        pixelRatio={1}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={[
          '#f7df1e',
          '#299bd7',
          '#f16529',
          '#007acc',
          '#663399',
        ]}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        // radialLabelsTextColor={value ? `#f7fafc` : `#1a202c`}
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor={`#1a202c`}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={false}
      />
    </div>
  )
}
