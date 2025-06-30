import React from 'react';

export default function StaffPage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">مدیریت پرسنل</h1>
        <button className="btn btn-primary">افزودن پرسنل جدید</button>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>کد پرسنلی</th>
                <th>نام</th>
                <th>تخصص</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>احمد رضایی</td>
                <td>برق</td>
                <td><span className="badge bg-success">فعال</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                </td>
              </tr>
              <tr>
                <td>1002</td>
                <td>علی محمدی</td>
                <td>مکانیک</td>
                <td><span className="badge bg-success">فعال</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                </td>
              </tr>
              <tr>
                <td>1003</td>
                <td>مریم احمدی</td>
                <td>تولید</td>
                <td><span className="badge bg-secondary">غیرفعال</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 