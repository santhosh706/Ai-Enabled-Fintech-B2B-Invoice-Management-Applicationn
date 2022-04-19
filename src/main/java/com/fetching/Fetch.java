package com.fetching;

 
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fetchCrud.Crud;
import com.google.gson.Gson;
import com.intern.WinterIntern;

/**
 * Servlet implementation class Fetch
 */
@WebServlet("/Fetch")
public class Fetch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Fetch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		 Crud fetchdata=new Crud();
		 
		  ArrayList<WinterIntern> data = fetchdata.getData();
		  //System.out.println(data);
		  	
		  	Gson gson = new Gson();
			String respData = gson.toJson(data);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().print(respData);
	}
}