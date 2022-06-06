package br.senai.sp.gestaoAuditorio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import br.senai.sp.gestaoAuditorio.model.Administrador;
import br.senai.sp.gestaoAuditorio.model.Usuario;

public interface AdministradorRepository extends PagingAndSortingRepository<Administrador, Long> {

	public Administrador findByNifAndSenha(String nif, String senha);

	public Usuario findByNomeAndNif(String nome, String nif);

	@Query("SELECT t FROM Administrador t WHERE t.nome LIKE %:p% OR t.nif LIKE %:p% ORDER BY t.nome ASC")
	public List<Administrador> buscarAdministrador(@Param("p") String parametro);

	public List<Administrador> findAllByOrderByNomeAsc();

}
