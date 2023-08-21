import React from 'react';
import SphereOfInfluence from './components/SphereOfInfluence';
import EngagementDashboard from './components/EngagementDashboard';
import CommunitiesOfPractice from './components/CommunitiesOfPractice';
import VisualizationTool from './components/VisualizationTool';
import SearchFunctionality from './components/SearchFunctionality';
import EmailCommunication from './components/EmailCommunication';
import UserAccessPermission from './components/UserAccessPermission';
import IntegrationExtension from './components/IntegrationExtension';
import DatabaseManagementSystem from './components/DatabaseManagementSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Components for each feature go here */}
        <SphereOfInfluence />
        <EngagementDashboard />
        <CommunitiesOfPractice />
        <VisualizationTool />
        <SearchFunctionality />
        <EmailCommunication />
        <UserAccessPermission />
        <IntegrationExtension />
        <DatabaseManagementSystem />
      </div>
    );
  }
}

export default App;
import VisitRegistration from './components/VisitRegistration';
import PostVisitReport from './components/PostVisitReport';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Existing components */}
        
        <VisitRegistration />
        <PostVisitReport />
      </div>
    );
  }
}
