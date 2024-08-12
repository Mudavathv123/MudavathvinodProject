package com.example.spotifyclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spotifyclone.model.Radio;

@Repository
public interface  RadioJpaRepository extends JpaRepository<Radio, Integer>{

}
