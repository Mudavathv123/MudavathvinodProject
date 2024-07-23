package com.example.spotifyclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spotifyclone.model.Albums;

@Repository
public interface AlbumsJpaRepository extends JpaRepository<Albums, Integer> {
    
}
