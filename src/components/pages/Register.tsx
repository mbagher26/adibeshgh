import { useState } from "react"

export default function Register() {

    interface valModel {
        fname?: string | undefined, 
        lname?: string | undefined, 
        mobile?: number | undefined, 
        date?: number | undefined, 
        shire?: string | undefined, 
        city?: string | undefined 
    }
    // const [values, setValues] = useState<{ fname?: string | undefined, lname?: string | undefined, mobile?: number | undefined, date?: number | undefined, shire?: string | undefined, city?: string | undefined }>();
    const [values, setValues] = useState<valModel>();

    function handleChange(e:any) {
        setValues({ ...values, [e.target.value]: e.target.value });
    };
    console.log({ values });

    return (
        <form className="register-form">
            <label className="label" htmlFor='fname' >
                :نام را وارد کنید
            </label>
            <input className="inp" id="fname" type="text" value={values?.fname} onChange={handleChange} />
            <br />
            <label className="label" htmlFor="lname" >
                :نام خانوادگی را وارد کنید
            </label>
            <input className="inp" id="lname" type="text" value={values?.lname} onChange={handleChange} />
            <br />
            <label className="label" htmlFor="mobile">
                :تلفن همراه را وارد کنید
            </label>
            <input className="inp" id="mobile" type="text" value={values?.mobile} onChange={handleChange} />
            <br />
            <label className="label" htmlFor="date">
                :تاریخ تولد را وارد کنید
            </label>
            <input className="inp" id="date" type="date" value={values?.date} onChange={handleChange} />
            <br />
            <label className="label" htmlFor="shire">
                :استان را وارد کنید
            </label>
            <input className="inp" id="shire" value={values?.shire} onChange={handleChange} />
            <br />
            <label className="label" htmlFor="city">
                :شهر را وارد کنید
            </label>
            <input className="inp" id="city" value={values?.city} onChange={handleChange} />
            <br />
            {/* <input className="inp" type="submit" value='ثبت نام رایگان' /> */}
        </form>
    )
}
