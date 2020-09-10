const mysql=require('mysql');
const conn=mysql.createConnection(
	{
		host:"localhost",
		user:"root",
		password:"",
		database:"babai"
	}
)
const sql="CALL updateDB(150,'nayan')";

conn.connect((err,data)=>
{
	if(!err)
		{
			conn.query(sql,(err,data,field)=>
			{
				if(err) throw err;
				console.log(data);
			})
		}
	else
		console.log(" NOT Connected.!!!!")
})