import React, { useState, useEffect } from 'react';
import { Lock, LogOut, Trash2, RefreshCw, Mail, Calendar, User, MessageSquare, ArrowLeft } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard({ onClose }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginError, setLoginError] = useState('');

  // Try to load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setIsAuthenticated(true);
      fetchMessages(savedToken);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_token', password);
        fetchMessages(password);
      } else {
        setLoginError(data.error || 'Invalid password.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Error verifying password. Is server running?');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setMessages([]);
    setPassword('');
  };

  const fetchMessages = async (token) => {
    setLoading(true);
    setError('');
    const authToken = token || password || localStorage.getItem('admin_token');
    try {
      const response = await fetch('/api/messages', {
        headers: { 'x-admin-password': authToken },
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError('Failed to fetch messages. Please log in again.');
        handleLogout();
      }
    } catch (err) {
      console.error(err);
      setError('Error loading messages. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    const authToken = password || localStorage.getItem('admin_token');
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': authToken },
      });

      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert('Failed to delete message.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting message.');
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-overlay">
        <div className="glass-card admin-login-card">
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <ArrowLeft size={16} /> Back
          </button>
          
          <div className="admin-login-header">
            <div className="lock-icon-container">
              <Lock size={28} />
            </div>
            <h2>Admin Login</h2>
            <p>Enter password to view submissions.</p>
          </div>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=" "
                className="form-input"
                autoFocus
              />
              <label className="form-label">Password</label>
            </div>

            {loginError && (
              <div className="admin-error-banner">
                {loginError}
              </div>
            )}

            <button type="submit" className="btn btn-primary login-submit-btn">
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container container">
      <div className="admin-dashboard-header">
        <div>
          <button className="btn btn-secondary back-btn" onClick={onClose}>
            <ArrowLeft size={14} /> Exit Admin Mode
          </button>
          <h2 className="admin-dashboard-title">
            Contact <span>Inbox</span>
          </h2>
          <p className="admin-dashboard-subtitle">
            Manage submissions saved to your MongoDB cluster.
          </p>
        </div>

        <div className="admin-dashboard-actions">
          <button
            onClick={() => fetchMessages()}
            className="btn btn-secondary action-btn"
            disabled={loading}
            title="Refresh messages"
          >
            <RefreshCw size={14} className={loading ? 'spin' : ''} />
            Refresh
          </button>
          <button onClick={handleLogout} className="btn btn-secondary logout-btn" title="Log out">
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {error && <div className="admin-error-banner dashboard-error">{error}</div>}

      {loading ? (
        <div className="admin-loading">
          <div className="spinner"></div>
          <p>Fetching messages from cluster...</p>
        </div>
      ) : messages.length === 0 ? (
        <div className="glass-card empty-messages-card">
          <Mail size={44} className="empty-icon" />
          <h3>No messages yet</h3>
          <p>When someone contacts you, their message will show up here.</p>
        </div>
      ) : (
        <div className="messages-grid">
          {messages.map((msg) => (
            <div key={msg._id} className="glass-card message-card">
              <div className="message-card-header">
                <div className="sender-meta">
                  <div className="sender-avatar">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="sender-name">{msg.name}</h4>
                    <a href={`mailto:${msg.email}`} className="sender-email">
                      {msg.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="delete-message-btn"
                  title="Delete message"
                  aria-label="Delete message"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="message-card-body">
                {msg.subject && (
                  <div className="message-subject">
                    <strong>Subject:</strong> {msg.subject}
                  </div>
                )}
                <div className="message-content">
                  <MessageSquare size={12} className="body-icon" />
                  {msg.message}
                </div>
              </div>

              <div className="message-card-footer">
                <Calendar size={12} />
                <span>{formatDate(msg.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
