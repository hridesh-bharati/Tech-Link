// src/components/charts/PerformanceChart.jsx
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import "./Heplers.css"
const PerformanceChart = ({ data, title, type = 'bar' }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{title}</h3>
        <select className="chart-period">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      
      {type === 'bar' ? (
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar-item">
              <div className="bar-label">{item.label}</div>
              <div className="bar-track">
                <div 
                  className="bar-fill" 
                  style={{ 
                    width: `${(item.value / maxValue) * 100}%`,
                    background: item.trend > 0 ? 
                      'var(--gradient-primary)' : 'var(--gradient-accent)'
                  }}
                >
                  <span className="bar-value">{item.value.toLocaleString()}</span>
                </div>
              </div>
              <div className={`bar-trend ${item.trend > 0 ? 'positive' : 'negative'}`}>
                {item.trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {Math.abs(item.trend)}%
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="line-chart">
          {/* Add line chart implementation */}
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;