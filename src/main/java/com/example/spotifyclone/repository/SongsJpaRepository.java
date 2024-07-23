package com.example.spotifyclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spotifyclone.model.Songs;

@Repository
public interface SongsJpaRepository extends JpaRepository<Songs, Integer> {

}
