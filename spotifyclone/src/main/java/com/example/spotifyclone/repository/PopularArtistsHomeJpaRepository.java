package com.example.spotifyclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spotifyclone.model.PopularArtistHome;

@Repository
public interface PopularArtistsHomeJpaRepository extends JpaRepository<PopularArtistHome, Integer>{

}
