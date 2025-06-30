import React from 'react';

export default function EquipmentPage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">مدیریت تجهیزات</h1>
        <button className="btn btn-primary">افزودن تجهیز جدید</button>
      </div>
      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <select className="form-select">
            <option>همه وضعیت‌ها</option>
            <option>فعال</option>
            <option>در تعمیر</option>
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <select className="form-select">
            <option>همه دسته‌بندی‌ها</option>
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <input className="form-control" placeholder="جستجو در تجهیزات..." />
        </div>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>کد تجهیز</th>
                <th>نام تجهیز</th>
                <th>مدل</th>
                <th>سازنده</th>
                <th>مکان نصب</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EQ-001</td>
                <td>پمپ آب اصلی</td>
                <td>P-500</td>
                <td>گراندفوس</td>
                <td>سالن موتورخانه</td>
                <td><span className="badge bg-success">فعال</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                  <button className="btn btn-sm btn-primary"><i className="fas fa-eye"></i></button>
                </td>
              </tr>
              <tr>
                <td>EQ-002</td>
                <td>کمپرسور هوا</td>
                <td>AC-750</td>
                <td>اطلس کوپکو</td>
                <td>سالن تولید</td>
                <td><span className="badge bg-warning text-dark">در تعمیر</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                  <button className="btn btn-sm btn-primary"><i className="fas fa-eye"></i></button>
                </td>
              </tr>
              <tr>
                <td>EQ-003</td>
                <td>موتور الکتریکی</td>
                <td>M-300</td>
                <td>زیمنس</td>
                <td>خط تولید A</td>
                <td><span className="badge bg-success">فعال</span></td>
                <td>
                  <button className="btn btn-sm btn-danger me-1"><i className="fas fa-trash"></i></button>
                  <button className="btn btn-sm btn-warning me-1"><i className="fas fa-edit"></i></button>
                  <button className="btn btn-sm btn-primary"><i className="fas fa-eye"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <nav className="mt-3">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled"><span className="page-link">قبلی</span></li>
          <li className="page-item active"><span className="page-link">1</span></li>
          <li className="page-item"><span className="page-link">2</span></li>
          <li className="page-item"><span className="page-link">3</span></li>
          <li className="page-item"><span className="page-link">بعدی</span></li>
        </ul>
      </nav>
    </div>
  );
} 