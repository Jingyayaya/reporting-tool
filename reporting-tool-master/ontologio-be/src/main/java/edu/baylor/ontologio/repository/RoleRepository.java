package edu.baylor.ontologio.repository;

import edu.baylor.ontologio.model.ERole;
import edu.baylor.ontologio.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
