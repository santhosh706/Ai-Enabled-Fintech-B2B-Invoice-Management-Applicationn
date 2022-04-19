package com.advancesearch;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class AdvanceSearch
 */
@WebServlet("/AdvanceSearch")
public class AdvanceSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    try {
      HashMap<Object, Object> Response = new HashMap<Object, Object>();
            
      String doc_id = request.getParameter("Doc_id");
      String cust_number = request.getParameter("Cust_number");
      int invoice_id = Integer.parseInt(request.getParameter("Invoice_id"));
      int buisness_year = Integer.parseInt(request.getParameter("Buisness_year"));
      
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Santhosh@2000");
      String sql_query=("select * from winter_internship where doc_id="+doc_id+" AND "+"invoice_id"+invoice_id+" AND "+"cust_number"+cust_number+" AND "+"business_year"+buisness_year);
      PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
      
      
      preparedStatement.setString(5,doc_id);
      preparedStatement.setString(2,cust_number);
      preparedStatement.setInt(15,invoice_id);
      preparedStatement.setInt(4,buisness_year);
 
      if(preparedStatement.executeUpdate()>0) {
        Response.put("search",true);
        
      }else {
        Response.put("searched",false);
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

