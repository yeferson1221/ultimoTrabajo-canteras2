package com.table.bingo1.model;

/**
 * aqui en esta clase encontramos el modelo  con sus parametros, tambien las librerias usadas
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
/**
 * se define el nombre de la tabla con el @Table
 *
 */
@Table(name = "tableBingo")
public class TableBingo {
	/**
	 * se define el id  @id 
	 *
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * se define el la columna de la tabla  @column
	 *
	 */
	@Id
	@Column(name = "number_table", length = 12, nullable = false)
	private Long number_table;
	/**
	 * se define el la columna de la tabla  @column
	 *
	 */
	@Column(name = "id_winner", length = 50, nullable = false)
	private String  id_winner;
	
	public TableBingo() {

	}

	/**
	 * tenemos el constructor 
	 *
	 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
	 *
	 * @since [1.0.0]
	 *
	 */

	public TableBingo(Long id, Long number_table, String id_winner) {
		super();
		this.id = id;
		this.number_table = number_table;
		this.id_winner = id_winner;
		
	}



	/**
	 * getter y setter
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

	public Long getNumber_table() {
		return number_table;
	}

	public void setNumber_table(Long number_table) {
		this.number_table = number_table;
	}

	public String getName() {
		return  id_winner;
	}

	public void setName(String  id_winner) {
		this. id_winner =  id_winner;
	}



}
