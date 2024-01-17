const express = require('express')
const mysql = require('mysql')

const app = express()
app.use(express.json())

// MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vendor',
    port: '3306'
})

connection.connect((err) => {
    if (err) {
        console.log('error connect');
        return;
    }
    console.log('MYSQL successfully');
})
// Routes

// หน้าadd ติดerrไปหมด
// add
app.post('/add'), async (req, res) => {
    const { branch_no, ven_code, ven_code_run, pre_name, ven_name, contact_name, add_name, add_no, add_moo
        , add_soi, add_trog, add_road, add_tumbol, add_amphur, add_provid, add_province, add_zip, add_tel, add_fax
        , add_email, vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term, ven_ct_code, ven_credit_term
        , ven_credit_limit, ven_balance, contact_fdate, contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle
        , AF_Status, ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time, edit_date, edit_time
        , add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no, } = req.body

    try {
        connection.query(
            "INSERT INTO sb_vendor(branch_no,ven_code,ven_code_run,pre_name,ven_name,contact_name,add_name,add_no,add_moo,add_soi,add_trog,add_road,add_tumbol,add_amphur,add_provid,add_province,add_zip,add_tel,add_fax,add_email,vengroup_code,vat_type,vat_code,ven_discount,ven_ship_term,ven_ct_code,ven_credit_term,ven_credit_limit,ven_balance,contact_fdate,contact_ldate,cancel_date,rec_memo,ordering_date,ordering_cycle,AF_Status,ven_balance_cs,tax_id,tax_branch_id,tax_branch,dealercode,add_date,add_time,edit_date,edit_time,add_tel1_ext,add_fax_ext,vender_type,add_phone,sap_no,(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?))",
            [branch_no, ven_code, ven_code_run, pre_name, ven_name, contact_name, add_name, add_no, add_moo
                , add_soi, add_trog, add_road, add_tumbol, add_amphur, add_provid, add_province, add_zip, add_tel, add_fax
                , add_email, vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term, ven_ct_code, ven_credit_term
                , ven_credit_limit, ven_balance, contact_fdate, contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle
                , AF_Status, ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time, edit_date, edit_time
                , add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no,],
            (err, results, fields) => {
                if (err) {
                    console.log('error');
                    return res.status(400).send('good')
                }
                return res.status(200)
            }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).send('not good')
    }
}

// list
app.get('/list', async (req, res) => {
    try {
        connection.query("SELECT * FROM sb_vendor", (err, results, fields) => {
            if (err) {
                console.log(err)
                return res.status(400).send()
            }
            res.status(200).json(results)
            })

    } catch (err) {
        console.log(err)
        return res.status(500).send()
    }
})


// view only
app.get('/view/only/:branch_no', async (req, res) => {
        const branch_no = req.params.branch_no;
    try {
        connection.query("SELECT * FROM sb_vendor WHERE branch_no = ?", [branch_no],(err, results, fields) => {
            if (err) {
                console.log(err)
                return res.status(400).send()
            }
            res.status(200).json(results)
            })

    } catch (err) {
        console.log(err)
        return res.status(500).send()
    }
})

app.listen(4560, () => console.log('Server Run'))