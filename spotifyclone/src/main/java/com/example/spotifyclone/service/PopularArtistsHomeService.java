package com.example.spotifyclone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.spotifyclone.model.PopularArtistHome;
import com.example.spotifyclone.repository.PopularArtistsHomeJpaRepository;
import com.example.spotifyclone.repository.PopularArtistsHomeRepository;

@Service
public class PopularArtistsHomeService implements PopularArtistsHomeRepository{

    @Autowired
    private PopularArtistsHomeJpaRepository popularArtistsHomeJpaRepository;

    @Override
    public ArrayList<PopularArtistHome> getArtists() {
        List<PopularArtistHome> artists =  popularArtistsHomeJpaRepository.findAll();
        return new ArrayList<>(artists);
    }

    @Override
    public PopularArtistHome getArtistById(int artistId) {
       try {
          PopularArtistHome artist = popularArtistsHomeJpaRepository.findById(artistId).get();
          return  artist;
       } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
       }
    }

    @Override
    public PopularArtistHome addArtist(PopularArtistHome popularArtistHome) {
        return popularArtistsHomeJpaRepository.save(popularArtistHome);
    }

}
