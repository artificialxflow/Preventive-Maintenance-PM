import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <i className="fas fa-cogs me-2"></i>
          سیستم مدیریت نگهداری
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#dashboard">داشبورد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#equipment">تجهیزات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#maintenance">نگهداری</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reports">گزارشات</a>
            </li>
          </ul>
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i className="fas fa-user-circle me-1"></i>
                علی احمدی
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>پروفایل</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>تنظیمات</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>خروج</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 