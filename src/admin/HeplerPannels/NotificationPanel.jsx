// src/components/NotificationPanel.jsx
import React, { useState } from 'react';
import { Bell, Check, X } from 'lucide-react';
import "./Heplers.css"
const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Enrollment', message: 'Sarah Miller enrolled in Full Stack Dev', time: '2m ago', read: false, type: 'enrollment' },
    { id: 2, title: 'Course Completed', message: 'Michael Brown completed DevOps course', time: '1h ago', read: false, type: 'success' },
    { id: 3, title: 'Payment Received', message: 'Payment of $1,500 received from Emma Davis', time: '3h ago', read: true, type: 'payment' },
    { id: 4, title: 'System Update', message: 'Maintenance scheduled for Sunday 2 AM', time: '1d ago', read: true, type: 'info' },
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };
  
  const clearAll = () => {
    setNotifications([]);
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div className="notification-panel">
      <button 
        className="notification-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="notification-count">{unreadCount}</span>
        )}
      </button>
      
      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h4>Notifications ({unreadCount} unread)</h4>
            <button className="clear-all" onClick={clearAll}>
              Clear all
            </button>
          </div>
          
          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="empty-notifications">
                <Bell size={32} />
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${notification.read ? 'read' : 'unread'} ${notification.type}`}
                >
                  <div className="notification-icon">
                    {notification.type === 'enrollment' && '👤'}
                    {notification.type === 'success' && '✅'}
                    {notification.type === 'payment' && '💰'}
                    {notification.type === 'info' && 'ℹ️'}
                  </div>
                  
                  <div className="notification-content">
                    <h5>{notification.title}</h5>
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  
                  <div className="notification-actions">
                    {!notification.read && (
                      <button 
                        className="mark-read" 
                        onClick={() => markAsRead(notification.id)}
                        title="Mark as read"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button 
                      className="delete-notification"
                      onClick={() => setNotifications(notifications.filter(n => n.id !== notification.id))}
                      title="Delete"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="notification-footer">
            <button className="view-all-notifications">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;