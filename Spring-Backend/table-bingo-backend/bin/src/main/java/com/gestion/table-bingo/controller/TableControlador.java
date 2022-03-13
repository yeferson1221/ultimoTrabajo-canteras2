package com.gestion.empleados.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *aqui esta los controladores de agenda empleado, donde creamos las rutas 
 *y la logica para CRUD, tambien esta las librerias que use 
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
 *
 * @since [1.0.0]
 *
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.excepciones.ResourceNotFoundException;
import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepositorio;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class TableControlador {

	@Autowired
	private TableRepositorio repositorio;

	/**
	 *aqui listamos todas las mesas de bingos
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */
	@GetMapping("/tables")
	public List<Table> listarTodosLasTable() {
		return repositorio.findAll();
	}
	

	/**
	 *aqui guardamos las mesas de bingo
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */
	@PostMapping("/tables")
	public Table guardarEmpleado(@RequestBody Table table) {
		return repositorio.save(empleado);
	}
    
	/**
	 *aqui en este metodo buscamos las mesas, tambien uso ResourceNotFoundException para la validacion 
	 *y manejo de errores con una excepcion personalizada
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */
	@GetMapping("/tables/{id}")
	public ResponseEntity<Table> obtenerTablePorId(@PathVariable Long id){
			Table table = repositorio.findById(id)
					            .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
			return ResponseEntity.ok(table);
	}
	

}














