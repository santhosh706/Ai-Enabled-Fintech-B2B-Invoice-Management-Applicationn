package com.fetchCrud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


import com.intern.WinterIntern;

public class Crud {
	public Connection getConnection()
	{
		 Connection conn =null;
			
				try {
					Class.forName("com.mysql.cj.jdbc.Driver");
					conn =DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Santhosh@2000");
				
				
				
				} catch (ClassNotFoundException e) {
					
					e.printStackTrace();
				} catch (SQLException e) {
					e.printStackTrace();
				}
				
				return conn;

		}
	
	
		public ArrayList<WinterIntern> getData()
		{
			ArrayList<WinterIntern> ALLWinterIntern =new ArrayList<WinterIntern>();
			String  clear_date,business_code,doc_id,aging_bucket,area_business,invoice_currency,document_type,cust_payment_terms,posting_date,document_create_date,due_in_date,baseline_create_date,document_create_date1;
			int sl_no,buisness_year,invoice_id,posting_id,isOpen,cust_number,is_deleted;
			
			double total_open_amount;
			try {
			 Connection conn = getConnection();
			 String sql_query="SELECT * from winter_internship";
			 PreparedStatement pst = conn.prepareStatement(sql_query);
			 //System.out.println(pst);
			 
			 ResultSet rs = pst.executeQuery();
			
			 while(rs.next())
			 {
				 WinterIntern w = new WinterIntern();
				 sl_no=rs.getInt("sl_no");
				 business_code=rs.getString("business_code");
				 cust_number = rs.getInt("cust_number");
				 clear_date = rs.getString("clear_date");
				 buisness_year = rs.getInt("buisness_year");
				 doc_id = rs.getString("doc_id");
				 posting_date = rs.getString("posting_date");
				 document_create_date = rs.getString("document_create_date");
				 document_create_date1=rs.getString("document_create_date1");
				 due_in_date = rs.getString("due_in_Date");
				 invoice_currency = rs.getString("invoice_currency");
				 document_type = rs.getString("document_type");
				 posting_id=rs.getInt("posting_id");
				 area_business=rs.getString("area_business");	
				 total_open_amount= rs.getDouble("total_open_amount");
				 baseline_create_date = rs.getString("baseline_create_date");
				 cust_payment_terms = rs.getString("cust_payment_terms");
				 invoice_id = rs.getInt("invoice_id");
				 isOpen=rs.getInt("isOpen");
				 aging_bucket=rs.getString("aging_bucket");
				 is_deleted=rs.getInt("is_deleted");
				

					w.setSl_no(sl_no);
					w.setBusiness_code(business_code);
					w.setCust_number(cust_number);
					w.setClear_date(clear_date);
					w.setBuisness_year(buisness_year);
					w.setDoc_id(doc_id);
					w.setPosting_date(posting_date);
					w.setDocument_create_date(document_create_date);
					w.setDocument_create_date1(document_create_date1);
					w.setDue_in_date(due_in_date);
					w.setInvoice_currency(invoice_currency);
					w.setDocument_type(document_type);
					w.setPosting_id(posting_id);
					w.setArea_business(area_business);
					w.setTotal_open_amount( total_open_amount);
					w.setBaseline_create_date(baseline_create_date);
					w.setCust_payment_terms(cust_payment_terms);
					w.setInvoice_id(invoice_id);
					w.setIsOpen(isOpen);
					w.setAging_bucket(aging_bucket);
					w.setIs_deleted(is_deleted);
					

					ALLWinterIntern.add(w);
			 }
			 
			 for(WinterIntern win: ALLWinterIntern)
			 {
				 System.out.println(win.toString());
			 }
			 
			}
			catch (Exception e) {
				e.printStackTrace();
				System.out.println("exception occur");
			}
			
			return ALLWinterIntern;
			
		
		}
		
		
		
}



