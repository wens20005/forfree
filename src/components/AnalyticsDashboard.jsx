import React, { useState, useEffect } from 'react'
import './AnalyticsDashboard.css'
import Loader from './Loader.jsx'

const AnalyticsDashboard = ({ account }) => {
  const [analyticsData, setAnalyticsData] = useState({
    nftOwnership: [],
    tokenMovements: [],
    userEngagement: []
  })
  const [loading, setLoading] = useState(false)
  const [timeRange, setTimeRange] = useState('7d')

  // Mock analytics data - in a real app, this would come from an API
  const mockAnalyticsData = {
    nftOwnership: [
      { date: '2023-01-01', count: 5 },
      { date: '2023-01-02', count: 7 },
      { date: '2023-01-03', count: 12 },
      { date: '2023-01-04', count: 15 },
      { date: '2023-01-05', count: 18 },
      { date: '2023-01-06', count: 22 },
      { date: '2023-01-07', count: 25 }
    ],
    tokenMovements: [
      { date: '2023-01-01', amount: 1.2 },
      { date: '2023-01-02', amount: 2.5 },
      { date: '2023-01-03', amount: 0.8 },
      { date: '2023-01-04', amount: 3.1 },
      { date: '2023-01-05', amount: 1.7 },
      { date: '2023-01-06', amount: 2.3 },
      { date: '2023-01-07', amount: 4.2 }
    ],
    userEngagement: [
      { date: '2023-01-01', interactions: 25 },
      { date: '2023-01-02', interactions: 32 },
      { date: '2023-01-03', interactions: 28 },
      { date: '2023-01-04', interactions: 45 },
      { date: '2023-01-05', interactions: 38 },
      { date: '2023-01-06', interactions: 52 },
      { date: '2023-01-07', interactions: 60 }
    ]
  }

  useEffect(() => {
    if (account) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setAnalyticsData(mockAnalyticsData)
        setLoading(false)
      }, 1000)
    }
  }, [account, timeRange])

  const renderChart = (data, title, dataKey) => {
    if (!data || data.length === 0) return null

    const maxValue = Math.max(...data.map(item => item[dataKey]))
    
    return (
      <div className="chart-container">
        <h3>{title}</h3>
        <div className="chart">
          {data.map((item, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ height: `${(item[dataKey] / maxValue) * 100}%` }}
              ></div>
              <span className="chart-label">{item.date.split('-')[2]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="analytics-dashboard">
      <Loader loading={loading} message="Loading analytics data..." />
      <h2>Analytics Dashboard</h2>
      
      <div className="dashboard-controls">
        <div className="time-range-selector">
          <button 
            className={timeRange === '7d' ? 'active' : ''} 
            onClick={() => setTimeRange('7d')}
          >
            7 Days
          </button>
          <button 
            className={timeRange === '30d' ? 'active' : ''} 
            onClick={() => setTimeRange('30d')}
          >
            30 Days
          </button>
          <button 
            className={timeRange === '90d' ? 'active' : ''} 
            onClick={() => setTimeRange('90d')}
          >
            90 Days
          </button>
        </div>
      </div>
      
      <div className="charts-grid">
        {renderChart(analyticsData.nftOwnership, 'NFT Ownership', 'count')}
        {renderChart(analyticsData.tokenMovements, 'Token Movements (ETH)', 'amount')}
        {renderChart(analyticsData.userEngagement, 'User Engagement', 'interactions')}
      </div>
      
      <div className="summary-stats">
        <div className="stat-card">
          <h3>Total NFTs</h3>
          <p className="stat-value">{analyticsData.nftOwnership.length > 0 ? 
            analyticsData.nftOwnership[analyticsData.nftOwnership.length - 1].count : 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Volume</h3>
          <p className="stat-value">{analyticsData.tokenMovements.reduce((sum, item) => sum + item.amount, 0).toFixed(2)} ETH</p>
        </div>
        <div className="stat-card">
          <h3>Total Interactions</h3>
          <p className="stat-value">{analyticsData.userEngagement.reduce((sum, item) => sum + item.interactions, 0)}</p>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard