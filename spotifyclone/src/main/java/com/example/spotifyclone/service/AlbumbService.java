package com.example.spotifyclone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.spotifyclone.model.Albums;
import com.example.spotifyclone.repository.AlbumbsRepository;
import com.example.spotifyclone.repository.AlbumsJpaRepository;

@Service
public class AlbumbService implements AlbumbsRepository{

    @Autowired
    private AlbumsJpaRepository albumsJpaRepository;

    @Override
    public ArrayList<Albums> getAlbums() {
      List<Albums> albums =  albumsJpaRepository.findAll();
      return new ArrayList<>(albums);
    }

    @Override
    public Albums getAlbumbsById(int albumId) {
       try{
            Albums album = albumsJpaRepository.findById(albumId).get();
            return album;
       }catch(Exception e) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
       }
    }

    @Override
    public Albums addAlbumb(Albums albums) {
        return albumsJpaRepository.save(albums);
    }

}
