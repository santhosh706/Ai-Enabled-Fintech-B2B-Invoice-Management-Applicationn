package com.deleteintern;

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
 * Servlet implementation class Delete
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
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
		int sl_no=Integer.parseInt(request.getParameter("sl_no"));
		
		
		
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Santhosh@2000");
		String sql_query="DELETE FROM winter_internship where sl_no = ?";
		PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
		
		preparedStatement.setInt(1,sl_no);
		
	
		
		if(preparedStatement.executeUpdate()>0){
			Response.put("Delete",true);
		}
		else {
			Response.put("Delete",false);
		}
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin","*");
		String Responsejson = gson.toJson(Response);
		response.getWriter().append(Responsejson);
		
	}catch(Exception e) {
		e.printStackTrace();
	}

}

}


