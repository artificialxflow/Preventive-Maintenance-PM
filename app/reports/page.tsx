import React from 'react';

export default function ReportsPage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">گزارشات و تحلیل</h1>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <select className="form-select">
            <option>تعمیرات</option>
            <option>نگهداری</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select className="form-select">
            <option>همه تجهیزات</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="از تاریخ" />
        </div>
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="تا تاریخ" />
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-secondary me-2">پاک کردن فیلترها</button>
        <button className="btn btn-primary">تولید گزارش</button>
        <button className="btn btn-outline-dark ms-2">PDF</button>
        <button className="btn btn-outline-dark">Excel</button>
      </div>
      <div className="row mb-4">
        <div className="col-md-3 mb-2">
          <div className="card text-center">
            <div className="card-body">
              <div className="h5">45.8</div>
              <div className="text-muted">هزینه ماهانه (میلیون ریال)</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-center">
            <div className="card-body">
              <div className="h5">97.6%</div>
              <div className="text-muted">در دسترس بودن</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-center">
            <div className="card-body">
              <div className="h5">4.2</div>
              <div className="text-muted">MTTR (ساعت)</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-center">
            <div className="card-body">
              <div className="h5">168.5</div>
              <div className="text-muted">MTBF (ساعت)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">گزارش تفصیلی تعمیرات</div>
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>تجهیز</th>
                <th>نوع خرابی</th>
                <th>مدت تعمیر (ساعت)</th>
                <th>هزینه (ریال)</th>
                <th>پرسنل</th>
                <th>تاریخ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>پمپ آب اصلی</td>
                <td>نشت مهر و موم</td>
                <td>3.5</td>
                <td>2,500,000</td>
                <td>احمد رضایی</td>
                <td>1402/12/15</td>
              </tr>
              <tr>
                <td>کمپرسور هوا</td>
                <td>خرابی والو</td>
                <td>6.0</td>
                <td>4,200,000</td>
                <td>علی محمدی</td>
                <td>1402/12/10</td>
              </tr>
              <tr>
                <td>موتور الکتریکی</td>
                <td>تعویض بلبرینگ</td>
                <td>4.5</td>
                <td>1,800,000</td>
                <td>مریم احمدی</td>
                <td>1402/12/08</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 