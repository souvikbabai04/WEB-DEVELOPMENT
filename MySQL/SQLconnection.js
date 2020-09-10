const sql=require('mysql');

const con=sql.createConnection(
	{
	host:"localhost",
	user:"root",
	password:""
	}
);
con.connect((err,data)=>
{
	if(!err)
		console.log('Connected.!');
	else
	console.log('Not Connected with MSQL');
})