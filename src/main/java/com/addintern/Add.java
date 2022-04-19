
package com.addintern;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;

//import java.util.ArrayList;

import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
//import com.intern.WinterIntern;

/* Servlet implementation class Add
 */
@WebServlet("/Add")
public class Add extends HttpServlet {
  private static final long serialVersionUID = 1L;
       
    /* @see HttpServlet#HttpServlet()
     */
    public Add() {
        super();
        // TODO Auto-generated constructor stub
    }

  /**
   * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    
    
    
    try {
      HashMap<Object,Object> Response = new HashMap<Object, Object>();
            
      String business_code=request.getParameter("business_code");
      int cust_number = Integer.parseInt(request.getParameter("cust_number"));
      String clear_date = request.getParameter("clear_date");
      int buisness_year = Integer.parseInt(request.getParameter("buisness_year"));
      String doc_id = request.getParameter("doc_id");
      String posting_date=request.getParameter("posting_date");
      String document_create_date=request.getParameter("document_create_date");
    
      String due_in_date=request.getParameter("due_in_date");
      String invoice_currency = request.getParameter("invoice_currency");
      String document_type = request.getParameter("document_type");
      int posting_id = Integer.parseInt(request.getParameter("posting_id"));
      
      double total_open_amount= Double.parseDouble(request.getParameter("total_open_amount"));
      String baseline_create_date=request.getParameter("baseline_create_date");      
      String cust_payment_terms = request.getParameter("cust_payment_terms");
      int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
    
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Santhosh@2000");
      String sql_query="INSERT INTO winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
      
      
      preparedStatement.setString(1,business_code);
      preparedStatement.setInt(2,cust_number);
      preparedStatement.setString(3,clear_date);
      preparedStatement.setInt(4,buisness_year);
      preparedStatement.setString(5,doc_id);
      preparedStatement.setString(6,posting_date);
      preparedStatement.setString(7,document_create_date);
    
      preparedStatement.setString(8,due_in_date);
      preparedStatement.setString(9,invoice_currency);
      preparedStatement.setString(10,document_type);
      preparedStatement.setInt(11,posting_id);
    
      preparedStatement.setDouble(12,total_open_amount);
      preparedStatement.setString(13,baseline_create_date);
      preparedStatement.setString(14,cust_payment_terms);
      preparedStatement.setInt(15,invoice_id);
    
      if(preparedStatement.executeUpdate()>0) {
        Response.put("insert",true);
        
      }else {
        Response.put("insert",false);
      }
      
      Gson gson=new Gson();
      String ResponseJSON =gson.toJson(Response);
      response.setHeader("Access-Control-Allow-Origin","*");
      response.getWriter().append(ResponseJSON);
      System.out.println(ResponseJSON);

}
    catch (Exception e) {
      e.printStackTrace();
    }
  
  }
}