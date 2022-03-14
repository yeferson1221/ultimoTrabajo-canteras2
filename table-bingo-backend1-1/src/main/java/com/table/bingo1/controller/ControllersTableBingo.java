package com.table.bingo1.controller;

import java.util.List;


/**
 *aqui esta los controladores de mesa de bingo, donde creamos las rutas 
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

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.table.bingo1.excepcion.ResourceNotFoundException;
import com.table.bingo1.model.TableBingo;
import com.table.bingo1.repository.TableBingoRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class ControllersTableBingo {

	@Autowired
	private TableBingoRepository repository;

	/**
	 * aqui listamos todas las mesas de bingos con la siguiente ruta definida	@GetMapping ("/tableBingo") 
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */
	@GetMapping("/tableBingo")
	public List<TableBingo> listarTodosLasTableBingo() {
		return repository.findAll();
	}

	/**
	 * aqui guardamos las mesas de bingo
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */
	@PostMapping("/tableBingo")
	public TableBingo guardarTableBingo(@RequestBody TableBingo tableBingo) {
		return repository.save(tableBingo);
	}

	/**
	 * aqui en este metodo filtramos por id las mesas con la siguiente ruta definida @GetMapping("/tableBingo/{id}"), tambien uso ResourceNotFoundException
	 * para la validacion y manejo de errores con una excepcion personalizada
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
	 *
	 * @since [1.0.0]
	 *
	 */
	@GetMapping("/tableBingo/{id}")
	public ResponseEntity<TableBingo> obtenerTableBingoPorId(@PathVariable Long id) {
		TableBingo tableBingo = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
		return ResponseEntity.ok(tableBingo);
	}

}