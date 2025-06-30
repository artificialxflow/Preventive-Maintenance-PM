import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">نگهداری پیشگیرانه</h1>
        <button className="btn btn-primary">برنامه جدید +</button>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">چک‌لیست امروز</div>
            <div className="card-body checklist">
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="chk1" defaultChecked />
                <label className="form-check-label" htmlFor="chk1">بررسی فشار پمپ آب</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="chk2" />
                <label className="form-check-label" htmlFor="chk2">کنترل دمای کمپرسور</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="chk3" />
                <label className="form-check-label" htmlFor="chk3">بازرسی سیستم تهویه</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="chk4" defaultChecked />
                <label className="form-check-label" htmlFor="chk4">ثبت مقادیر کنتورها</label>
              </div>
              <button className="btn btn-primary w-100 mt-3">ثبت چک‌لیست</button>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header text-danger">هشدارها</div>
            <div className="card-body">
              <div className="alert alert-warning mb-2 p-2">نگهداری پمپ آب ۳ روز معوق است</div>
              <div className="alert alert-info mb-0 p-2">تعویض فیلتر کمپرسور فردا</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="card">
            <div className="card-header">برنامه نگهداری</div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>تجهیز</th>
                    <th>نوع نگهداری</th>
                    <th>تاریخ برنامه‌ریزی</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>پمپ آب اصلی</td>
                    <td>تعویض روغن</td>
                    <td>1402/12/20</td>
                    <td><span className="badge bg-warning text-dark">معوق</span></td>
                    <td><span className="badge bg-success">انجام شد</span></td>
                  </tr>
                  <tr>
                    <td>کمپرسور هوا</td>
                    <td>بررسی فیلتر</td>
                    <td>1402/12/25</td>
                    <td><span className="badge bg-info text-dark">برنامه‌ریزی شده</span></td>
                    <td><button className="btn btn-sm btn-outline-primary">جزئیات</button></td>
                  </tr>
                  <tr>
                    <td>موتور الکتریکی</td>
                    <td>بررسی اتصالات</td>
                    <td>1402/12/18</td>
                    <td><span className="badge bg-success">انجام شده</span></td>
                    <td><button className="btn btn-sm btn-outline-info">مشاهده گزارش</button></td>
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