package br.senai.sp.gestaoAuditorio.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Evento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	/* @JsonFormat(pattern = "dd-MM-yyyy") */
	private LocalDateTime start;
	private LocalDateTime end;
	@ManyToOne
	private Usuario usuario;
	@ManyToOne
	private Administrador administrador;
	

	
}
