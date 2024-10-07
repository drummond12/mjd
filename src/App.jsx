import { useState } from 'react'
import logo from './assets/cat.jpg'
import './App.css'
import Header from './components/Header'
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';



function App() {
  const [activeContent, setActiveContent] = useState(false);

  const handleTest1Click = () => setActiveContent('content1');
  const handleTest2Click = () => setActiveContent('content2');
  const handleTest3Click = () => setActiveContent('content3');

  const renderContent = () => {
    switch (activeContent) {
      case 'content1':
        return <Content1 />;
      case 'content2':
        return <Content2 />;
      case 'content3':
        return <Content3 />;
      default:
        return null;  // No content is displayed initially
    }
  };

  return (
    <>
    <Header 
    onTest1Click={handleTest1Click} 
    onTest2Click={handleTest2Click} 
    onTest3Click={handleTest3Click}
    />
    {renderContent()}
    </>
  )
}

export default App
