package com.search;

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
 * Servlet implementation class Search
 */
@WebServlet("/Search")
public class Search extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Search() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			int Search = Integer.parseInt(request.getParameter("cust_number"));
			
			System.out.println(Search);
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Santhosh@2000");
			String sql_query="select * from winter_internship where cust_number = ?";
			PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
			preparedStatement.setInt(1,Search);
			

			if(preparedStatement.executeUpdate()>0) {
				Response.put("searched",true);
				
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
	