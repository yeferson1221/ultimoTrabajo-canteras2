package com.gestion.empleados.modelo;


/**
 *aqui en esta clase encontramos el modelo  con sus parametros, tambien las librerias usadas
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
 *
 * @since [1.0.0]
 *
 */

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tables")
public class Table {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "numberTable", length = 60, nullable = false, unique = true)
	private Number numberTable;

	public Table() {

	}
	
	/**
	 *tenemos el constructor 
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */

	public Table(Long id,  Number numberTable) {
		super();
		this.id = id;
		this.numberTable = numberTable;
	}
	
	
	/**
	 *getter y setter
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public Number getNumberTable() {
		return numberTable
	}
	
	public void setNumberTable(Number numberTable) {
		this.numberTable = numberTable
	}
	

}
