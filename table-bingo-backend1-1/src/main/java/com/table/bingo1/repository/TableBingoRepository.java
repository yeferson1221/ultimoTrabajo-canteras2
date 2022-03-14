package com.table.bingo1.repository;


	
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

	import com.table.bingo1.model.TableBingo;

	@Repository
	public interface TableBingoRepository extends JpaRepository<TableBingo, Long>{

	}


