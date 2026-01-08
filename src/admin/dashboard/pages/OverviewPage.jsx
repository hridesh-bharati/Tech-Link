import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { 
  Users, BookOpen, BarChart3, Calendar, 
  TrendingUp, Target, Award, Clock 
} from "lucide-react";

const OverviewPage = () => {
  const { user } = useAuth();

  const stats = [
    { icon: <Users size={24} />, label: "Total Users", value: "1,245", change: "+12%", color: "primary" },
    { icon: <BookOpen size={24} />, label: "Active Courses", value: "48", change: "+5%", color: "success" },
    { icon: <BarChart3 size={24} />, label: "Completion Rate", value: "78%", change: "+8%", color: "info" },
    { icon: <Calendar size={24} />, label: "Events", value: "12", change: "+3", color: "warning" },
  ];

  const recentActivities = [
    { user: "Alex Johnson", action: "completed course", course: "React Advanced", time: "2 min ago" },
    { user: "Sarah Miller", action: "uploaded project", project: "E-commerce UI", time: "15 min ago" },
    { user: "Mike Chen", action: "joined platform", time: "30 min ago" },
    { user: "Priya Sharma", action: "achieved badge", badge: "Python Expert", time: "1 hour ago" },
    { user: "David Wilson", action: "started course", course: "Node.js Backend", time: "2 hours ago" },
  ];

  const quickActions = [
    { title: "Create Course", icon: "📚", color: "primary" },
    { title: "Add User", icon: "👤", color: "success" },
    { title: "View Analytics", icon: "📊", color: "info" },
    { title: "Schedule Event", icon: "📅", color: "warning" },
  ];

  return (
    <div className="container-fluid">
      {/* Welcome Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="mb-1">Welcome back, <span className="text-primary">{user?.name?.split(" ")[0]}</span>!</h1>
          <p className="text-muted">Here's what's happening with your platform today.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">
            <Calendar size={18} className="me-2" />
            Today: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className={`card border-0 bg-${stat.color}-subtle shadow-sm`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className={`bg-${stat.color} text-white rounded p-2`}>
                    {stat.icon}
                  </div>
                  <div className="text-end">
                    <div className="text-muted small">{stat.label}</div>
                    <h3 className="mb-0">{stat.value}</h3>
                  </div>
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <TrendingUp size={14} className={`text-${stat.color} me-1`} />
                  <small className={`text-${stat.color}`}>{stat.change} from last month</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-8">
          {/* Analytics Chart Placeholder */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">Platform Performance</h5>
            </div>
            <div className="card-body">
              <div className="bg-light rounded p-4 text-center" style={{ height: "250px" }}>
                <BarChart3 size={48} className="text-muted mb-3" />
                <p className="text-muted">Analytics chart will appear here</p>
                <small>User growth, course completions, revenue metrics</small>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Activities</h5>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="list-group-item border-0 py-3">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                          {activity.user.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between">
                          <strong>{activity.user}</strong>
                          <small className="text-muted">{activity.time}</small>
                        </div>
                        <p className="mb-0">
                          {activity.action} 
                          {activity.course && <strong className="text-primary"> {activity.course}</strong>}
                          {activity.project && <strong className="text-success"> {activity.project}</strong>}
                          {activity.badge && <strong className="text-warning"> {activity.badge}</strong>}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {/* Quick Actions */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                {quickActions.map((action, index) => (
                  <div key={index} className="col-6">
                    <button className={`btn btn-${action.color} w-100 h-100 py-3 d-flex flex-column align-items-center`}>
                      <span style={{ fontSize: "24px" }}>{action.icon}</span>
                      <span className="mt-2">{action.title}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile Summary */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h5 className="mb-0">Your Profile</h5>
            </div>
            <div className="card-body text-center">
              <div className="mb-3">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="rounded-circle border border-3 border-primary"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                ) : (
                  <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center" 
                    style={{ width: "80px", height: "80px" }}>
                    <span style={{ fontSize: "24px" }}>{user?.name?.charAt(0)}</span>
                  </div>
                )}
              </div>
              <h5>{user?.name}</h5>
              <p className="text-muted">{user?.email}</p>
              <div className="d-flex justify-content-center gap-2 mb-3">
                <span className="badge bg-primary">Admin</span>
                <span className="badge bg-success">Verified</span>
              </div>
              <div className="row text-center">
                <div className="col-4">
                  <div className="border-end">
                    <h5 className="mb-0">12</h5>
                    <small className="text-muted">Courses</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-end">
                    <h5 className="mb-0">47</h5>
                    <small className="text-muted">Connections</small>
                  </div>
                </div>
                <div className="col-4">
                  <h5 className="mb-0">5</h5>
                  <small className="text-muted">Projects</small>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Upcoming Events</h5>
              <Clock size={18} className="text-muted" />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-danger text-white rounded p-2 me-3">
                  <Calendar size={18} />
                </div>
                <div>
                  <h6 className="mb-0">Webinar: Advanced React</h6>
                  <small className="text-muted">Tomorrow, 3:00 PM IST</small>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success text-white rounded p-2 me-3">
                  <Calendar size={18} />
                </div>
                <div>
                  <h6 className="mb-0">Team Meeting</h6>
                  <small className="text-muted">Dec 25, 11:00 AM IST</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-info text-white rounded p-2 me-3">
                  <Calendar size={18} />
                </div>
                <div>
                  <h6 className="mb-0">Workshop: Node.js</h6>
                  <small className="text-muted">Dec 28, 2:00 PM IST</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="card border-0 shadow-sm mt-4">
        <div className="card-header bg-white border-0">
          <h5 className="mb-0">Monthly Goals</h5>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <Target size={20} className="text-primary me-2" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between mb-1">
                <span>User Acquisition Target</span>
                <span>85%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-primary" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <Award size={20} className="text-success me-2" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between mb-1">
                <span>Course Completion Rate</span>
                <span>72%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-success" style={{ width: "72%" }}></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <TrendingUp size={20} className="text-info me-2" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between mb-1">
                <span>Revenue Growth</span>
                <span>65%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;