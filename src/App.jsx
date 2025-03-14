import React from 'react'
import HomePage from './pages/HomePage'
import NavigationLayout from './components/NavigationLayout'
import LegacyPreservationPage from './pages/LegacyPreservationPage'
import StoryLegacyPage from './pages/StoryLegacyPage'

const App = () => {
  return (
    <div>
     {/*<HomePage /> */} 
     <StoryLegacyPage/>
    </div>
  )
}

export default App