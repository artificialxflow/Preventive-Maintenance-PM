import React from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/dashboard', icon: 'fas fa-tachometer-alt', label: 'داشبورد' },
  { href: '/equipment', icon: 'fas fa-tools', label: 'مدیریت تجهیزات' },
  { href: '/maintenance', icon: 'fas fa-wrench', label: 'نگهداری پیشگیرانه' },
  { href: '/repairs', icon: 'fas fa-hammer', label: 'سوابق تعمیرات' },
  { href: '/staff', icon: 'fas fa-users', label: 'مدیریت پرسنل' },
  { href: '/reports', icon: 'fas fa-chart-bar', label: 'گزارشات' },
  { href: '/settings', icon: 'fas fa-cog', label: 'تنظیمات' },
];

export default function Sidebar() {
  // TODO: Wire up active state with router
  return (
    <aside className="sidebar d-none d-md-block">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {navItems.map((item) => (
            <li className="nav-item" key={item.href}>
              <Link href={item.href} className="nav-link">
                <i className={item.icon + ' me-2'}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 