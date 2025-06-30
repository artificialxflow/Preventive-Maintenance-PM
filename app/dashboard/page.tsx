import React from 'react';
import EquipmentStatusChart from './EquipmentStatusChart';
import MonthlyRepairsChart from './MonthlyRepairsChart';

export default function DashboardPage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">داشبورد مدیریت</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-download me-1"></i>
              خروجی گزارش
            </button>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-right-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col me-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">کل تجهیزات</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">247</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-tools fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-right-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col me-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">تعمیرات انجام شده</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">89</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-check-circle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-right-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col me-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">نگهداری معوق</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">12</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-right-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col me-2">
                  <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">تجهیزات خراب</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-times-circle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Charts and Table Placeholders */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-header">نمودار تعمیرات ماهانه</div>
            <div className="card-body d-flex justify-content-center align-items-center" style={{height: 300}}>
              <MonthlyRepairsChart />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-header">وضعیت تجهیزات</div>
            <div className="card-body d-flex justify-content-center align-items-center" style={{height: 300}}>
              <EquipmentStatusChart />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">فعالیت‌های اخیر</div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>تجهیز</th>
                    <th>نوع فعالیت</th>
                    <th>پرسنل</th>
                    <th>وضعیت</th>
                    <th>تاریخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>پمپ آب شماره 1</td>
                    <td>تعمیر اضطراری</td>
                    <td>احمد رضایی</td>
                    <td><span className="badge bg-success">تکمیل شده</span></td>
                    <td>1402/12/15</td>
                  </tr>
                  <tr>
                    <td>موتور کمپرسور</td>
                    <td>نگهداری پیشگیرانه</td>
                    <td>علی محمدی</td>
                    <td><span className="badge bg-warning text-dark">در حال انجام</span></td>
                    <td>1402/12/14</td>
                  </tr>
                  <tr>
                    <td>سیستم تهویه</td>
                    <td>بازرسی دوره‌ای</td>
                    <td>مریم احمدی</td>
                    <td><span className="badge bg-success">تکمیل شده</span></td>
                    <td>1402/12/13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 