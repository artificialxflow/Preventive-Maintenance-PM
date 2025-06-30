import React from 'react';

export default function RepairsPage() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">سوابق تعمیرات</h1>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="کد دستور کار" />
        </div>
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="کد تجهیز" />
        </div>
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="نام تجهیز" />
        </div>
        <div className="col-md-3 mb-2">
          <input className="form-control" placeholder="توضیحات" />
        </div>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>کد</th>
                <th>تجهیز</th>
                <th>دپارتمان</th>
                <th>توضیحات</th>
                <th>نوع</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WR00460</td>
                <td>پمپ آب</td>
                <td>برق</td>
                <td>اتصالات شل</td>
                <td>WR</td>
                <td><span className="text-success">انجام شده</span></td>
              </tr>
              <tr>
                <td>PM001</td>
                <td>کمپرسور هوا</td>
                <td>مکانیک</td>
                <td>دستورکارهای روزانه خط یک</td>
                <td>PM</td>
                <td><span className="text-warning">در حال انجام</span></td>
              </tr>
              <tr>
                <td>PM001</td>
                <td>موتور</td>
                <td>مکانیک</td>
                <td>دستورکارهای روزانه خط یک</td>
                <td>PM</td>
                <td><span className="text-warning">در حال انجام</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 